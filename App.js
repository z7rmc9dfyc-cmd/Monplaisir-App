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

// --- 2. DONNÉES DISCOURS PUBLICS (TON PDF COMPLET) ---
let donnéesDiscours = [
    { date: "02/04/2026", theme: "MÉMORIAL : Notre reconnaissance pour Dieu et le Christ", num: "-", orateur: "ZIG Widney", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "04/04/2026", theme: "La pensée de Dieu sur le mariage et la sexualité", num: "13", orateur: "HILAIRE Claude", assemblee: "POINTE NOIRE", pres: "BENONY Christian", lecteur: "LOGNOS Nicolas", groupe: "ZIG" },
    { date: "11/04/2026", theme: "Comment vaincre le mal par le bien", num: "117", orateur: "LOGNOS Nicolas", assemblee: "GOYAVE", pres: "MAMBOL Freddy", lecteur: "ZIG Widney", groupe: "-" },
    { date: "18/04/2026", theme: "Avez-vous trouvé une 'perle de grande valeur' ?", num: "24", orateur: "AÏELLO Salvator", assemblee: "VERNOU", pres: "ASTASIE Roland", lecteur: "DANICAN Cédric", groupe: "Benony" },
    { date: "25/04/2026", theme: "RÉUNION SPÉCIALE", num: "-", orateur: "-", assemblee: "-", pres: "-", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "02/05/2026", theme: "Vivons avec bon sens au sein d'un monde dépravé", num: "138", orateur: "POMMIER Gane", assemblee: "ST CLAUDE", pres: "ZIG Widney", lecteur: "LYCAON Luc", groupe: "MAMBOL" },
    { date: "09/05/2026", theme: "Jéhovah est une 'hauteur sûre' pour son peuple", num: "151", orateur: "MAMBOL Freddy", assemblee: "GOYAVE", pres: "TORVAL Malick", lecteur: "MANNETIER Ludovic", groupe: "MAMBOL" },
    { date: "16/05/2026", theme: "Quel est votre but dans la vie ?", num: "60", orateur: "FERDY Sitcharn", assemblee: "POINTE NOIRE", pres: "GILLES Thierry", lecteur: "MELGAR Olivier", groupe: "GILLES" },
    { date: "23/05/2026", theme: "Où trouver de l'aide dans les temps de détresse ?", num: "177", orateur: "LANDAIS ELIE", assemblee: "CAPESTERRE SUD", pres: "MANNETIER Ludovic", lecteur: "JOURSON Victor", groupe: "LOGNOS" },
    { date: "30/05/2026", theme: "Marchez-vous avec Dieu ?", num: "149", orateur: "ADHEL Gilbert", assemblee: "GOYAVE", pres: "SIBA André", lecteur: "BENONY Christian", groupe: "-" },
    { date: "06/06/2026", theme: "SEMAINE SPÉCIALE - Comment récolter la vie éternelle ?", num: "-", orateur: "GALTIER Ludovic", assemblee: "-", pres: "CASI Daniel", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "13/06/2026", theme: "Pourquoi craindre le vrai Dieu ?", num: "163", orateur: "BENONY Christian", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "ADHEL Gilbert", groupe: "-" },
    { date: "20/06/2026", theme: "La mort est-elle la fin de tout ?", num: "184", orateur: "ASTASIE Roland", assemblee: "GOYAVE", pres: "TORVAL Malick", lecteur: "GILLES Thierry", groupe: "-" },
    { date: "27/06/2026", theme: "Utilisons l'instruction pour louer Jéhovah", num: "146", orateur: "BUJADINOVIC Erick", assemblee: "POINTE NOIRE", pres: "LOGNOS Nicolas", lecteur: "CASI Daniel", groupe: "MANNETIER" }
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
    { groupe: "Gilles", mardi: "23/06/26", samedi: "27/06/26", special: "" }
];

