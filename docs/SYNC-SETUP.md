# Setting up cross-device sync

By default this app is fully local: every student's progress lives only in
their own browser's `localStorage`, no accounts, no backend. That's still
true today unless you complete the steps below.

This feature adds an *optional* way for a student to carry their progress
between two devices (say, a laptop and a phone) using a **username they
pick themselves — no password, no email, no sign-up flow.** See the header
comment in `js/sync.js` for the trust model and its limits before you turn
this on: a username is not a password, and it's last-write-wins (no merge)
if a student somehow studies on two devices at the exact same moment.

## 1. Create a free Firebase project

1. Go to <https://console.firebase.google.com> and sign in with any Google
   account (this can be a personal one — nothing here needs your school
   email).
2. Click **Add project**, give it any name (e.g. "jeffent-sync"), and finish
   the wizard. You can decline Google Analytics, it's not needed here.
3. Once created, click the **web icon (`</>`)** on the project overview page
   to register a web app. Name it anything. You do **not** need Firebase
   Hosting for this.
4. Firebase will show you a `firebaseConfig` object with six fields
   (`apiKey`, `authDomain`, `projectId`, `storageBucket`,
   `messagingSenderId`, `appId`). Copy all six.

## 2. Paste your config into the app

Open `js/firebase-config.js` in this repo and replace each `"REPLACE_ME"`
value with the matching value Firebase gave you. Nothing else in that file
needs to change. Commit and deploy as usual — until this file has real
values, the sync feature silently stays off and the app behaves exactly as
it always has.

## 3. Turn on Firestore and set its security rules

1. In the Firebase console sidebar, go to **Build → Firestore Database**,
   click **Create database**, and choose **Start in production mode**
   (either mode works once you paste the rules below — production mode is
   just a safer starting point).
2. Pick any region close to your students.
3. Once created, go to the **Rules** tab and replace the contents with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /students/{username} {
         allow read, write: if true;
       }
     }
   }
   ```

   This intentionally allows anyone who knows a username to read or write
   that student's document, with no login required — that's the whole
   point of the no-password design. It does **not** allow access to
   anything outside the `students/` collection. Click **Publish**.

## 4. Free tier limits (should be more than enough)

Firebase's free "Spark" plan (no credit card required) includes 50,000
document reads and 20,000 writes per day, and 1 GiB of storage. Each
sync push/pull is one document read or write, so this comfortably covers
a class-sized rotation with room to spare. If you ever needed to grow past
that, Firebase's next tier is pay-as-you-go, but this app's usage pattern
is very unlikely to reach it.

## What a student actually sees

In the ⚙ **Settings** panel, a new "Sync across devices" section lets them
type a username and tap **Link this device**. If that username is brand
new, this device's current progress becomes its starting point in the
cloud. If it already exists (they're linking a *second* device), the app
asks for confirmation and then replaces this device's local progress with
whatever's already synced under that name. From then on, progress pushes
to the cloud automatically in the background, and pulls down silently
whenever the app is opened.

Tell students: pick a username you'll remember, not your real name, and
never reuse a password you use anywhere else — it isn't one here.
