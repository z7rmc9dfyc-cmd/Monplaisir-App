// --- 1. DONNÉES SONORISATION COMPLETES ---
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

// --- 2. DONNÉES DISCOURS COMPLETES ---
let donnéesDiscours = [
    { date: "07/06/2026", president: "Thierry", orateur: "Gilbert", theme: "La paix véritable, d'où vient-elle ?" },
    { date: "14/06/2026", president: "Fredy", orateur: "Rolland", theme: "Comment faire face aux inquiétudes de la vie" },
    { date: "21/06/2026", president: "Victor", orateur: "Malick", theme: "Le Royaume de Dieu est proche" },
    { date: "28/06/2026", president: "Ludovic", orateur: "Widney", theme: "Pourquoi suivre les principes de la Bible ?" }
];

// --- 3. DONNÉES NETTOYAGE COMPLET JUSQU'À DÉCEMBRE ---
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
    { groupe: "Assemblée Circonscription", mardi: "Semaine Spéciale", samedi: "-", special: "OUI" },
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

// --- 4. DONNÉES DU CAHIER VIE ET MINISTÈRE (DÉTAILLÉES) ---
let semainesVem = [
    {
        titre: "07/07/2026 | JÉRÉMIE 13-15",
        intro: { cantique: "123", priere: "Ludovic MANNETIER", president: "Ludovic MANNETIER" },
        joyaux: [
            { temps: "18:36", titre: "1. Jéhovah mérite notre obéissance (10 min.)", attribution: "Widney ZIG" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 13-15 (10 min.)", attribution: "Christian BENONY" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Iréné ULCE" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Rosita DEMANT & Elodie ZIG" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Marie Denise TORVAL & Lydia MAMBOLE" },
            { temps: "19:10", titre: "6. Discours (5 min.)", attribution: "Victor JOURSON" }
        ],
        vie: [
            { temps: "19:21", titre: "7. « Obéir vaut mieux qu'offrir un sacrifice » (15 min.)", attribution: "Ludovic MANNETIER" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Luc" },
            { temps: "20:10", titre: "Cantique 153 & Prière finale", attribution: "Franck JALET" }
        ]
    },
    {
        titre: "14/07/2026 | JÉRÉMIE 16-17",
        intro: { cantique: "91", priere: "Nicolas LOGNOS", president: "Nicolas LOGNOS" },
        joyaux: [
            { temps: "18:36", titre: "1. Confie-toi en Jéhovah (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 16-17 (10 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Jean-Louis" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Sonia JALET & Marie-Line MELGARD" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Jean-Louis & Olivier" },
            { temps: "19:10", titre: "6. Explique tes croyances (4 min.)", attribution: "Nicolas LOGNOS" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Besoins de l'assemblée (15 min.)", attribution: "Nicolas LOGNOS" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Daniel CASI / Lecteur: Meddy DELUMEAUX" },
            { temps: "20:10", titre: "Cantique 118 & Prière finale", attribution: "Gilbert ADHEL" }
        ]
    },
    {
        titre: "21/07/2026 | JÉRÉMIE 18-19",
        intro: { cantique: "11", priere: "Rolland ASTASIE", president: "Rolland ASTASIE" },
        joyaux: [
            { temps: "18:36", titre: "1. Le Grand Potier a le contrôle (10 min.)", attribution: "Rolland ASTASIE" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 18-19 (10 min.)", attribution: "Victor JOURSON" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Luc" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Marie-Claire MELGARD & Tania ANGOSTON" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Aubertine VERIN & Tania ANGOSTON" },
            { temps: "19:11", titre: "6. Explique tes croyances (4 min.)", attribution: "Reynold BELTAI" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Les étapes de la guérison spirituelle (15 min.)", attribution: "Widney ZIG" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Ludovic" },
            { temps: "20:10", titre: "Cantique 153 & Prière finale", attribution: "Franck JALET" }
        ]
    },
    {
        titre: "04/08/2026 | JÉRÉMIE 22-23",
        intro: { cantique: "40", priere: "Freddy MAMBOLE", president: "Freddy MAMBOLE" },
        joyaux: [
            { temps: "18:36", titre: "1. L'importance de bons bergers (10 min.)", attribution: "Roland ASTASIE" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 22-23 (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Daniel CASI" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Sylvianne DANICAN & Claudine BABOULAL" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Dovica JULAN & Karine ROBERT" },
            { temps: "19:11", titre: "6. Discours (4 min.)", attribution: "Olivier MELGARD" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Zoom sur notre histoire (15 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Christian BENONY / Lecteur: Victor JOURSON" },
            { temps: "20:10", titre: "Cantique 156 & Prière finale", attribution: "Daniel CASI" }
        ]
    }
];

let indexSemaineActive = 0;
let modeEdition = { sono: false, discours: false, nettoyage: false, vem: false };

// --- CONFIGURATION DE LA NAVIGATION ---
window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
};

window.changerSemaine = function(index) {
    indexSemaineActive = index;
    afficherVem();
};

// --- LOGIQUES DE SAUVEGARDE DIRECTE ---
window.basculerEditionVem = function() { modeEdition.vem = !modeEdition.vem; afficherVem(); };
window.sauvegarderVem = function() {
    let sem = semainesVem[indexSemaineActive];
    sem.intro.president = document.getElementById("edit-pres").value;
    sem.intro.priere = document.getElementById("edit-priere").value;
    sem.joyaux.forEach((j, i) => { j.attribution = document.getElementById("j-" + i).value; });
    sem.ministere.forEach((m, i) => { m.attribution = document.getElementById("m-" + i).value; });
    sem.vie.forEach((v, i) => { v.attribution = document.getElementById("v-" + i).value; });
    modeEdition.vem = false; alert("✅ Programme Vie et Ministère mis à jour !"); afficherVem();
};

window.basculerEditionNettoyage = function() { modeEdition.nettoyage = !modeEdition.nettoyage; afficherNettoyage(); };
window.sauvegarderNettoyage = function() {
    donnéesNettoyage.forEach((l, i) => {
        l.groupe = document.getElementById("g-" + i).value;
        l.mardi = document.getElementById("m-" + i).value;
        if (l.special !== "OUI") l.samedi = document.getElementById("s-" + i).value;
    });
    modeEdition.nettoyage = false; alert("✅ Nettoyage mis à jour !"); afficherNettoyage();
};

window.basculerEditionSono = function() { modeEdition.sono = !modeEdition.sono; afficherSonorisation(); };
window.sauvegarderSono = function() {
    donnéesProgramme.forEach((l, i) => {
        l.audio = document.getElementById("audio-" + i).value;
        l.zoom = document.getElementById("z-" + i).value;
        l.estrade = document.getElementById("e-" + i).value;
        l.mardi = document.getElementById("msono-" + i).value;
        l.samedi = document.getElementById("ssono-" + i).value;
    });
    modeEdition.sono = false; alert("✅ Sonorisation mise à jour !"); afficherSonorisation();
};

window.basculerEditionDiscours = function() { modeEdition.discours = !modeEdition.discours; afficherDiscours(); };
window.sauvegarderDiscours = function() {
    donnéesDiscours.forEach((l, i) => {
        l.date = document.getElementById("date-" + i).value;
        l.president = document.getElementById("pres-" + i).value;
        l.orateur = document.getElementById("orat-" + i).value;
        l.theme = document.getElementById("theme-" + i).value;
    });
    modeEdition.discours = false; alert("✅ Discours mis à jour !"); afficherDiscours();
};

// --- DESIGN : ACCUEIL ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center;"><h1>🚀 Monplaisir App</h1></nav>
        <div style="max-width: 1100px; margin: 40px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🔊 Sonorisation & Estrade</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:10px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:10px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🧼 Programme de nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:10px; background:#f1c40f; color:#2c3e50; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- DESIGN : CAHIER VIE ET MINISTÈRE (PAR SEMAINE TEXTUEL) ---
function afficherVem() {
    let sem = semainesVem[indexSemaineActive];
    let boutonsSemaines = "";
    semainesVem.forEach((s, idx) => {
        let actif = idx === indexSemaineActive ? "background:#2c3e50; color:white;" : "background:white; color:#2c3e50;";
        boutonsSemaines += `<button onclick="window.changerSemaine(${idx})" style="padding:10px 14px; margin-right:8px; margin-bottom:8px; border:1px solid #2c3e50; border-radius:4px; cursor:pointer; font-weight:bold; ${actif}">${s.titre.split(" | ")[0]}</button>`;
    });

    let genererLignes = (tableau, prefixe) => {
        return tableau.map((p, i) => `
            <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #eee; align-items:center;">
                <div style="width:12%; color:#7f8c8d; font-weight:bold;">${p.temps}</div>
                <div style="width:53%; font-weight:500; color:#34495e;">${p.titre}</div>
                <div style="width:35%; text-align:right; font-weight:bold; color:#2c3e50;">
                    ${modeEdition.vem ? `<input id="${prefixe}-${i}" value="${p.attribution}" style="width:90%; padding:5px; font-weight:bold;">` : p.attribution}
                </div>
            </div>
        `).join("");
    };

    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0">📖 Programme Réunion Vie et Ministère</h2>
            <div>
                <button onclick="${modeEdition.vem ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px;">
                    ${modeEdition.vem ? '💾 Sauver' : '✏️ Modifier'}
                </button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer; background:white; color:#2c3e50; border:1px solid #2c3e50; border-radius:4px; font-weight:bold; margin-left:10px;">Accueil</button>
            </div>
        </nav>

        <div style="max-width: 900px; margin: 30px auto; padding: 0 20px;">
            <div style="margin-bottom:20px; display:flex; flex-wrap:wrap;">${boutonsSemaines}</div>
            
            <div style="background:white; padding:30px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="color:#2c3e50; margin-top:0; border-bottom:3px solid #f1c40f; padding-bottom:10px; text-align:center;">${sem.titre}</h2>
                
                <div style="background:#f8f9fa; padding:15px; border-radius:6px; margin-bottom:25px; display:flex; justify-content:space-around; flex-wrap:wrap; gap:10px; font-size:14px;">
                    <div><strong>Cantique :</strong> ${sem.intro.cantique}</div>
                    <div><strong>Président :</strong> ${modeEdition.vem ? `<input id="edit-pres" value="${sem.intro.president}" style="padding:2px;">` : sem.intro.president}</div>
                    <div><strong>Prière :</strong> ${modeEdition.vem ? `<input id="edit-priere" value="${sem.intro.priere}" style="padding:2px;">` : sem.intro.priere}</div>
                </div>

                <h4 style="color:#2980b9; border-bottom:2px solid #2980b9; padding-bottom:5px; margin-bottom:10px;">💎 JOYAUX DE LA PAROLE DE DIEU</h4>
                ${genererLignes(sem.joyaux, "j")}

                <h4 style="color:#c0392b; border-bottom:2px solid #c0392b; padding-bottom:5px; margin-top:30px; margin-bottom:10px;">🏃 APPLIQUE-TOI AU MINISTÈRE</h4>
                ${genererLignes(sem.ministere, "m")}

                <h4 style="color:#27ae60; border-bottom:2px solid #27ae60; padding-bottom:5px; margin-top:30px; margin-bottom:10px;">🧼 VIE CHRÉTIENNE</h4>
                ${genererLignes(sem.vie, "v")}
            </div>
        </div>
    </div>`;
}

// --- DESIGN : SONORISATION RESTAURÉ ---
function afficherSonorisation() {
    let lignes = "";
    donnéesProgramme.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fcf3cf; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="audio-${i}" value="${l.audio}" style="width:90%">` : l.audio}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="z-${i}" value="${l.zoom}" style="width:90%">` : l.zoom)}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="e-${i}" value="${l.estrade}" style="width:90%">` : l.estrade)}</td>
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
                    <th style="padding: 10px;">Audio-Vidéo</th><th style="padding: 10px;">Accueil Zoom</th><th style="padding: 10px;">Estrade</th><th style="padding: 10px;">Mardi</th><th style="padding: 10px;">Samedi</th>
                </tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- DESIGN : NETTOYAGE RESTAURÉ ---
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

// --- DESIGN : DISCOURS RESTAURÉ ---
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
