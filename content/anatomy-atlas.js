/* anatomy-atlas.js — "Anatomy Atlas" track (ROADMAP.md §4, item 9).
 *
 * A cross-cutting, growing collection of labeled diagrams and imaging stacks —
 * not tied to a single subspecialty. Ships today with a sample CT stack viewer
 * so the mechanism is demoable now; the slices are SAMPLE placeholders (see
 * docs/MEDIA-GUIDE.md for how to swap in a faculty-provided de-identified scan)
 * and are not real patient data.
 *
 * STATUS: DRAFT. No clinical content lives in this track — anatomy only.
 */
window.JEFFENT.register({
  id: "anatomy-atlas",
  track: "anatomy-atlas",
  trackName: "Anatomy Atlas",
  trackAbbr: "AN",
  order: 1,
  title: "Anatomy Atlas",
  subtitle: "Labeled diagrams and imaging stacks, cross-cutting every subspecialty. Grows alongside the topic tracks.",
  version: "0.1.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT — pending faculty review",
  facultyReviewer: "",
  curriculumAnchors: [
    "AAO-HNS Otolaryngology Core Curriculum — anatomy objectives, mapped per structure as diagrams are added",
    "Delphi priority topic list — map exact items with faculty sponsor"
  ],

  anatomy: {
    notes: [],
    diagrams: [],
    stacks: [
      {
        id: "neck-ct-normal",
        title: "Normal neck CT (axial)",
        note: "Scroll superior → inferior with the slider, mouse wheel, or ↑/↓ arrow keys. Toggle labels to test yourself before checking.",
        source: "SAMPLE placeholder slices — replace with a faculty-provided de-identified normal neck CT before this is used for real study (see docs/MEDIA-GUIDE.md). Not real patient data.",
        slices: [
          "assets/ct/neck/slice-01.png", "assets/ct/neck/slice-02.png", "assets/ct/neck/slice-03.png",
          "assets/ct/neck/slice-04.png", "assets/ct/neck/slice-05.png", "assets/ct/neck/slice-06.png",
          "assets/ct/neck/slice-07.png", "assets/ct/neck/slice-08.png", "assets/ct/neck/slice-09.png",
          "assets/ct/neck/slice-10.png", "assets/ct/neck/slice-11.png", "assets/ct/neck/slice-12.png"
        ],
        // labels keyed by slice index (0-based); percent coords over the image.
        labels: {
          5: [
            { text: "Airway (larynx/trachea)", xPct: 50, yPct: 46 },
            { text: "Carotid a.", xPct: 36, yPct: 48 }, { text: "Carotid a.", xPct: 64, yPct: 48 },
            { text: "Sternocleidomastoid", xPct: 16, yPct: 52 }, { text: "Sternocleidomastoid", xPct: 84, yPct: 52 },
            { text: "Vertebral body", xPct: 50, yPct: 70 },
            { text: "Thyroid lobe", xPct: 40, yPct: 50 }, { text: "Thyroid lobe", xPct: 60, yPct: 50 }
          ],
          7: [
            { text: "Airway (trachea)", xPct: 50, yPct: 47 },
            { text: "Vertebral body", xPct: 50, yPct: 70 }
          ]
        }
      }
    ]
  }
});
