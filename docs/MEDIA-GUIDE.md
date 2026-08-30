# Media & Licensing Guide

How to source images and the CT scan legally and credibly. The test for every image: **could you show its source line to an attending or a journal editor without flinching?** If yes, use it. If you can't name the source and license, don't.

---

## The one rule
No images pulled from Google Images, textbooks, UpToDate, lecture slides, or another app. Those are copyrighted. Use only:
1. **Public domain** (free, no strings),
2. **Openly licensed** (Creative Commons — free *with attribution*, some non-commercial), or
3. **Faculty-/self-provided** (with permission; de-identified).

Every image in the app must display a **source line** (the app enforces a `source` field). Keep a running credits list as you go.

---

## Best sources (vetted)

| Source | What it's good for | License | Notes |
|---|---|---|---|
| **Gray's Anatomy plates** (Wikimedia Commons) | Ear, larynx, neck, sinus, cranial nerve anatomy | **Public domain** | The gold mine — classic, clean, totally free. [Category:Gray's Anatomy plates](https://commons.wikimedia.org/wiki/Category:Gray's_Anatomy_plates); a curated ENT set: [Larynx (Gray's) on Radiopaedia](https://radiopaedia.org/cases/larynx-grays-illustrations-1) |
| **Wikimedia Commons** (general) | Photos, diagrams, some clinical images | Varies — **check each file** | Look for "Public domain" or "CC BY / CC BY-SA". Copy the exact file URL + author for the source line. |
| **OpenStax Anatomy & Physiology** | Modern, clean anatomy illustrations | **CC BY 4.0** | Attribution required; commercial-OK. |
| **Anatomography / BodyParts3D** | 3D-rendered anatomy | **CC BY 2.1 (JP)** | Good for orientation figures. |
| **Radiopaedia** | Radiology (CT/MR/X-ray), including a [normal neck CT](https://radiopaedia.org/cases/normal-neck-ct) and [annotated scrollable neck CT](https://radiopaedia.org/cases/ct-neck-with-annotated-scrollable-images-1) | **CC BY-NC-SA 3.0** | Usable *only if the app stays non-commercial*, with attribution + share-alike. See their [attribution guide](https://radiopaedia.org/articles/using-and-attributing-images-from-radiopaedia-1). Faculty scan is cleaner. |
| **TCIA — The Cancer Imaging Archive** | Real de-identified CT/MR volumes (e.g., [Head-Neck-CT-Atlas](https://www.cancerimagingarchive.net/analysis-result/head-neck-ct-atlas/)) | Mostly **CC BY 3.0/4.0** (per collection) | De-identified DICOM/NRRD; needs conversion to images. Best for the *real* CT stack. |

**Attribution format** (put in each item's `source` field):
> *"[Title/structure]. [Author or 'Gray's Anatomy 1918']. [License]. Via [source + URL]."*
Example: *"Tympanic membrane. Gray's Anatomy (1918). Public domain. Via Wikimedia Commons."*

---

## Getting the images into the app
1. On the source page, use its **Download / "Use this file"** option to save the original.
2. Rename clearly: `assets/img/<region>/<structure>.jpg` (e.g., `assets/img/ear/tympanic-membrane.jpg`).
3. Add it to the content file as a `kind:"image"` diagram with `xPct/yPct` labels and the `source` line (see `docs/MEDIA-SPEC.md`).
4. You can ask Claude Code: *"download the image at <Wikimedia file URL> into `assets/img/ear/` and add it as a labeled image to the otology module."*

**Starter shopping list (first modules):**
- Tympanic membrane (Gray's) — otology
- External/middle/inner ear overview (Gray's) — otology
- Larynx, coronal + superior view (Gray's) — laryngology
- Neck triangles & nodal levels (Gray's / OpenStax) — head & neck
- Paranasal sinuses, coronal (Gray's / OpenStax) — rhinology

---

## The CT scan — what to ask faculty for
You chose the cleanest path: a faculty/radiology-provided scan. Ask for:

> **A normal (no significant pathology), fully de-identified axial CT of the neck**, for a medical-student teaching tool. Either:
> - a stack of **image files (PNG/JPG), in slice order** (simplest), **or**
> - the **DICOM series** (we'll convert it to images).

**De-identification is non-negotiable:** no name, MRN, DOB, or accession — not in the image pixels and not in the filenames. This should go through the proper channel (a faculty sponsor, and an education/IRB exemption if required). A truly de-identified normal teaching scan is low-risk, but confirm the pathway before it goes in a shared/published app.

**When you have it:** drop the ordered images into `assets/ct/neck/` (replacing the SAMPLE slices), update the stack's `slices` list and `source` line, and have faculty verify the labels. Ask Claude Code: *"replace the sample neck-CT slices with the real ones in `assets/ct/neck/`, update the slice count and source line."*

---

## Meanwhile
The app ships now with **SAMPLE placeholder** CT slices so the viewer works and demos today. They're clearly labeled "not real patient data" — fine to show as a *mechanism* preview, but swap in the real de-identified scan before the tool is used for actual study or shown as clinical content.
