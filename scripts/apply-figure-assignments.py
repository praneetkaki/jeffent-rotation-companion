#!/usr/bin/env python3
"""Apply figure re-assignment JSON files onto content/*.js.

Surgical approach: for each item, locate its own unique id/title marker, then
only touch the ONE nearby <figure>...</figure> (or a single insertion point)
-- never a broad "until next marker" span -- so edits for different items can
never overlap or corrupt each other.
"""
import re, json, glob, os, sys

ROOT = "/Users/praneetkaki/Claude/Projects/ERAS Otolarynology residency Application/jeffent-rotation-companion"
SCRATCH = "/private/tmp/claude-502/-Users-praneetkaki-Claude-Projects-ERAS-Otolarynology-residency-Application-jeffent-rotation-companion/74efe5d2-92f0-4e12-8b49-6a6ac5c0c74b/scratchpad"

FIG_RE = re.compile(
    r"<figure class='note-fig'(?:\s+data-credit=(?:\\\")?['\"](?:[^'\"\\]|\\.)*['\"]\)?)?.*?"
    r"src=['\"][^'\"]+['\"].*?alt=['\"][^'\"]*['\"].*?"
    r"(?:<figcaption>[^<]*</figcaption>)?</figure>",
    re.DOTALL
)

def humanize(filename):
    base = re.sub(r'\.(png|svg|jpg|jpeg)$', '', filename, flags=re.I)
    base = base.replace('_', ' ').replace('-', ' ')
    base = re.sub(r'\s+', ' ', base).strip()
    return base[0].upper() + base[1:] if base else base

def js_dq_escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

def make_figure_html(filename, topic):
    alt = js_dq_escape(humanize(filename).replace("'", ""))
    cap = js_dq_escape((topic.rstrip('.') + '.').replace("'", "&#39;"))
    return (
        "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, "
        "replace credit before sharing.'><img class='zoomable' src='assets/img/figures/" + filename +
        "' alt='" + alt + "' loading='lazy' tabindex='0' role='button' "
        "aria-label='Enlarge figure'><figcaption>" + cap + "</figcaption></figure>"
    )

def escape_for_regex_literal(s):
    return re.escape(s)

NOTE_MARKER_RE = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)"\s*,\s*html:\s*"')

def all_note_markers(text):
    return [(m.start(), m.end(), m.group(1).replace('\\"', '"')) for m in NOTE_MARKER_RE.finditer(text)]

def all_id_field_markers(text, field):
    """All (id_start, field_open_end, id) where an object has id:"..." followed
    (within 4000 chars) by field:" -- used both to locate an item and to bound
    how far stray-figure cleanup may look."""
    out = []
    for m in re.finditer(r'id:\s*"((?:[^"\\]|\\.)*)"', text):
        idval = m.group(1).replace('\\"', '"')
        fm = re.compile(re.escape(field) + r':\s*"').search(text, m.end(), m.end() + 4000)
        if fm:
            out.append((m.start(), fm.end(), idval))
    return out

def all_object_starts(text):
    """Every position in the file that looks like the start of some object's own
    id/title marker (regardless of kind) -- note titles AND any `id: "..."`. Used
    purely as a universal upper-bound fence so one item's figure scan can never
    bleed into a sibling object's content, whatever kind that sibling is."""
    starts = [m.start() for m in NOTE_MARKER_RE.finditer(text)]
    starts += [m.start() for m in re.finditer(r'id:\s*"(?:[^"\\]|\\.)*"', text)]
    starts.sort()
    return starts

def find_marker(text, kind, key, all_starts, note_markers=None, id_markers=None, id_html_markers=None):
    """Return (field_open_end, upper_bound) for the item, or None / 'AMBIGUOUS'."""
    if kind == "note":
        matches = [x for x in note_markers if x[2] == key]
        if not matches and id_html_markers is not None:
            # some "note" blocks also carry their own id: field, and the
            # assignment sometimes names that id instead of the title text
            matches = [x for x in id_html_markers if x[2] == key]
        if not matches:
            return None
        if len(matches) > 1:
            return 'AMBIGUOUS'
        start, field_open_end, _ = matches[0]
    else:
        matches = [x for x in id_markers if x[2] == key]
        if not matches:
            return None
        if len(matches) > 1:
            return 'AMBIGUOUS'
        start, field_open_end, _ = matches[0]

    later = [s for s in all_starts if s > start]
    upper = min(later) if later else len(text)
    upper = min(upper, field_open_end + 6000)
    return field_open_end, upper