// --- 4. DONNÉES VIE ET MINISTÈRE ---
let semainesVem = [
    {
        titre: "07/07/2026 | JÉRÉMIE 13-15",
        intro: { cantique: "123", priere: "Ludovic MANNETIER", president: "Ludovic MANNETIER" },
        joyaux: [
            { temps: "18:36", titre: "1. Jéhovah mérite notre obéissance", attribution: "Widney ZIG" },
            { temps: "18:46", titre: "2. Perles spirituelles", attribution: "Christian BENONY" },
            { temps: "18:56", titre: "3. Lecture de la Bible", attribution: "Iréné ULCE" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation", attribution: "Rosita DEMANT & Elodie ZIG" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt", attribution: "Marie Denise TORVAL & Lydia MAMBOLE" },
            { temps: "19:10", titre: "6. Discours", attribution: "Victor JOURSON" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Obéir vaut mieux qu'offrir un sacrifice", attribution: "Freddy MAMBOLE" },
            { temps: "19:36", titre: "8. Étude biblique", attribution: "Ludovic MANNETIER / Malick" },
            { temps: "20:10", titre: "Cantique 61 & Prière finale", attribution: "Pierre PARMASSIVIN" }
        ]
    }
];

let modeEdition = { sono: false, discours: false, nettoyage: false, vem: false };

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
};

// --- LOGIQUES DE SAUVEGARDE ---
window.basculerEditionDiscours = function() { modeEdition.discours = !modeEdition.discours; afficherDiscours(); };
window.sauvegarderDiscours = function() {
    donnéesDiscours.forEach((l, i) => {
        l.date = document.getElementById("d-" + i).value;
        l.theme = document.getElementById("t-" + i).value;
        l.orateur = document.getElementById("o-" + i).value;
        l.pres = document.getElementById("p-" + i).value;
        l.lecteur = document.getElementById("l-" + i).value;
    });
    modeEdition.discours = false; alert("✅ Discours mis à jour !"); afficherDiscours();
};

window.basculerEditionNettoyage = function() { modeEdition.nettoyage = !modeEdition.nettoyage; afficherNettoyage(); };
window.sauvegarderNettoyage = function() {
    donnéesNettoyage.forEach((l, i) => {
        l.groupe = document.getElementById("gn-" + i).value;
        l.mardi = document.getElementById("mn-" + i).value;
        l.samedi = document.getElementById("sn-" + i).value;
    });
    modeEdition.nettoyage = false; alert("✅ Nettoyage mis à jour !"); afficherNettoyage();
};

window.basculerEditionSono = function() { modeEdition.sono = !modeEdition.sono; afficherSonorisation(); };
window.sauvegarderSono = function() {
    donnéesProgramme.forEach((l, i) => {
        l.audio = document.getElementById("as-" + i).value;
        l.mardi = document.getElementById("ms-" + i).value;
        l.samedi = document.getElementById("ss-" + i).value;
    });
    modeEdition.sono = false; alert("✅ Sonorisation mise à jour !"); afficherSonorisation();
};

// --- ACCUEIL ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center;"><h1>🚀 Monplaisir App</h1></nav>
        <div style="max-width: 1100px; margin: 40px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🔊 Sonorisation</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:10px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:10px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🧼 Nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:10px; background:#f1c40f; color:#2c3e50; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- RENDU DISCOURS (MODIFIÉ COMME V&M) ---
