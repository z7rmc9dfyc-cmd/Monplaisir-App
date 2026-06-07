// --- 1. DONNÉES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026", special: "" },
    { audio: "Widney", zoom: "Victor", estrade: "Luc", perchistes: "Malick / Fredy", mardi: "02/06/2026", samedi: "06/06/2026", special: "" },
    { audio: "Semaine Spéciale", zoom: "", estrade: "", perchistes: "", mardi: "02/06/2026", samedi: "07/06/2026", special: "OUI" },
    { audio: "Thierry", zoom: "Gilbert", estrade: "Daniel", perchistes: "Iréné / Olivier", mardi: "09/06/2026", samedi: "13/06/2026", special: "" },
    { audio: "Rolland", zoom: "Ludovic", estrade: "Fredy", perchistes: "Jean Louis / Luc", mardi: "16/06/2026", samedi: "20/06/2026", special: "" },
    { audio: "Ludovic", zoom: "Malick", estrade: "Widney", perchistes: "Luc / Olivier", mardi: "23/06/2026", samedi: "27/06/2026", special: "" },
    { audio: "Assemblée Régionale", zoom: "", estrade: "", perchistes: "", mardi: "03/07/2026", samedi: "05/07/2026", special: "OUI" },
    { audio: "Widney", zoom: "Gilbert", estrade: "Luc", perchistes: "Daniel / Malick", mardi: "07/07/2026", samedi: "11/07/2026", special: "" },
    { audio: "Thierry", zoom: "Luc", estrade: "Daniel", perchistes: "Fredy / victor", mardi: "14/07/2026", samedi: "18/07/2026", special: "" },
    { audio: "Rolland", zoom: "Victor", estrade: "Widney", perchistes: "Iréné / Luc", mardi: "21/07/2026", samedi: "25/07/2026", special: "" },
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Victor / Christian", mardi: "28/07/2026", samedi: "01/08/2026", special: "" },
    { audio: "Victor", zoom: "Thierry", estrade: "Fredy", perchistes: "Jean Louis / Olivier", mardi: "04/08/2026", samedi: "08/08/2026", special: "" }
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
    { groupe: "Manetier", mardi: "02/06/26", samedi: "06/06/26", special: "" },
    { groupe: "Benony", mardi: "09/06/26", samedi: "13/06/26", special: "" },
    { groupe: "Zig", mardi: "16/06/26", samedi: "20/06/26", special: "" },
    { groupe: "Gilles", mardi: "23/06/26", samedi: "27/06/26", special: "" },
    { groupe: "Assemblée Régionale", mardi: "03/07/2026 au 05/07/2026", samedi: "-", special: "OUI" },
    { groupe: "Lognos", mardi: "07/07/26", samedi: "11/07/26", special: "" },
    { groupe: "Mambole", mardi: "14/07/26", samedi: "18/07/26", special: "" },
    { groupe: "Astasie", mardi: "21/07/26", samedi: "25/07/26", special: "" },
    { groupe: "Benony", mardi: "28/07/26", samedi: "01/08/26", special: "" },
    { groupe: "Zig", mardi: "04/08/26", samedi: "08/08/26", special: "" },
    { groupe: "Gilles", mardi: "11/08/26", samedi: "15/08/26", special: "" },
    { groupe: "Lognos", mardi: "18/08/26", samedi: "22/08/26", special: "" },
    { groupe: "Mambole", mardi: "25/08/26", samedi: "29/08/26", special: "" },
    { groupe: "Astasie", mardi: "01/09/26", samedi: "05/09/26", special: "" },
    { groupe: "Manetier", mardi: "08/09/26", samedi: "12/09/26", special: "" },
    { groupe: "Benony", mardi: "15/09/26", samedi: "19/09/26", special: "" },
    { groupe: "Gilles", mardi: "22/09/26", samedi: "26/09/26", special: "" },
    { groupe: "Zig", mardi: "29/09/26", samedi: "03/10/26", special: "" },
    { groupe: "Assemblée Circonscription (Filiale)", mardi: "Semaine Spéciale", samedi: "-", special: "OUI" },
    { groupe: "Mambole", mardi: "13/10/26", samedi: "17/10/26", special: "" },
    { groupe: "Astasie", mardi: "20/10/26", samedi: "24/10/26", special: "" },
    { groupe: "Manetier", mardi: "27/10/26", samedi: "31/10/26", special: "" },
    { groupe: "Benony", mardi: "03/11/26", samedi: "07/11/26", special: "" },
    { groupe: "Gilles", mardi: "10/11/26", samedi: "14/11/26", special: "" },
    { groupe: "Zig", mardi: "17/11/26", samedi: "21/11/26", special: "" },
    { groupe: "Lognos", mardi: "24/11/26", samedi: "28/11/26", special: "" },
    { groupe: "Mambole", mardi: "01/12/26", samedi: "05/12/26", special: "" },
    { groupe: "Benony", mardi: "08/12/26", samedi: "12/12/26", special: "" },
    { groupe: "Gilles", mardi: "15/12/26", samedi: "19/12/26", special: "" },
    { groupe: "Zig", mardi: "22/12/26", samedi: "26/12/26", special: "" },
    { groupe: "Lognos", mardi: "29/12/26", samedi: "03/01/27", special: "" }
];

