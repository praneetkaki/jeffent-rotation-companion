#!/usr/bin/env python3
"""
Regenerate IMAGE-REGISTRY.json from the live content/*.js files.

Walks every content module and finds every place an image (assets/img/...,
in an <img src=...> figure OR a diagrams[].src field) is actually used, then
groups by image file so you can see, for any single image, every spot on the
site that shows it -- including a file used in several different places.

Run this any time content/*.js changes and you want an up-to-date map:

    python3 scripts/build-image-registry.py

It only reads content/*.js and writes IMAGE-REGISTRY.json; it never touches
the content files themselves.
"""
import re
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT, "content")
OUT_PATH = os.path.join(ROOT, "IMAGE-REGISTRY.json")

IMG_TAG_RE = re.compile(
    r"<figure class='note-fig'(?:\s+data-credit=(?:\\\")?['\"](?P<credit>[^'\"\\]*))?.*?"
    r"src=['\"](?P<src>assets/[^'\"]+)['\"].*?alt=['\"](?P<alt>[^'\"]*)['\"].*?"
    r"(?:<figcaption>(?P<cap>[^<]*)</figcaption>)?</figure>",
    re.DOTALL,
)

# diagrams[] entries: { ... id: "...", title: "...", ... src: "assets/...", source: "..." ... }
DIAGRAM_SRC_RE = re.compile(r"src:\s*\"(?P<src>assets/[^\"]+)\"")

ID_RE = re.compile(r'id:\s*"([^"]+)"')
TITLE_RE = re.compile(r'title:\s*"([^"]*)"')
FRONT_RE = re.compile(r'front:\s*"([^"]{0,120})')
STEM_RE = re.compile(r'stem:\s*"([^"]{0,120})')
SECTION_KEYS = ["cards:", "cases:", "reference:", "diagrams:", "redFlags:"]


def nearest_before(text, pos, pattern, window=1500):
    """Last match of `pattern` in text[max(0,pos-window):pos]."""
    start = max(0, pos - window)
    matches = list(pattern.finditer(text, start, pos))
    return matches[-1].group(1) if matches else None


def nearest_section(text, pos, window=8000):
    start = max(0, pos - window)
    chunk = text[start:pos]
    best_key, best_idx = None, -1
    for key in SECTION_KEYS:
        idx = chunk.rfind(key)
        if idx > best_idx:
            best_idx, best_key = idx, key
    return best_key.rstrip(":") if best_key else None


def scan_file(path):
    text = open(path, encoding="utf-8").read()
    rel = os.path.relpath(path, ROOT)
    usages = []

    for m in IMG_TAG_RE.finditer(text):
        pos = m.start()
        usages.append({
            "src": m.group("src"),
            "kind": "figure",
            "section": nearest_section(text, pos),
            "context_id": nearest_before(text, pos, ID_RE),
            "context_title": nearest_before(text, pos, TITLE_RE),
            "front_snippet": nearest_before(text, pos, FRONT_RE),
            "stem_snippet": nearest_before(text, pos, STEM_RE),
            "alt": m.group("alt"),
            "caption": m.group("cap"),
            "credit": m.group("credit"),
        })

    for m in DIAGRAM_SRC_RE.finditer(text):
        pos = m.start()
        section = nearest_section(text, pos)
        if section != "diagrams":
            continue  # this src: belongs to some other structure, skip
        usages.append({
            "src": m.group("src"),
            "kind": "diagram",
            "section": "diagrams",
            "context_id": nearest_before(text, pos, ID_RE, window=500),
            "context_title": nearest_before(text, pos, TITLE_RE, window=500),
            "front_snippet": None,
            "stem_snippet": None,
            "alt": None,
            "caption": None,
            "credit": None,
        })

    return rel, usages


def main():
    by_image = {}
    total_usages = 0
    for path in sorted(glob.glob(os.path.join(CONTENT_DIR, "*.js"))):
        rel, usages = scan_file(path)
        for u in usages:
            total_usages += 1
            entry = by_image.setdefault(u["src"], {"file": u["src"], "used_in": []})
            entry["used_in"].append({
                "module_file": rel,
                "kind": u["kind"],
                "section": u["section"],
                "context_id": u["context_id"],
                "context_title": u["context_title"],
                "front_snippet": u["front_snippet"],
                "stem_snippet": u["stem_snippet"],
                "alt": u["alt"],
                "caption": u["caption"],
                "credit": u["credit"],
            })

    registry = {
        "generated_by": "scripts/build-image-registry.py",
        "note": "Auto-generated from content/*.js. Do not hand-edit; rerun the script instead.",
        "image_count": len(by_image),
        "total_usages": total_usages,
        "images": [by_image[k] for k in sorted(by_image)],
    }

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(registry, f, indent=1)
        f.write("\n")

    multi = [v for v in by_image.values() if len(v["used_in"]) > 1]
    print(f"images tracked: {len(by_image)}")
    print(f"total usages: {total_usages}")
    print(f"images used in more than one place: {len(multi)}")
    print(f"wrote {OUT_PATH}")


if __name__ == "__main__":
    sys.exit(main())
