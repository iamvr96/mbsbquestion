/* ===================================================================
   Settings for the AmanahRaya Funds Update webinar (index.html and admin.html)
   =================================================================== */

// 1) Paste your NEW Firebase web app config here
// Firebase console → Project settings (⚙) → General → Your apps → Web app (</>) → Config
export const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

// 2) Zoom details. Guests see these only after they register.
//    Keep the quote marks. Leave Meeting ID / Passcode as "" if they are already inside the link.
export const zoom = {
  link: "PASTE_ZOOM_LINK_HERE",        // e.g. "https://us06web.zoom.us/j/81234567890?pwd=abc123"
  meetingId: "",                       // e.g. "812 3456 7890"
  passcode: ""                         // e.g. "MBSB2026"
};

/* ---------------- no need to edit below ---------------- */
export const isConfigured = () => !Object.values(firebaseConfig).some(v => String(v).startsWith("PASTE"));
export const hasZoom = () => /^https?:\/\//.test(String(zoom.link));