// --- 4. DONNÉES VIE ET MINISTÈRE (Extraites de tes PDF) ---
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

let modeEdition = { sono: false, discours: false, nettoyage: false, vém: false };

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
};

// --- LOGIQUES DE SAUVEGARDE ET EDITION ---
window.basculerEditionVem = function() { modeEdition.vém = !modeEdition.vém; afficherVem(); };
window.sauvegarderVem = function() {
    donnéesVieEtMinistere.forEach((l, i) => {
        l.date = document.getElementById(`vd-${i}`).value;
        l.president = document.getElementById(`vp-${i}`).value;
        l.joyaux = document.getElementById(`vj-${i}`).value;
        l.perles = document.getElementById(`vpe-${i}`).value;
        l.lecture = document.getElementById(`vl-${i}`).value;
    });
    modeEdition.vém = false; alert("✅ Programme Vie et Ministère mis à jour !"); afficherVem();
};

window.basculerEditionNettoyage = function() { modeEdition.nettoyage = !modeEdition.nettoyage; afficherNettoyage(); };
window.sauvegarderNettoyage = function() {
    donnéesNettoyage.forEach((l, i) => {
        l.groupe = document.getElementById(`g-${i}`).value;
        l.mardi = document.getElementById(`m-${i}`).value;
        if (l.special !== "OUI") l.samedi = document.getElementById(`s-${i}`).value;
    });
    modeEdition.nettoyage = false; alert("✅ Programme de nettoyage mis à jour !"); afficherNettoyage();
};

window.basculerEditionSono = function() { modeEdition.sono = !modeEdition.sono; afficherSonorisation(); };
window.sauvegarderSono = function() {
    donnéesProgramme.forEach((l, i) => {
        l.audio = document.getElementById(`audio-${i}`).value;
        l.mardi = document.getElementById(`msono-${i}`).value;
        l.samedi = document.getElementById(`ssono-${i}`).value;
        if (l.special !== "OUI") {
            l.zoom = document.getElementById(`z-${i}`).value;
            l.estrade = document.getElementById(`e-${i}`).value;
            l.perchistes = document.getElementById(`p-${i}`).value;
        }
    });
    modeEdition.sono = false; alert("✅ Sonorisation mise à jour !"); afficherSonorisation();
};

