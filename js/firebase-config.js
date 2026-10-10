/* firebase-config.js — paste your own Firebase project's web config here.
 *
 * This file is intentionally separate from sync.js so it can be edited
 * without touching any logic. Nothing in this file is a secret: a
 * Firebase web apiKey is safe to publish (it just identifies which
 * project to talk to) -- what actually protects the data is the
 * Firestore security rules you set in the Firebase console. See
 * docs/SYNC-SETUP.md for the exact steps, including the rules to paste.
 *
 * Until every REPLACE_ME below is filled in, cross-device sync silently
 * stays off and the app works exactly as it always has (fully local,
 * per-browser progress).
 */
window.JEFFENT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDB6xUAe1LZq8NkTMHhTi13m614tKRhfGo",
  authDomain: "ent-companion-sync.firebaseapp.com",
  projectId: "ent-companion-sync",
  storageBucket: "ent-companion-sync.firebasestorage.app",
  messagingSenderId: "226439117728",
  appId: "1:226439117728:web:af7d166bd7275cd84282c5"
};
