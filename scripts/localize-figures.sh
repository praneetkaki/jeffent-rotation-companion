#!/usr/bin/env bash
# Localize the remote (hotlinked) figures into assets/ and rewrite content src paths.
# Run from the project root on a network that allows upload.wikimedia.org.
set -u
cd "$(dirname "$0")/.." || exit 1
ok=0; fail=0
dl() {  # url localpath contentfile
  local url="$1" out="$2" cf="$3"
  mkdir -p "$(dirname "$out")"
  if [ -s "$out" ]; then echo "exists  $out"; else
    if curl -H "User-Agent: Mozilla/5.0" -A "Mozilla/5.0" -fsSL -m 60 -o "$out" "$url" && [ -s "$out" ]; then echo "got     $out"; else echo "FAIL    $url"; rm -f "$out"; fail=$((fail+1)); return; fi
  fi
  # rewrite the remote URL to the local path in the content file (only if downloaded)
  perl -0777 -pi -e "s/\Q$url\E/$out/g" "$cf" && echo "        rewired in $cf" && ok=$((ok+1))
}
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gray137.png/1024px-Gray137.png" "assets/img/anatomy-atlas/temporal-bone-gray137.png" "content/anatomy-atlas.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gray788.png/800px-Gray788.png" "assets/img/anatomy-atlas/facial-nerve-gray788.png" "content/anatomy-atlas.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gray981.png/800px-Gray981.png" "assets/img/anatomy-atlas/branchial-arches-gray981.png" "content/anatomy-atlas.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gray193.png/1024px-Gray193.png" "assets/img/anatomy-atlas/skull-base-gray193.png" "content/anatomy-atlas.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Illu01_head_neck.jpg/1024px-Illu01_head_neck.jpg" "assets/img/head-neck/head-neck-sagittal-illu01.jpg" "content/ent-exam-clinic-complaints.js"
dl "https://upload.wikimedia.org/wikipedia/commons/b/bc/View-normal-tympanic-membrane.png" "assets/img/ear/normal-tympanic-membrane.png" "content/ent-exam-clinic-complaints.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Anatomy_of_the_Human_Ear.svg/1280px-Anatomy_of_the_Human_Ear.svg.png" "assets/img/ear/anatomy-of-human-ear.png" "content/otology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gray910.png/800px-Gray910.png" "assets/img/ear/tympanic-cavity-medial-gray910.png" "content/otology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Locus_Kiesselbachii_Shematic_EN.svg/1024px-Locus_Kiesselbachii_Shematic_EN.svg.png" "assets/img/rhinology/kiesselbach-plexus.png" "content/rhinology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gray853.png/800px-Gray853.png" "assets/img/rhinology/nasal-septum-gray853.png" "content/rhinology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gray855.png/800px-Gray855.png" "assets/img/rhinology/lateral-nasal-wall-gray855.png" "content/rhinology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vocal_cords_layers.svg/800px-Vocal_cords_layers.svg.png" "assets/img/laryngology/vocal-fold-layers.png" "content/laryngology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gray791.png/800px-Gray791.png" "assets/img/laryngology/laryngeal-nerves-gray791.png" "content/laryngology.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Gray1024.png/800px-Gray1024.png" "assets/img/head-neck/salivary-glands-gray1024.png" "content/head-neck.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gray1174.png/800px-Gray1174.png" "assets/img/head-neck/thyroid-parathyroid-gray1174.png" "content/head-neck.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gray1014.png/800px-Gray1014.png" "assets/img/head-neck/oral-cavity-gray1014.png" "content/head-neck.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gray912.png/800px-Gray912.png" "assets/img/pediatric/auditory-tube-gray912.png" "content/pediatric.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gray981.png/800px-Gray981.png" "assets/img/pediatric/branchial-arches-gray981.png" "content/pediatric.js"
dl "https://upload.wikimedia.org/wikipedia/commons/7/77/Tonsils_diagram.jpg" "assets/img/pediatric/waldeyers-ring-tonsils.jpg" "content/pediatric.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Upper_respiratory_tract.svg/1024px-Upper_respiratory_tract.svg.png" "assets/img/sleep/upper-respiratory-tract.png" "content/sleep.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mallampati.svg/1024px-Mallampati.svg.png" "assets/img/sleep/mallampati.png" "content/sleep.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gray794.png/800px-Gray794.png" "assets/img/sleep/hypoglossal-nerve-gray794.png" "content/sleep.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CPAP_Machine.jpg/800px-CPAP_Machine.jpg" "assets/img/sleep/cpap-machine.jpg" "content/sleep.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Gray160.png/800px-Gray160.png" "assets/img/facial-plastics/facial-skeleton-gray160.png" "content/facial-plastics.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Head_facial_nerve_branches_TZBMC.jpg/1024px-Head_facial_nerve_branches_TZBMC.jpg" "assets/img/facial-plastics/facial-nerve-branches.jpg" "content/facial-plastics.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Gray888.png/800px-Gray888.png" "assets/img/facial-plastics/orbit-gray888.png" "content/facial-plastics.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2306_The_Larynx.jpg/1024px-2306_The_Larynx.jpg" "assets/img/laryngology/larynx-openstax-2306.jpg" "content/emergencies.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Deep_cervical_fascia.svg/1024px-Deep_cervical_fascia.svg.png" "assets/img/emergencies/deep-cervical-fascia.png" "content/emergencies.js"
dl "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Illu01_head_neck.jpg/1024px-Illu01_head_neck.jpg" "assets/img/head-neck/head-neck-sagittal-illu01.jpg" "content/emergencies.js"
echo "---"; echo "localized: $ok  failed: $fail"
echo "If any failed, the app keeps using the remote URL for those (still works online)."
