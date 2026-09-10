# Anti-AI Writing Style Guide

Applies to every piece of visible text in ENT Rotation Companion: card fronts/backs, case stems and teaching notes, clinical block text, anatomy notes, diagram titles/notes/labels, module titles and subtitles, and any UI copy (About page, empty states, etc.). Schema fields (`id`, `tags`, `ukmla`, `milestones`, `scope`, `redFlag`, `source`, `reviewer`, and similar) and clinical facts are never touched by this guide; it governs the phrasing of visible text only.

## Core objective

Write with the direct, natural cadence of a human writer. Eliminate predictable statistical-model language ("AI fingerprints").

## Forbidden vocabulary and transitions

Never use:

- "It's worth noting that..." / "That being said..."
- "Crucial" / "Pivotal" / "Delve" / "Tapestry" / "Beacon" / "In summary"
- "Utilize" (say "use") / "Facilitate" (say "help")
- Overused rule-of-three triads ("fast, scalable, and secure")

## Forbidden meta-commentary

Never step back from a clinical fact to grandly comment on its own significance, nature, or scope. This is the "AI narrator" tic: a sentence whose real job is praising or framing the pedagogical importance of the fact just stated, rather than adding any clinical content. If a sentence would still make sense with "and isn't that profound" tacked onto the end, cut it or replace it with a real fact.

Watch for constructions like:

- "This is the language of..." / "This granularity is the language of every head and neck tumor board."
- "This is exactly the kind of X that Y" / "This is what makes X so Y" / "This distinction is what separates X from Y"
- "underscores why...", "illustrates why this matters", "is a reminder that...", "speaks to...", "is emblematic of..."

If real clinical content is buried inside the flourish, pull it out and state it directly as a fact. Otherwise, delete the sentence outright. Either way, the paragraph should end on the clinical point, not on commentary about the clinical point.

## Forbidden punctuation and formatting

- Never use em dashes (—) or en dashes (–) anywhere, for any reason, in any field covered by this guide. This includes module/diagram/note titles and diagram label text, not just card/case prose.
- A plain hyphen (-) is the only dash character allowed, and only for its ordinary jobs: a genuinely hyphenated compound word ("post-tonsillectomy") or a short numeric/age/date range ("20-30 minutes", "2-4 weeks"). Never use a hyphen as a stand-in for an em/en dash to join two independent clauses; rewrite the sentence instead (see below).
- Avoid excessive bolding and italicizing.
- This applies to displayed figure captions and source/attribution lines too (e.g. use "OpenStax A&P 2e, CC BY 4.0", not "OpenStax A&P 2e - CC BY 4.0"). License tokens like "CC BY-SA" keep their ordinary hyphen.

## Spelling: American English throughout

Every field this guide covers uses American spelling, not British. Convert on sight; a few of the patterns that come up most in clinical writing:

- oedema -> edema, haematoma -> hematoma, haemorrhage -> hemorrhage, anaesthesia/anaesthetic -> anesthesia/anesthetic, oesophagus -> esophagus, paediatric -> pediatric, orthopaedic -> orthopedic, faeces -> feces
- colour -> color, tumour -> tumor, favour -> favor, behaviour -> behavior
- fibre -> fiber, centre -> center, litre -> liter
- -ise/-yse -> -ize/-yze (recognise -> recognize, organise -> organize, minimise -> minimize, characterise -> characterize)
- practise (verb) and practice (noun) both become "practice" in American usage

`id` values and any direct quotation from a named external source (a guideline title, a scored instrument's official name) are left exactly as they are, even if they happen to contain a British spelling: those are identifiers or verbatim citations, not prose, and are out of scope for this guide.

## Structural rules

- Vary sentence length on purpose. Mix short sentences with longer ones.
- Start sentences with subjects or active verbs, not empty transitional fluff.
- End sections abruptly and naturally, without a repetitive "in conclusion" wrap-up.
- Default to flowing prose for a single continuous explanation or a chain of reasoning (why something happens, how one finding leads to another).
- Switch to a bulleted or numbered list whenever the content is genuinely a set of discrete, parallel points a learner needs to scan and recall individually: a set of criteria, a differential list, a stepwise algorithm, red flags, or anything that would otherwise be a paragraph doing "first, ..., also, ..., and finally, ..." Use a numbered list specifically when the order or count matters (a sequence of steps, a fixed set of criteria); use bullets when the items are parallel but unordered. Don't force a list where there's genuinely only one continuous idea, and don't force prose onto something that's really five things a reader needs to check off.

## Applying this to clinical content specifically

Semicolons, colons, and plain commas cover almost everything an em dash used to do here: a semicolon links two related clauses, a colon introduces a list or explanation, and a comma with "which" or "and" does the rest. Rewrite the sentence around the punctuation rather than swapping the dash for something else in the same spot. Clinical accuracy, terminology, and the underlying facts of a card or case never change during a style pass. Only the sentence (or list) carrying them does.
