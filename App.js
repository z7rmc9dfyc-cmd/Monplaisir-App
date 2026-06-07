// --- 1. DONNÉES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026" },
    { audio: "Widney", zoom: "Victor", estrade: "Luc", perchistes: "Malick / Fredy", mardi: "02/06/2026", samedi: "06/06/2026" },
    { audio: "Thierry", zoom: "Gilbert", estrade: "Daniel", perchistes: "Iréné / Olivier", mardi: "09/06/2026", samedi: "13/06/2026" }
];

// --- 2. DONNÉES DISCOURS ---
let donnéesDiscours = [
    { date: "07/06/2026", president: "Thierry", orateur: "Gilbert", theme: "La paix véritable, d'où vient-elle ?" },
    { date: "14/06/2026", president: "Fredy", orateur: "Rolland", theme: "Faire face aux inquiétudes" }
];

// --- 3. DONNÉES NETTOYAGE (Le nouveau pôle !) ---
let donnéesNettoyage = [
    { groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26" },
    { groupe: "Gilles", mardi: "28/04/26", samedi: "02/05/26" },
    { groupe: "Zig", mardi: "05/05/26", samedi: "09/05/26" },
    { groupe: "Lognos", mardi: "12/05/26", samedi: "16/05/26" },
    { groupe: "Mambole", mardi: "19/05/26", samedi: "23/05/26" },
    { groupe: "Astasie", mardi: "26/05/26", samedi: "30/05/26" },
    { groupe: "Manetier", mardi: "02/06/26", samedi: "06/06/26" }
];

let modeEdition = { sono: false, discours: false, nettoyage: false };

// --- NAVIGATION ---
window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
};

// --- LOGIQUE EDITION NETTOYAGE ---
window.basculerEditionNettoyage = function() { modeEdition.nettoyage = !modeEdition.nettoyage; afficherNettoyage(); };
window.sauvegarderNettoyage = function() {
    donnéesNettoyage.forEach((l, i) => {
        l.groupe = document.getElementById(`g-${i}`).value;
        l.mardi = document.getElementById(`m-${i}`).value;
        l.samedi = document.getElementById(`s-${i}`).value;
    });
    modeEdition.nettoyage = false; alert("✅ Nettoyage mis à jour !"); afficherNettoyage();
};

// --- AFFICHAGE ACCUEIL ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center;"><h1>🚀 Monplaisir App</h1></nav>
        <div style="max-width: 1100px; margin: 40px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🔊 Sonorisation</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:10px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:10px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>🧼 Nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>👥 Membres</h3><button onclick="alert('Bientôt')" style="width:100%; padding:10px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- AFFICHAGE NETTOYAGE ---
function afficherNettoyage() {
    let lignes = "";
    donnéesNettoyage.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="g-${i}" value="${l.groupe}" style="width:90%">` : l.groupe}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="m-${i}" value="${l.mardi}" style="width:90%">` : l.mardi}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="s-${i}" value="${l.samedi}" style="width:90%">` : l.samedi}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #2ecc71; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0">🧼 Programme de Nettoyage</h2>
            <div>
                <button onclick="${modeEdition.nettoyage ? 'window.sauvegarderNettoyage()' : 'window.basculerEditionNettoyage()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold;">${modeEdition.nettoyage ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 800px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Groupes</th><th style="padding: 12px;">Mardi</th><th style="padding: 12px;">Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// Fonctions Sono et Discours (versions simplifiées pour l'exemple)
function afficherSonorisation() { document.body.innerHTML = '<nav style="background:#9b59b6;color:white;padding:20px;"><h2>🔊 Sonorisation</h2><button onclick="window.changerPage(\'accueil\')">Retour</button></nav><p style="padding:20px;">Programme sono actif.</p>'; }
function afficherDiscours() { document.body.innerHTML = '<nav style="background:#e67e22;color:white;padding:20px;"><h2>🎤 Discours</h2><button onclick="window.changerPage(\'accueil\')">Retour</button></nav><p style="padding:20px;">Programme discours actif.</p>'; }

afficherAccueil();
