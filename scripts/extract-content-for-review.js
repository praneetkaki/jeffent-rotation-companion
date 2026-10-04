// Extracts EVERY piece of clinical/reference content from content/*.js into one
// reviewable markdown file, for faculty fact-checking before anything ships.
// Read-only: does not modify any source module.
//
// Content in this codebase isn't one uniform shape -- procedures.js, abbreviations.js,
// and pharmacology.js each use their own structured fields instead of a single html
// blob (see each module's own header comment for why). This script explicitly handles
// every shape actually in use as of the date it was last run, rather than only the
// "standard" module shape; if a future content file introduces a new shape, extend
// the per-module handling below rather than assuming the generic branches catch it.
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const contentDir = path.join(projectRoot, 'content');

function stripHtml(html) {
  if (!html) return '';
  return String(html)
    .replace(/<figure[\s\S]*?<\/figure>/g, m => {
      const cap = m.match(/<figcaption>([\s\S]*?)<\/figcaption>/);
      return cap ? `[figure: ${stripHtml(cap[1])}]` : '[figure]';
    })
    .replace(/<li>/g, '\n- ')
    .replace(/<\/li>/g, '')
    .replace(/<ol>|<\/ol>|<ul>|<\/ul>/g, '')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<\/p>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&ndash;/g, '-').replace(/&rarr;/g, '->')
    .replace(/&#39;/g, "'").replace(/&rsquo;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function renderTable(table) {
  if (!table || !table.head || !table.rows) return '';
  let t = `\n| ${table.head.join(' | ')} |\n`;
  t += `| ${table.head.map(() => '---').join(' | ')} |\n`;
  table.rows.forEach(row => { t += `| ${row.map(c => stripHtml(c)).join(' | ')} |\n`; });
  return t;
}

function renderDiagram(dg) {
  let t = `\n**Diagram: ${dg.title || dg.id || ''}**\n`;
  if (dg.note) t += `\n${stripHtml(dg.note)}\n`;
  if (dg.source) t += `\n_Image source: ${dg.source}_\n`;
  (dg.labels || []).forEach(l => { t += `- ${stripHtml(l.text)}\n`; });
  return t;
}

const modules = [];
global.window = { JEFFENT: { register: (mod) => modules.push(mod) } };
Object.defineProperty(global.window.JEFFENT, 'pimp', {
  set(v) { modules.push(Object.assign({ id: 'pimp-questions', title: 'Frequently Asked Questions (rounds/procedures)', __pimp: true }, v)); },
  get() { return undefined; },
  configurable: true
});
Object.defineProperty(global.window.JEFFENT, 'glossary', {
  set(v) { modules.push({ id: 'glossary', title: 'Glossary (inline term popovers)', __glossary: v }); },
  get() { return undefined; },
  configurable: true
});
Object.defineProperty(global.window.JEFFENT, 'frameworks', {
  set(v) { modules.push({ id: 'frameworks', title: 'Curriculum framework registry', __frameworks: v }); },
  get() { return undefined; },
  configurable: true
});
Object.defineProperty(global.window.JEFFENT, 'ukmla', {
  set(v) { modules.push({ id: 'ukmla', title: 'UKMLA scope registry', __ukmla: v }); },
  get() { return undefined; },
  configurable: true
});
// tracks.js is track metadata (name/color/icon), not reviewable clinical content -- skip.
Object.defineProperty(global.window.JEFFENT, 'tracks', { set() {}, get() { return undefined; }, configurable: true });

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.js'));
for (const f of files) {
  const full = path.join(contentDir, f);
  try {
    const code = fs.readFileSync(full, 'utf8');
    const fn = new Function('window', code + '\n//# sourceURL=' + f);
    fn(global.window);
  } catch (e) {
    console.error('FAILED to load', f, e.message);
  }
}

let out = `# JeffENT Content Review Export\n\nGenerated from content/*.js for clinical fact-checking. Every module, card, case, clinical block, table, diagram, glossary entry, and question bank currently in the app is below, in full, with no summarizing or omission. Each item lists its module id and field path so corrections can be traced back to source.\n\n`;