window.basculerEditionDiscours = function() { modeEdition.discours = !modeEdition.discours; afficherDiscours(); };
window.sauvegarderDiscours = function() {
    donnéesDiscours.forEach((l, i) => {
        l.date = document.getElementById(`date-${i}`).value;
        l.president = document.getElementById(`pres-${i}`).value;
        l.orateur = document.getElementById(`orat-${i}`).value;
        l.theme = document.getElementById(`theme-${i}`).value;
    });
    modeEdition.discours = false; alert("✅ Discours mis à jour !"); afficherDiscours();
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
                <h3>📖 Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:10px; background:#f1c40f; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; color:#2c3e50;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3>👥 Membres & Territoires</h3><button onclick="alert('Bientôt disponible')" style="width:100%; padding:10px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- PAGE 4 : VIE ET MINISTÈRE ---
function afficherVem() {
    let lignes = "";
    donnéesVieEtMinistere.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight:bold;">${modeEdition.vém ? `<input id="vd-${i}" value="${l.date}" style="width:90%">` : l.date}</td>
            <td style="padding: 12px;">${modeEdition.vém ? `<input id="vp-${i}" value="${l.president}" style="width:90%">` : l.president}</td>
            <td style="padding: 12px;">${modeEdition.vém ? `<input id="vj-${i}" value="${l.joyaux}" style="width:90%">` : l.joyaux}</td>
            <td style="padding: 12px;">${modeEdition.vém ? `<input id="vpe-${i}" value="${l.perles}" style="width:90%">` : l.perles}</td>
            <td style="padding: 12px;">${modeEdition.vém ? `<input id="vl-${i}" value="${l.lecture}" style="width:90%">` : l.lecture}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0">📖 Réunion Vie et Ministère</h2>
            <div>
                <button onclick="${modeEdition.vém ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px;">${modeEdition.vém ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer; background:white; color:#2c3e50; border:1px solid #2c3e50; border-radius:4px; font-weight:bold; margin-left:10px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1200px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Semaine</th><th style="padding: 12px;">Président</th><th style="padding: 12px;">Joyaux (10 min)</th><th style="padding: 12px;">Perles (10 min)</th><th style="padding: 12px;">Lecture</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- DESIGNS EXISTANTS RESTANTS ---
function afficherNettoyage() {
    let lignes = "";
    donnéesNettoyage.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #e8f8f5; font-weight: bold; color: #117a65;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="g-${i}" value="${l.groupe}" style="width:90%">` : l.groupe}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="m-${i}" value="${l.mardi}" style="width:90%">` : l.mardi}</td>
            <td style="padding: 12px;">${l.special === "OUI" ? "-" : (modeEdition.nettoyage ? `<input id="s-${i}" value="${l.samedi}" style="width:90%">` : l.samedi)}</td>
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
        <div style="padding: 20px; max-width: 900px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Groupes</th><th style="padding: 12px;">Mardi</th><th style="padding: 12px;">Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

function afficherSonorisation() {
    let lignes = "";
    donnéesProgramme.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fcf3cf; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="audio-${i}" value="${l.audio}" style="width:90%">` : l.audio}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="z-${i}" value="${l.zoom}" style="width:90%">` : l.zoom)}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="e-${i}" value="${l.estrade}" style="width:90%">` : l.estrade)}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="p-${i}" value="${l.perchistes}" style="width:90%">` : l.perchistes)}</td>
            <td style="padding: 10px; font-weight: 500;">${modeEdition.sono ? `<input id="msono-${i}" value="${l.mardi}" style="width:90%">` : l.mardi}</td>
            <td style="padding: 10px; font-weight: 500;">${modeEdition.sono ? `<input id="ssono-${i}" value="${l.samedi}" style="width:90%">` : l.samedi}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #9b59b6; color: white; padding: 15px; display: flex; justify-content: space-between;">
            <h2 style="margin:0">🔊 Programme Sonorisation & Estrade 2026</h2>
            <div>
                <button onclick="${modeEdition.sono ? 'window.sauvegarderSono()' : 'window.basculerEditionSono()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold;">${modeEdition.sono ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1200px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 10px;">Audio-Vidéo</th><th style="padding: 10px;">Accueil Zoom</th><th style="padding: 10px;">Estrade</th><th style="padding: 10px;">Perchistes</th><th style="padding: 10px;">Mardi</th><th style="padding: 10px;">Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

function afficherDiscours() {
    let lignes = "";
    donnéesDiscours.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight:bold;">${modeEdition.discours ? `<input id="date-${i}" value="${l.date}" style="width:90%">` : l.date}</td>
            <td style="padding: 12px;">${modeEdition.discours ? `<input id="pres-${i}" value="${l.president}" style="width:90%">` : l.president}</td>
            <td style="padding: 12px;">${modeEdition.discours ? `<input id="orat-${i}" value="${l.orateur}" style="width:90%">` : l.orateur}</td>
            <td style="padding: 12px; color: #2c3e50;">${modeEdition.discours ? `<input id="theme-${i}" value="${l.theme}" style="width:95%">` : l.theme}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #e67e22; color: white; padding: 15px; display: flex; justify-content: space-between;">
            <h2 style="margin:0">🎤 Programme des Discours</h2>
            <div>
                <button onclick="${modeEdition.discours ? 'window.sauvegarderDiscours()' : 'window.basculerEditionDiscours()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold;">${modeEdition.discours ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1200px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Date</th><th style="padding: 12px;">Président</th><th style="padding: 12px;">Orateur</th><th style="padding: 12px;">Thème du Discours</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

afficherAccueil();
