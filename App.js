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

// --- 5. INITIALISATION DES 120 CARTES DE TERRITOIRE ---
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
            urlImageRecto: "", 
            urlImageVerso: ""  
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

// Fonctions de chargement individuelles pour le Recto et le Verso
window.chargerImageRecto = function(id) {
    let input = document.getElementById(`input-recto-${id}`);
    if (input && input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let t = donnéesTerritoires.find(item => item.id === id);
            if (t) { t.urlImageRecto = e.target.result; afficherTerritoires(); }
        };
        reader.readAsDataURL(input.files[0]);
    }
};

window.chargerImageVerso = function(id) {
    let input = document.getElementById(`input-verso-${id}`);
    if (input && input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let t = donnéesTerritoires.find(item => item.id === id);
            if (t) { t.urlImageVerso = e.target.result; afficherTerritoires(); }
        };
        reader.readAsDataURL(input.files[0]);
    }
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

// --- INTERFACE : 120 CARTES RECTO ET VERSO MANUELS ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        let dateEcheance = t.dateAttribution ? new Date(new Date(t.dateAttribution).setMonth(new Date(t.dateAttribution).getMonth() + 3)).toLocaleDateString('fr-FR') : "";
        let dateSortieFormatee = t.dateAttribution ? new Date(t.dateAttribution).toLocaleDateString('fr-FR') : "-";
        
        // Sélection de l'image selon la face active (Recto ou Verso)
        let imageAffichee = t.vueVerso ? t.urlImageVerso : t.urlImageRecto;
        let faceTexte = t.vueVerso ? "Verso" : "Recto";

        let zoneImageHtml = imageAffichee ? 
            `<div style="width:100%; height:140px; background: #eaeded url('${imageAffichee}') no-repeat center; background-size: cover; border-bottom: 1px solid #ddd;"></div>` : 
            `<div style="width:100%; height:140px; background: #f2f4f4; display: flex; align-items: center; justify-content: center; color: #b2babb; font-size: 12px; font-style: italic; border-bottom: 1px solid #ddd; text-align:center; padding:5px;">
                📷 Aucune photo pour la vue ${faceTexte}
             </div>`;

        return `
        <div style="background: white; border-radius: 8px; border: 1px solid #d6dbdf; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-direction: column; overflow: hidden;">
            <div style="background: #3498db; color: white; padding: 10px; text-align: center;">
                <strong style="font-size: 16px;">Carte N° ${t.id}</strong>
            </div>
            
            ${zoneImageHtml}

            ${modeEdition.territoires ? `
                <div style="background:#ebf5fb; padding:8px; display:flex; justify-content:space-around; border-bottom:1px solid #d4e6f1;">
                    <div>
                        <input type="file" id="input-recto-${t.id}" accept="image/*" style="display:none;" onchange="window.chargerImageRecto(${t.id})">
                        <button onclick="document.getElementById('input-recto-${t.id}').click()" style="padding:4px 6px; font-size:10px; cursor:pointer; background:#2980b9; color:white; border:none; border-radius:3px;">🖼️ Photo Recto</button>
                    </div>
                    <div>
                        <input type="file" id="input-verso-${t.id}" accept="image/*" style="display:none;" onchange="window.chargerImageVerso(${t.id})">
                        <button onclick="document.getElementById('input-verso-${t.id}').click()" style="padding:4px 6px; font-size:10px; cursor:pointer; background:#8e44ad; color:white; border:none; border-radius:3px;">🖼️ Photo Verso</button>
                    </div>
                </div>
            ` : ""}

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
                <button onclick="window.basculerRectoVerso(${t.id})" style="width: 100%; padding: 6px; background: #f2f4f4; border: 1px solid #bdc3c7; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; color: #34495e;">🔄 Tourner la carte (${faceTexte === "Recto" ? "voir Verso" : "voir Recto"})</button>
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