for (const mod of modules) {
  if (!mod || !mod.id) continue;
  out += `\n---\n\n## Module: ${mod.title || mod.id} (\`${mod.id}\`)\n`;

  // ---- glossary.js (flat array, not a registered module) ----
  if (mod.__glossary) {
    out += `\n${mod.__glossary.length} terms.\n`;
    mod.__glossary.forEach(g => {
      out += `\n**${g.term}**` + (g.keys && g.keys.length > 1 ? ` (also matches: ${g.keys.filter(k => k !== g.term).join(', ')})` : '') + `\n`;
      out += `- Definition: ${stripHtml(g.def)}\n`;
      if (g.more) out += `- More: ${stripHtml(g.more)}\n`;
    });
    continue;
  }

  // ---- frameworks.js (ACGME milestone code -> title lookup) ----
  if (mod.__frameworks) {
    const fw = mod.__frameworks;
    if (fw.source) out += `\nSource: ${fw.source}\n`;
    if (fw.competencies) {
      out += `\n### Competencies\n`;
      Object.keys(fw.competencies).forEach(k => { out += `- ${k}: ${fw.competencies[k]}\n`; });
    }
    if (fw.milestones) {
      out += `\n### Milestone subcompetencies (referenced by cards' \`milestones\` field)\n`;
      Object.keys(fw.milestones).forEach(k => { out += `- ${k}: ${fw.milestones[k]}\n`; });
    }
    continue;
  }

  // ---- ukmla.js (UK curriculum scope lists) ----
  if (mod.__ukmla) {
    const u = mod.__ukmla;
    if (u.source) out += `\nSource: ${u.source}\n`;
    if (u.presentations) out += `\n### Presentations\n${u.presentations.join(', ')}\n`;
    if (u.conditions) out += `\n### Conditions\n${u.conditions.join(', ')}\n`;
    continue;
  }

  out += `- version: ${mod.version || ''}\n`;
  out += `- status: ${mod.status ? mod.status.slice(0, 200) : ''}\n`;
  out += `- facultyReviewer: "${mod.facultyReviewer || ''}"\n`;
  if (mod.curriculumAnchors) out += `- curriculum anchors: ${mod.curriculumAnchors.join('; ')}\n`;
  if (mod.subtitle) out += `- subtitle: ${mod.subtitle}\n`;

  if (mod.anatomy && mod.anatomy.notes) {
    out += `\n### Anatomy notes\n`;
    mod.anatomy.notes.forEach((n, i) => {
      out += `\n**${n.title || 'note ' + i}**` + (n.tagline ? ` (tags: ${n.tagline})` : '') + `\n\n` + (n.keyPoints && n.keyPoints.length ? 'Key points:\n' + n.keyPoints.map(k => '- ' + stripHtml(k)).join('\n') + '\n\n' : '') + `${stripHtml(n.html)}\n`;
    });
  }
  if (mod.anatomy && mod.anatomy.diagrams) {
    out += `\n### Anatomy diagrams (${mod.anatomy.diagrams.length})\n`;
    mod.anatomy.diagrams.forEach(dg => { out += renderDiagram(dg); });
  }

  // ---- clinical: covers three distinct shapes seen across modules ----
  if (mod.clinical) {
    const c = mod.clinical;
    if (c.intro) out += `\n### Clinical section intro\n\n${stripHtml(c.intro)}\n`;
    // procedures-2min: a single quick-reference matcher table
    if (c.matcher) {
      out += `\n### Quick-matcher table\n${renderTable(c.matcher)}\n`;
    }
    if (c.blocks) {
      out += `\n### Clinical blocks (${c.blocks.length})\n`;
      c.blocks.forEach(b => {
        out += `\n**[${b.id}] ${b.title || ''}**` + (b.subspecialty ? ` (${b.subspecialty})` : '') + `\n`;
        // standard shape: prose html, optionally with its own table (pharmacology.js)
        if (b.html) out += `\n${stripHtml(b.html)}\n`;
        if (b.table) out += renderTable(b.table);
        // procedures-2min shape: structured pre-scrub brief, no html/table at all
        if (b.scenario) out += `\n- Scenario: ${stripHtml(b.scenario)}\n`;
        if (b.decisionPoints) b.decisionPoints.forEach(d => { out += `- Decision point: ${stripHtml(d)}\n`; });
        if (b.keySteps) b.keySteps.forEach(s => { out += `- Key step: ${stripHtml(s)}\n`; });
        if (b.dangerStructures) out += `- Danger structures: ${stripHtml(b.dangerStructures)}\n`;
        if (b.pearl) out += `- Pearl: ${stripHtml(b.pearl)}\n`;
      });
    }
    if (c.redFlags) {
      out += `\n### Red flags\n`;
      c.redFlags.forEach(rf => { out += `- ${stripHtml(rf.t)}\n`; });
    }
  }
  if (mod.redFlags) {
    out += `\n### Red flags\n`;
    mod.redFlags.forEach(rf => { out += `- ${stripHtml(rf.t)}\n`; });
  }

  if (mod.cases) {
    out += `\n### Cases (${mod.cases.length})\n`;
    mod.cases.forEach(c => {
      out += `\n**Case [${c.id}]**\n\nStem: ${stripHtml(c.stem)}\n`;
      if (c.prompts) c.prompts.forEach(p => { out += `\n- Q: ${stripHtml(p.q)}\n  A: ${stripHtml(p.a)}\n`; });
      if (c.teaching) out += `\nTeaching: ${stripHtml(c.teaching)}\n`;
    });
  }

  if (mod.reference) {
    out += `\n### Reference\n`;
    mod.reference.forEach(r => {
      out += `\n**[${r.id}] ${r.title || ''}**\n\n`;
      if (r.html) out += `${stripHtml(r.html)}\n`;
      if (r.table) out += renderTable(r.table);
    });
  }

  if (mod.__pimp && mod.sets) {
    if (mod.source) out += `\nSource: ${mod.source}\n`;
    out += `\n### Question sets (${mod.sets.length})\n`;
    mod.sets.forEach(s => {
      out += `\n**[${s.id}] ${s.title || ''}** (${s.group || ''}${s.track ? ', track: ' + s.track : ''})\n`;
      (s.questions || []).forEach(q => { out += `- Q: ${stripHtml(q.q)}\n  A: ${stripHtml(q.a)}\n`; });
    });
  }

  if (mod.cards) {
    out += `\n### Flashcards (${mod.cards.length})\n`;
    mod.cards.forEach(c => {
      out += `\n**[${c.id}]** tags: ${(c.tags || []).join(', ')}` +
        (c.milestones ? `, milestones: ${c.milestones.join(', ')}` : '') +
        (c.ukmla ? `, UKMLA: ${Array.isArray(c.ukmla) ? c.ukmla.join(', ') : c.ukmla}` : '') +
        `${c.redFlag ? ', RED FLAG' : ''}, reviewer: ${c.reviewer || '(none)'}\n`;
      out += `- Front: ${stripHtml(c.front)}\n`;
      out += `- Back: ${stripHtml(c.back)}\n`;
      if (c.source) out += `- Source: ${stripHtml(c.source)}\n`;
    });
  }
}

