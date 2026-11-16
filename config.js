/* ===================================================================
   Settings for the AmanahRaya Funds Update – customer questions (index.html and admin.html)
   =================================================================== */

// Paste your NEW Firebase web app config here
// Firebase console → Project settings (⚙) → General → Your apps → Web app (</>) → Config
export const firebaseConfig = {
  apiKey: "AIzaSyC3FVwPMyKtyJYhxeVtM8HZaKzixd97WhQ",
  authDomain: "mbsbfundupdate.firebaseapp.com",
  projectId: "mbsbfundupdate",
  storageBucket: "mbsbfundupdate.firebasestorage.app",
  messagingSenderId: "461411226804",
  appId: "1:461411226804:web:7d0acf33313a13e32473e1"
};

/* ---------------- no need to edit below ---------------- */
export const isConfigured = () => !Object.values(firebaseConfig).some(v => String(v).startsWith("PASTE"));
