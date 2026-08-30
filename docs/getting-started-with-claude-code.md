# Building this with Claude Code — a getting-started guide

You have a working prototype. This guide gets you developing it on your own laptop with the **Claude Code CLI**, and publishing it for the rotation. No prior software-engineering background assumed.

## 1. One-time setup (about 20 minutes)

**a. The code is already on your machine.** It's unzipped in your ERAS folder — nothing to do here. Its full path is:

```
/Users/praneetkaki/Claude/Projects/ERAS Otolarynology residency Application/jeffent-rotation-companion
```

**b. Install Claude Code.** Follow the current instructions at the official docs (search "Claude Code install"). It runs in your terminal. Sign in with your Anthropic account.

**c. Get a GitHub account** (free) if you don't have one. This is where the code lives, how faculty review changes, and how you publish the site for free.

**d. Install `git`** (macOS: it comes with the Xcode command-line tools; run `git --version` and follow the prompt).

## 2. Your daily loop

> **Two things that trip people up (they got me too):**
> 1. The word right after the three backticks in a code block — like `bash` — is just a *label* naming the language. **Don't type it.** Only type the real commands on the lines below it.
> 2. Folder paths with spaces must be wrapped in "quotes" (that's why the `cd` line below has them). Easiest trick: type `cd ` (with a trailing space), then **drag the `jeffent-rotation-companion` folder from Finder into the Terminal window** — macOS fills in the correct path for you. Then press Enter.


Open a terminal, go to the project, and start Claude Code:
```bash
cd "/Users/praneetkaki/Claude/Projects/ERAS Otolarynology residency Application/jeffent-rotation-companion"
claude
```
Now you're talking to Claude *inside the repo* — it can read every file, follow `CLAUDE.md`, make edits, and run commands. You describe what you want in plain English; it does the typing.

To see your changes, in a second terminal run a local server and open the page:
```bash
python3 -m http.server 8000     # then visit http://localhost:8000
```

## 3. What to actually ask it (highest-value first)

**Build content faster.** Paste a curriculum list or your notes and say:
> "Following `docs/content-authoring-guide.md`, draft a new module `content/airway-emergencies.js` on ENT emergencies — 15 recall cards, 3 cases, a red-flag list, all marked DRAFT with the AAO-HNS anchor. Then add the `<script>` tag to `index.html`."

**Make a faculty review pass easy.** 
> "List every card across `content/` whose `reviewer` field is empty, grouped by module, as a checklist I can send to Dr. ___."

**Add the diagrams the module needs.**
> "Add a labeled SVG of the larynx (or neck levels I–VI) with fade-on-demand labels, matching the tympanic-membrane pattern."

**Wire in the study instrumentation later.**
> "Add a pre-test / post-test flow that links out to a Google Form and passes an anonymous session id in the URL. No personal data stored in the app."

**Polish and fix.**
> "The progress bar doesn't update on the last card — fix it." / "Add a keyboard shortcut: space to reveal, 1/2/3 to rate."

## 4. Publish it (free, ~10 minutes)

Ask Claude Code:
> "Walk me through creating a GitHub repo for this and pushing it, then enabling GitHub Pages so I get a public URL."

It'll give you the exact `git` commands and the Pages settings. The result is a link like `https://<you>.github.io/jeffent-rotation-companion` you can share on the rotation.

## 5. How faculty review works (the important part)
- You draft content with Claude Code → it's marked **DRAFT**.
- Faculty review a module (share the URL, or export the review checklist above).
- You set each item's `reviewer` field and the module `status` once signed off.
- Only reviewed content should be presented as final. This is what makes the tool — and your eventual abstract — credible.

## 6. Guardrails to keep in mind
- **No patient data**, ever. Fictional cases only.
- **Images:** author-drawn SVG, faculty-provided, or open-licensed (CC) only.
- Keep clinical content in `content/`, code in `js/`. If a request would blur that, ask Claude Code to keep them separate.
- You own the medicine. If you couldn't defend a card to an attending, mark it for review before it ships.

## Quick reference
| I want to… | Do this |
|---|---|
| Edit content | Open the file in `content/`, or ask Claude Code |
| Preview changes | `python3 -m http.server 8000` → localhost:8000 |
| Add a module | New `content/*.js` + `<script>` in `index.html` |
| Track what needs review | Ask Claude Code for the empty-`reviewer` checklist |
| Publish | GitHub repo → Settings → Pages |