// ---- write: one combined file + one file per module (paste-sized for OpenEvidence etc.) ----
const outDir = path.join(projectRoot, 'docs', 'content-export');
fs.mkdirSync(outDir, { recursive: true });
fs.readdirSync(outDir).filter(f => f.endsWith('.md')).forEach(f => fs.unlinkSync(path.join(outDir, f)));

const SEP = '\n---\n\n## Module:';
const parts = out.split(SEP);
const header = parts.shift();
const stamp = new Date().toISOString().slice(0, 10);
const prompt = '> **How to use:** paste a module file below (or ALL.md) into OpenEvidence / any reviewer, followed by an instruction such as\n' +
  '> "Fact-check every claim against current guidelines, flag anything outdated or wrong, and propose exact replacement wording. Keep our style: no em dashes, plain clinical language."\n' +
  '> Send changes back to Claude Code with the item id (e.g. `[card-id]`) so edits land in `content/*.js`. This folder is generated: do not edit it by hand.\n';
const index = [];
parts.forEach(chunk => {
  const m = chunk.match(/^ (.*?) \(`([^`]+)`\)/);
  const id = m ? m[2] : 'section-' + index.length;
  const title = m ? m[1] : id;
  const body = SEP + chunk;
  fs.writeFileSync(path.join(outDir, id + '.md'), `# ${title}\n\n_Generated ${stamp} from content/*.js_\n\n${prompt}${body}`, 'utf8');
  index.push({ id, title, chars: body.length });
});
const readme = `# Content export (generated ${stamp})\n\nEvery piece of module content, extracted from \`content/*.js\`. Regenerate with \`node scripts/extract-content-for-review.js\`.\n\n${prompt}\n| File | Section | Size |\n|---|---|---|\n` +
  index.map(x => `| [${x.id}.md](${x.id}.md) | ${x.title} | ~${Math.round(x.chars / 1000)}k chars |`).join('\n') + '\n';
fs.writeFileSync(path.join(outDir, 'README.md'), readme, 'utf8');
fs.writeFileSync(path.join(outDir, 'ALL.md'), header + `\n_Generated ${stamp}_\n\n${prompt}` + parts.map(c => SEP + c).join(''), 'utf8');
console.log('Wrote', outDir, '(', index.length, 'module files + ALL.md,', out.length, 'chars )');
