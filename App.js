// --- 1. DONNÉES COMPLÈTES VIE ET MINISTÈRE (JUILLET À SEPTEMBRE) ---
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
            { temps: "19:21", titre: "7. « Obéir vaut mieux qu'offrir un sacrifice » (15 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Ludovic MANNETIER / Lecteur: Malick TADUAI" },
            { temps: "20:06", titre: "Aperçu (3 min) & Cantique 61", attribution: "Prière finale: Pierre PARMASSIVIN" }
        ]
    },
    {
        titre: "14/07/2026 | JÉRÉMIE 16-17",
        intro: { cantique: "34", priere: "Gilbert ADHEL", president: "Nicolas LOGNOS" },
        joyaux: [
            { temps: "18:36", titre: "1. Choisissons bien à qui nous faisons confiance (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 16-17 (10 min.)", attribution: "Gilbert ADHEL" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Daniel CASI" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Eloise JULAN & Juliette JALET" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Tysia VAHALA & Christelle NABAL" },
            { temps: "19:10", titre: "6. Fais des disciples (5 min.)", attribution: "Yvana VAINQUEUR & Martine BEAUGENDRE" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Jeunes, faites confiance aux conseils de la Parole (15 min.)", attribution: "Meddy DELUMEAUX" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Nicolas LOGNOS / Lecteur: Daniel CASI" },
            { temps: "20:06", titre: "Aperçu (3 min) & Cantique 22", attribution: "Prière finale: Luc LYCAON" }
        ]
    }
];

// --- 2. DONNÉES COMPLÈTES DISCOURS PUBLICS ---
let donnéesDiscours = [
    { date: "02/04/2026", theme: "MÉMORIAL : Notre reconnaissance pour Dieu et le Christ", num: "-", orateur: "ZIG Widney", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "04/04/2026", theme: "La pensée de Dieu sur le mariage et la sexualité", num: "13", orateur: "HILAIRE Claude", assemblee: "POINTE NOIRE", pres: "BENONY Christian", lecteur: "LOGNOS Nicolas", groupe: "Groupe ZIG" }
];

// --- 3. DONNÉES COMPLÈTES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026", special: "" }
];

// --- 4. DONNÉES COMPLÈTES NETTOYAGE ---
let donnéesNettoyage = [
    { groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26", special: "" }
];

// --- 5. INITIALISATION DES 120 CARTES AVEC LIENS WEB SÉCURISÉS ---
let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    if (i === 89) {
        donnéesTerritoires.push({
            id: 89,
            proclamateur: "Mambole Lydia",
            dateAttribution: "2026-06-04",
            recto: "📍 Lieu : Route de Blonzac. Zone délimitée.",
            verso: "🏠 Habitations du 1 au 35, Route de Blonzac.",
            observation: "Conserver cette carte dans l'enveloppe.",
            vueVerso: false,
            // Liens internet ultra-légers hébergés pour ton iPad :
            urlImageRecto: "https://i.ibb.co/VWV3p6C5/carte89-recto.jpg",
            urlImageVerso: "https://i.ibb.co/C36LgqgT/carte89-verso.jpg"
        });
    } else {
        donnéesTerritoires.push({
            id: i,
            proclamateur: "",
            dateAttribution: "",
            recto: `Secteur général de la carte géographique ${i}.`,
            verso: `Détails des rues spécifiques du Territoire ${i}.`,
            observation: "",
            vueVerso: false,
            urlImageRecto: "",
            urlImageVerso: ""
        });
    }
}

let indexSemaineActive = 0;
let modeEdition = { sono: false, discours: false, nettoyage: false, vem: false, territoires: false };

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
    if (page === 'territoires') afficherTerritoires();
};

window.changerSemaine = function(index) { indexSemaineActive = index; afficherVem(); };
window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { t.vueVerso = !t.vueVerso; afficherTerritoires(); }
};

window.basculerEditionTerritoires = function() { modeEdition.territoires = !modeEdition.territoires; afficherTerritoires(); };
window.sauvegarderTerritoires = function() {
    donnéesTerritoires.forEach((t) => {
        let elProc = document.getElementById(`proc-${t.id}`);
        let elDate = document.getElementById(`date-${t.id}`);
        let elObs = document.getElementById(`obs-${t.id}`);
        if (elProc) t.proclamateur = elProc.value;
        if (elDate) t.dateAttribution = elDate.value;
        if (elObs) t.observation = elObs.value;
    });
    modeEdition.territoires = false; alert("✅ Modifications enregistrées !"); afficherTerritoires();
};

