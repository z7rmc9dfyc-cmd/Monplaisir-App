// --- 1. DONNÉES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026", special: "" },
    { audio: "Widney", zoom: "Victor", estrade: "Luc", perchistes: "Malick / Fredy", mardi: "02/06/2026", samedi: "06/06/2026", special: "" },
    { audio: "Semaine Spéciale", zoom: "", estrade: "", perchistes: "", mardi: "02/06/2026", samedi: "07/06/2026", special: "OUI" },
    { audio: "Thierry", zoom: "Gilbert", estrade: "Daniel", perchistes: "Iréné / Olivier", mardi: "09/06/2026", samedi: "13/06/2026", special: "" },
    { audio: "Rolland", zoom: "Ludovic", estrade: "Fredy", perchistes: "Jean Louis / Luc", mardi: "16/06/2026", samedi: "20/06/2026", special: "" }
];

// --- 2. DONNÉES DISCOURS ---
let donnéesDiscours = [
    { date: "07/06/2026", president: "Thierry", orateur: "Gilbert", theme: "La paix véritable, d'où vient-elle ?" },
    { date: "14/06/2026", president: "Fredy", orateur: "Rolland", theme: "Comment faire face aux inquiétudes de la vie" },
    { date: "21/06/2026", president: "Victor", orateur: "Malick", theme: "Le Royaume de Dieu est proche" },
    { date: "28/06/2026", president: "Ludovic", orateur: "Widney", theme: "Pourquoi suivre les principes de la Bible ?" }
];

// --- 3. DONNÉES NETTOYAGE ---
let donnéesNettoyage = [
    { groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26", special: "" },
    { groupe: "Gilles", mardi: "28/04/26", samedi: "02/05/26", special: "" },
    { groupe: "Zig", mardi: "05/05/26", samedi: "09/05/26", special: "" },
    { groupe: "Lognos", mardi: "12/05/26", samedi: "16/05/26", special: "" },
    { groupe: "Mambole", mardi: "19/05/26", samedi: "23/05/26", special: "" },
    { groupe: "Astasie", mardi: "26/05/26", samedi: "30/05/26", special: "" },
    { groupe: "Manetier", mardi: "02/06/26", samedi: "06/06/26", special: "" }
];

// --- 4. DONNÉES CAHIER VIE ET MINISTÈRE (TON TABLEAU COMPLET) ---
let donnéesVieEtMinistere = [
    { date: "07/07/2026", president: "Ludovic MANNETIER", joyaux: "Widney ZIG", perles: "Christian BENONY", lecture: "Iréné ULCE" },
    { date: "14/07/2026", president: "Thierry GILLES", joyaux: "Thierry GILLES", perles: "Fredy MAMBOLE", lecture: "Jean-Louis" },
    { date: "21/07/2026", president: "Rolland ASTASIE", joyaux: "Rolland ASTASIE", perles: "Victor JOURSON", lecture: "Luc" },
    { date: "28/07/2026", president: "Widney ZIG", joyaux: "Widney ZIG", perles: "Reynold BELTAI", lecture: "Malick" },
    { date: "04/08/2026", president: "Freddy MAMBOLE", joyaux: "Roland ASTASIE", perles: "Thierry GILLES", lecture: "Daniel CASI" },
    { date: "11/08/2026", president: "Victor JOURSON", joyaux: "Victor JOURSON", perles: "Nicolas LOGNOS", lecture: "José" },
    { date: "18/08/2026", president: "Gilbert", joyaux: "Gilbert", perles: "Christian BENONY", lecture: "Olivier" },
    { date: "25/08/2026", president: "Daniel CASI", joyaux: "Daniel CASI", perles: "Malick", lecture: "Iréné ULCE" },
    { date: "01/09/2026", president: "Thierry GILLES", joyaux: "Ludovic MANNETIER", perles: "Roland ASTASIE", lecture: "Iréné ULCE" }
];

let modeEdition = { sono: false, discours: false, nettoyage: false, vem: false };

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
};

// --- EMETTEURS LOGIQUES DE SAUVEGARDE ---
window.basculerEditionVem = function() { modeEdition.vem = !modeEdition.vem; afficherVem(); };
window.sauvegarderVem = function() {
    donnéesVieEtMinistere.forEach((l, i) => {
        l.date = document.getElementById(`vd-${i}`).value;
        l.president = document.getElementById(`vp-${i}`).value;
        l.joyaux = document.getElementById(`vj-${i}`).value;
        l.perles = document.getElementById(`vpe-${i}`).value;
        l.lecture = document.getElementById(`vl-${i}`).value;
    });
    modeEdition.vem = false; alert("✅ Programme Vie et Ministère mis à jour !"); afficherVem();
};

// --- TABLEAU DE BORD (ACCUEIL) ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: 'Segoe UI', sans-serif; background: #f4f6f9; min-height: 100vh; margin:0;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center;"><h1>🚀 Monplaisir App</h1></nav>
        <div style="max-width: 1200px; margin: 40px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🔊 Sonorisation & Estrade</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:10px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:10px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🧼 Programme de nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:10px; background:#f1c40f; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; color:#2c3e50;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- AFFICHAGE DU TABLEAU VIE ET MINISTÈRE ---
function afficherVem() {
    let lignes = "";
    donnéesVieEtMinistere.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight:bold; color:#2c3e50;">${modeEdition.vem ? `<input id="vd-${i}" value="${l.date}" style="width:90%">` : l.date}</td>
            <td style="padding: 12px;">${modeEdition.vem ? `<input id="vp-${i}" value="${l.president}" style="width:90%">` : l.president}</td>
            <td style="padding: 12px;">${modeEdition.vem ? `<input id="vj-${i}" value="${l.joyaux}" style="width:90%">` : l.joyaux}</td>
            <td style="padding: 12px;">${modeEdition.vem ? `<input id="vpe-${i}" value="${l.perles}" style="width:90%">` : l.perles}</td>
            <td style="padding: 12px;">${modeEdition.vem ? `<input id="vl-${i}" value="${l.lecture}" style="width:90%">` : l.lecture}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="margin:0">📖 Cahier Vie et Ministère</h2>
            <div>
                <button onclick="${modeEdition.vem ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px;">
                    ${modeEdition.vem ? '💾 Sauver' : '✏️ Modifier'}
                </button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer; background:white; color:#2c3e50; border:1px solid #2c3e50; border-radius:4px; font-weight:bold; margin-left:10px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1250px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Semaine</th><th style="padding: 12px;">Président</th><th style="padding: 12px;">Joyaux (10 min)</th><th style="padding: 12px;">Perles (10 min)</th><th style="padding: 12px;">Lecture</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// Emplacements secondaires pour la compatibilité des autres pages
function afficherSonorisation() { document.body.innerHTML = '<nav style="background:#9b59b6;color:white;padding:20px;"><h2>🔊 Sonorisation</h2><button onclick="window.changerPage(\'accueil\')">Retour</button></nav><p style="padding:20px;">Programme sono actif.</p>'; }
function afficherDiscours() { document.body.innerHTML = '<nav style="background:#e67e22;color:white;padding:20px;"><h2>🎤 Discours</h2><button onclick="window.changerPage(\'accueil\')">Retour</button></nav><p style="padding:20px;">Programme discours actif.</p>'; }
function afficherNettoyage() { document.body.innerHTML = '<nav style="background:#2ecc71;color:white;padding:20px;"><h2>🧼 Nettoyage</h2><button onclick="window.changerPage(\'accueil\')">Retour</button></nav><p style="padding:20px;">Programme nettoyage actif.</p>'; }

afficherAccueil();