function afficherDiscours() {
    let lignes = "";
    donnéesDiscours.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fff3e0; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="d-${i}" value="${l.date}" style="width:85px">` : l.date}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="t-${i}" value="${l.theme}" style="width:100%">` : `<strong>${l.theme}</strong> <small>(n°${l.num})</small>`}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="o-${i}" value="${l.orateur}" style="width:100%">` : `${l.orateur} <br><small>${l.assemblee}</small>`}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="p-${i}" value="${l.pres}" style="width:100%">` : l.pres}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="l-${i}" value="${l.lecteur}" style="width:100%">` : l.lecteur}</td>
            <td style="padding: 10px; font-size:12px;">${l.groupe}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #e67e22; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0">🎤 Programme des Discours Publics 2026</h2>
            <div>
                <button onclick="${modeEdition.discours ? 'window.sauvegarderDiscours()' : 'window.basculerEditionDiscours()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold; background:white; color:#e67e22; border:none; border-radius:4px;">${modeEdition.discours ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer; background:rgba(255,255,255,0.2); color:white; border:1px solid white; border-radius:4px; margin-left:10px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1300px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-size:14px;">
                <tr style="background: #2c3e50; color: white; text-align: left;">
                    <th style="padding: 12px;">Date</th><th>Thème</th><th>Orateur</th><th>Président</th><th>Lecteur</th><th>Reçoit</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- RENDU SONORISATION ---
function afficherSonorisation() {
    let lignes = "";
    donnéesProgramme.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fcf3cf; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="as-${i}" value="${l.audio}" style="width:90%">` : l.audio}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="zs-${i}" value="${l.zoom}" style="width:90%">` : l.zoom)}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="es-${i}" value="${l.estrade}" style="width:90%">` : l.estrade)}</td>
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="ms-${i}" value="${l.mardi}" style="width:90%">` : l.mardi}</td>
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="ss-${i}" value="${l.samedi}" style="width:90%">` : l.samedi}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #9b59b6; color: white; padding: 15px; display: flex; justify-content: space-between; align-items:center;">
            <h2 style="margin:0">🔊 Sonorisation & Estrade</h2>
            <div>
                <button onclick="${modeEdition.sono ? 'window.sauvegarderSono()' : 'window.basculerEditionSono()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold;">${modeEdition.sono ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 1100px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align:left;">
                    <th style="padding: 10px;">Audio</th><th>Zoom</th><th>Estrade</th><th>Mardi</th><th>Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- RENDU NETTOYAGE ---
function afficherNettoyage() {
    let lignes = "";
    donnéesNettoyage.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="gn-${i}" value="${l.groupe}" style="width:90%">` : l.groupe}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="mn-${i}" value="${l.mardi}" style="width:90%">` : l.mardi}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="sn-${i}" value="${l.samedi}" style="width:90%">` : l.samedi}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh;">
        <nav style="background: #2ecc71; color: white; padding: 15px; display: flex; justify-content: space-between; align-items:center;">
            <h2 style="margin:0">🧼 Nettoyage Salle</h2>
            <div>
                <button onclick="${modeEdition.nettoyage ? 'window.sauvegarderNettoyage()' : 'window.basculerEditionNettoyage()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold;">${modeEdition.nettoyage ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 20px; max-width: 800px; margin: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr style="background: #2c3e50; color: white; text-align:left;">
                    <th style="padding: 12px;">Groupes</th><th>Mardi</th><th>Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- RENDU V&M (DÉTAILLÉ) ---
function afficherVem() {
    let sem = semainesVem[0];
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:30px;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0">📖 Vie et Ministère</h2>
            <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer;">Accueil</button>
        </nav>
        <div style="max-width: 800px; margin: 30px auto; background:white; padding:30px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="text-align:center; border-bottom:3px solid #f1c40f; padding-bottom:10px;">${sem.titre}</h2>
            <p><strong>Président :</strong> ${sem.intro.president} | <strong>Cantique :</strong> ${sem.intro.cantique}</p>
            <h3 style="color:#2980b9;">💎 JOYAUX</h3>
            ${sem.joyaux.map(j => `<p><small>${j.temps}</small> ${j.titre} - <strong>${j.attribution}</strong></p>`).join("")}
            <h3 style="color:#c0392b;">🏃 MINISTÈRE</h3>
            ${sem.ministere.map(m => `<p><small>${m.temps}</small> ${m.titre} - <strong>${m.attribution}</strong></p>`).join("")}
            <h3 style="color:#27ae60;">🧼 VIE CHRÉTIENNE</h3>
            ${sem.vie.map(v => `<p><small>${v.temps}</small> ${v.titre} - <strong>${v.attribution}</strong></p>`).join("")}
        </div>
    </div>`;
}

afficherAccueil();
