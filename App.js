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

// --- 2. DONNÉES DISCOURS PUBLICS ---
let donnéesDiscours = [
    { date: "02/04/2026", theme: "MÉMORIAL : Notre reconnaissance", num: "-", orateur: "ZIG Widney", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "04/04/2026", theme: "La pensée de Dieu sur le mariage", num: "13", orateur: "HILAIRE Claude", assemblee: "POINTE NOIRE", pres: "BENONY Christian", lecteur: "LOGNOS Nicolas", groupe: "ZIG" }
];

// --- 3. DONNÉES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026", special: "" }
];

// --- 4. DONNÉES NETTOYAGE ---
let donnéesNettoyage = [
    { groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26", special: "" }
];

// --- 5. INITIALISATION DES 120 CARTES AVEC VOTRE VRAIE PHOTO CLICHÉE ---
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
            // Ta vraie carte convertie en texte pour s'afficher en direct :
            urlImage: "data:image/jpeg;base64,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",
            vueVerso: false
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
            urlImage: "" 
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

// --- LOGIQUES DE ENREGISTREMENT ---
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

// --- INTERFACE : GESTION DES TERRITOIRES AVEC LE SUPPORT IMAGE ENTIÈREMENT DIRECT ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        let dateEcheance = t.dateAttribution ? new Date(new Date(t.dateAttribution).setMonth(new Date(t.dateAttribution).getMonth() + 3)).toLocaleDateString('fr-FR') : "";
        let dateSortieFormatee = t.dateAttribution ? new Date(t.dateAttribution).toLocaleDateString('fr-FR') : "-";
        
        let zoneImageHtml = t.urlImage ? 
            `<div style="width:100%; height:140px; background: #eaeded url('${t.urlImage}') no-repeat center; background-size: cover; border-bottom: 1px solid #ddd;"></div>` : 
            `<div style="width:100%; height:140px; background: #f2f4f4; display: flex; align-items: center; justify-content: center; color: #b2babb; font-size: 12px; font-style: italic; border-bottom: 1px solid #ddd;">📷 Carte disponible sans photo</div>`;

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
                        ${t.dateAttribution ? `<div style="color:#e67e22; font-weight:bold;">📥 <strong>Rentrée prévue :</strong> ${dateEcheance}</div>` : ""}
                    </div>
                </div>
                <div style="border: 1px dashed #b2babb; padding: 8px; border-radius: 6px; font-size: 12px; background: #fefefe; min-height: 45px;">
                    <div style="font-weight: bold; color: #7f8c8d; font-size: 10px; margin-bottom: 2px; text-transform: uppercase;">📍 ${t.vueVerso ? "Détails Verso" : "Vue Recto"}</div>
                    <div>${t.vueVerso ? t.verso : t.recto}</div>
                </div>
                <button onclick="window.basculerRectoVerso(${t.id})" style="width: 100%; padding: 6px; background: #f2f4f4; border: 1px solid #bdc3c7; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; color: #34495e;">🔄 Tourner la carte</button>
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

function afficherVem() { afficherAccueil(); }
function afficherDiscours() { afficherAccueil(); }
function afficherSonorisation() { afficherAccueil(); }
function afficherNettoyage() { afficherAccueil(); }

afficherAccueil();