// --- DESIGN : ACCUEIL ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0; padding-bottom:30px;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center; box-shadow:0 2px 4px rgba(0,0,0,0.1);"><h1>🗺️ Territoires et Localisation</h1></nav>
        <div style="max-width: 95%; margin: 20px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; padding: 10px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🔊 Sonorisation & Estrade</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:12px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:12px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🧼 Programme de nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:12px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:12px; background:#f1c40f; color:#2c3e50; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🗺️ Gestion des Territoires</h3><button onclick="window.changerPage('territoires')" style="width:100%; padding:12px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- DESIGN : CAHIER VIE ET MINISTÈRE ---
function afficherVem() {
    let sem = semainesVem[indexSemaineActive]; let boutonsSemaines = "";
    semainesVem.forEach((s, idx) => {
        let actif = idx === indexSemaineActive ? "background:#2c3e50; color:white;" : "background:white; color:#2c3e50;";
        boutonsSemaines += `<button onclick="window.changerSemaine(${idx})" style="padding:10px 11px; margin:4px; border:1px solid #2c3e50; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px; ${actif}">${s.titre.split(" | ")[0]}</button>`;
    });
    let genererLignes = (tableau, prefixe) => {
        return tableau.map((p, i) => `
            <div style="background: #fdfefe; padding: 12px; border: 1px solid #eaeded; border-radius: 6px; margin-bottom: 8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#7f8c8d; font-weight:bold; font-size:13px;">⏱️ ${p.temps}</span>
                    <span style="text-align:right; font-weight:bold; color:#2c3e50; font-size:14px; background: #f2f4f4; padding: 2px 8px; border-radius: 4px;">
                        ${modeEdition.vem ? `<input id="${prefixe}-${i}" value="${p.attribution}" style="padding:2px; font-size:13px;">` : p.attribution}
                    </span>
                </div>
                <div style="font-weight:500; color:#34495e; font-size:14px; margin-top:4px;">${p.titre}</div>
            </div>`).join("");
    };
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0; font-size:18px;">📖 Réunion Vie & Ministère</h2>
            <div>
                <button onclick="${modeEdition.vem ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 6px 12px; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px; font-size:13px;">${modeEdition.vem ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; margin-left:5px; font-weight:bold;">Accueil</button>
            </div>
        </nav>
        <div style="max-width: 95%; margin: 15px auto;">
            <div style="margin-bottom:15px; display:flex; flex-wrap:wrap; justify-content:center;">${boutonsSemaines}</div>
            <div style="background:white; padding:20px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                <h3 style="color:#2c3e50; border-bottom:3px solid #f1c40f; padding-bottom:8px; text-align:center; font-size:16px;">${sem.titre}</h3>
                <div style="background:#f8f9fa; padding:12px; border-radius:6px; margin-bottom:20px; font-size:13px; border-left: 4px solid #f1c40f;">
                    <div><strong>🎵 Cantique :</strong> ${sem.intro.cantique} | <strong>👔 Président :</strong> ${modeEdition.vem ? `<input id="edit-pres" value="${sem.intro.president}">` : sem.intro.president} | <strong>🙏 Prière :</strong> ${modeEdition.vem ? `<input id="edit-priere" value="${sem.intro.priere}">` : sem.intro.priere}</div>
                </div>
                <h4 style="color:#2980b9; border-bottom:1px solid #2980b9; padding-bottom:5px; font-size:14px;">💎 JOYAUX DE LA PAROLE</h4>${genererLignes(sem.joyaux, "j")}
                <h4 style="color:#c0392b; border-bottom:1px solid #c0392b; padding-bottom:5px; font-size:14px; margin-top:20px;">🏃 APPLIQUE-TOI AU MINISTÈRE</h4>${genererLignes(sem.ministere, "m")}
                <h4 style="color:#27ae60; border-bottom:1px solid #27ae60; padding-bottom:5px; font-size:14px; margin-top:20px;">🧼 VIE CHRÉTIENNE</h4>${genererLignes(sem.vie, "v")}
            </div>
        </div>
    </div>`;
}

// --- DESIGN : DISCOURS PUBLICS ---
function afficherDiscours() {
    let lignes = "";
    donnéesDiscours.forEach((l, i) => {
        lignes += `<tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px;">${l.date}</td><td style="padding: 10px;"><strong>${l.theme}</strong></td><td style="padding: 10px;">${l.orateur}</td><td style="padding: 10px;">${l.pres}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:30px;">
        <nav style="background: #e67e22; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;"><h2 style="margin:0; font-size:18px;">🎤 Discours Publics</h2><button onclick="window.changerPage('accueil')" style="padding: 6px 12px;">Accueil</button></nav>
        <div style="padding: 10px; max-width: 100%; overflow-x: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; font-size:13px;"><tr style="background: #2c3e50; color: white; text-align: left;"><th style="padding:10px;">Date</th><th>Thème</th><th>Orateur</th><th>Président</th></tr>${lignes}</table>
        </div>
    </div>`;
}

function afficherSonorisation() { afficherAccueil(); }
function afficherNettoyage() { afficherAccueil(); }

// --- INTERFACE : GESTION DES TERRITOIRES SANS AUCUN BEUG MEMOIRE ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        let dateEcheance = t.dateAttribution ? new Date(new Date(t.dateAttribution).setMonth(new Date(t.dateAttribution).getMonth() + 3)).toLocaleDateString('fr-FR') : "";
        let dateSortieFormatee = t.dateAttribution ? new Date(t.dateAttribution).toLocaleDateString('fr-FR') : "-";
        
        let imageAffichee = t.vueVerso ? t.urlImageVerso : t.urlImageRecto;
        let faceTexte = t.vueVerso ? "Verso (Maisons)" : "Recto (Satellite)";

        let zoneImageHtml = imageAffichee ? 
            `<div style="width:100%; height:140px; background: #eaeded url('${imageAffichee}') no-repeat center; background-size: cover; border-bottom: 1px solid #ddd;"></div>` : 
            `<div style="width:100%; height:140px; background: #f2f4f4; display: flex; align-items: center; justify-content: center; color: #b2babb; font-size: 12px; font-style: italic; border-bottom: 1px solid #ddd; text-align:center; padding:5px;">📷 Vue ${faceTexte} indisponible</div>`;

        return `
        <div style="background: white; border-radius: 8px; border: 1px solid #d6dbdf; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-direction: column; overflow: hidden;">
            <div style="background: #3498db; color: white; padding: 10px; text-align: center;">
                <strong style="font-size: 16px;">Carte N° ${t.id}</strong>
            </div>
            
            ${zoneImageHtml}

            <div style="padding: 12px; flex-grow: 1; display: flex; flex-direction: column; gap: 10px;">
                <div style="background: #f8f9fa; padding: 8px; border-radius: 6px; font-size: 12px; border-left: 3px solid #2ecc71;">
                    <div style="margin-bottom: 4px;"><strong>👤 Nom & Prénom :</strong></div>
                    ${modeEdition.territoires ? 
                        `<input id="proc-${t.id}" value="${t.proclamateur}" placeholder="Nom du proclamateur" style="width:100%; padding:4px; font-size:12px; margin-bottom:5px;">` : 
                        `<div style="font-size:14px; font-weight:bold; color:#2c3e50;">${t.proclamateur || "Disponible"}</div>`
                    }
                    <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #566573; margin-top:5px;">
                        <div>📅 <strong>Date de sortie :</strong> ${modeEdition.territoires ? `<input type="date" id="date-${t.id}" value="${t.dateAttribution}">` : dateSortieFormatee}</div>
                        ${t.dateAttribution ? `<div style="color:#e67e22; font-weight:bold; margin-top: 2px;">📥 <strong>Rentrée prévue :</strong> ${dateEcheance}</div>` : ""}
                    </div>
                </div>
                <div style="border: 1px dashed #b2babb; padding: 8px; border-radius: 6px; font-size: 12px; background: #fefefe; min-height: 45px;">
                    <div style="font-weight: bold; color: #7f8c8d; font-size: 10px; margin-bottom: 2px; text-transform: uppercase;">📍 ${t.vueVerso ? "Détails Verso" : "Vue Recto"}</div>
                    <div>${t.vueVerso ? t.verso : t.recto}</div>
                </div>
                <button onclick="window.basculerRectoVerso(${t.id})" style="width: 100%; padding: 6px; background: #f2f4f4; border: 1px solid #bdc3c7; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; color: #34495e;">
                    🔄 Retourner la carte (voir ${t.vueVerso ? "Recto" : "Verso"})
                </button>
                <div style="font-size: 12px;">
                    <label style="font-weight: bold; color: #7f8c8d;">Observations :</label>
                    ${modeEdition.territoires ? 
                        `<textarea id="obs-${t.id}" style="width:100%; padding:4px; font-size:12px; height:35px;">${t.observation}</textarea>` : 
                        `<div style="background:#fff9c4; padding:6px; border-radius:4px; font-style:italic; min-height:15px; color:#5d6d7e;">${t.observation || "Aucune note."}</div>`
                    }
                </div>
            </div>
        </div>`;
    }).join("");

    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #3498db; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0; font-size:18px;">🗺️ Cartothèque - 120 Cartes</h2>
            <div>
                <button onclick="${modeEdition.territoires ? 'window.sauvegarderTerritoires()' : 'window.basculerEditionTerritoires()'}" style="padding: 6px 12px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px; font-size:13px;">${modeEdition.territoires ? '💾 Sauver Attributions' : '✏️ Gérer les Cartes'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; cursor:pointer; background:white; color:#3498db; border:1px solid white; border-radius:4px; font-weight:bold; margin-left:5px; font-size:13px;">Accueil</button>
            </div>
        </nav>
        <div style="max-width: 98%; margin: 20px auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(245px, 1fr)); gap: 15px; padding: 5px;">${cartesHtml}</div>
    </div>`;
}

afficherAccueil();