def process_module(module_name):
    content_path = os.path.join(ROOT, "content", module_name + ".js")
    assign_path = os.path.join(SCRATCH, "assign_" + module_name + ".json")
    if not os.path.exists(assign_path):
        print("SKIP (no assignment file):", module_name)
        return
    text = open(content_path, encoding='utf-8').read()
    items = json.load(open(assign_path))

    stats = {"applied": 0, "skipped_null": 0, "skipped_no_match": 0, "skipped_ambiguous": 0, "skipped_no_field": 0}
    edits = []  # (start, end, replacement) -- all small, figure-sized or point inserts

    note_markers = all_note_markers(text)
    all_starts = all_object_starts(text)
    id_markers_cache = {}
    def get_id_markers(field):
        if field not in id_markers_cache:
            id_markers_cache[field] = all_id_field_markers(text, field)
        return id_markers_cache[field]

    for item in items:
        fname = item.get("chosen_filename")
        if not fname:
            stats["skipped_null"] += 1
            continue
        kind = item["kind"]
        key = item["id_or_title"]
        topic = item.get("topic", "")

        if kind == "note":
            result = find_marker(text, kind, key, all_starts, note_markers=note_markers,
                                  id_html_markers=get_id_markers('html'))
        else:
            field = {'diagram': 'src', 'case': 'teaching', 'card': 'back'}[kind]
            result = find_marker(text, kind, key, all_starts, id_markers=get_id_markers(field))
        if result is None:
            print(f"  WARN [{module_name}] {kind} '{key}': marker/field not found, skipping")
            stats["skipped_no_match"] += 1
            continue
        if result == 'AMBIGUOUS':
            print(f"  WARN [{module_name}] {kind} '{key}': multiple id matches, skipping")
            stats["skipped_ambiguous"] += 1
            continue

        field_open_end, upper_bound = result

        if kind == "diagram":
            # field_open_end is right after src: " -- replace up to the closing quote
            close_quote = text.find('"', field_open_end)
            if close_quote == -1 or close_quote > upper_bound:
                stats["skipped_no_field"] += 1
                continue
            edits.append((field_open_end, close_quote, "assets/img/figures/" + fname))
            stats["applied"] += 1
            continue

        # note / case / card: this whole item was evaluated as ONE unit with ONE chosen
        # image, so replace the first existing <figure> within the item's own bound with
        # the new one, and delete every OTHER existing figure in that same bound (stray
        # leftovers from the old scattered/duplicated figures, adjacent or not).
        all_figs_here = list(FIG_RE.finditer(text, field_open_end, upper_bound))
        new_fig = make_figure_html(fname, topic)
        if all_figs_here:
            first = all_figs_here[0]
            edits.append((first.start(), first.end(), new_fig))
            for extra in all_figs_here[1:]:
                edits.append((extra.start(), extra.end(), ""))
        else:
            edits.append((field_open_end, field_open_end, new_fig))
        stats["applied"] += 1

    # sanity check: no overlaps
    edits.sort(key=lambda e: e[0])
    for i in range(len(edits) - 1):
        if edits[i][1] > edits[i+1][0]:
            raise RuntimeError(f"OVERLAPPING EDITS in {module_name}: {edits[i]} vs {edits[i+1]}")

    # apply back-to-front
    for start, end, repl in sorted(edits, key=lambda e: e[0], reverse=True):
        text = text[:start] + repl + text[end:]

    # tidy up empty-string concatenation glue left by any fully-deleted stray figure
    text = re.sub(r'""\s*\+\s*', '', text)
    text = re.sub(r'\s*\+\s*""', '', text)

    with open(content_path, 'w', encoding='utf-8') as f:
        f.write(text)

    print(module_name, stats)


if __name__ == "__main__":
    modules = ["anatomy-atlas", "emergencies", "ent-exam-clinic-complaints", "facial-plastics",
               "head-neck", "laryngology", "otology", "pediatric", "rhinology", "sleep"]
    for m in modules:
        process_module(m)
