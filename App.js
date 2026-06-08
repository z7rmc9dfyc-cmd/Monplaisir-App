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

// --- 5. INITIALISATION DES 120 CARTES AVEC TES DEUX VRAIES IMAGES INJECTÉES ---
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
            // Ta vraie image Recto (Satellite) intégrée directement :
            urlImageRecto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nf/AABEIAKAAoAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xAA7EAABAwMCBAMECgEDAwUAAAABAgMEAAURBiEHEjFBE1FhInGBgRQVFiMyQpGxwdFSYnKhM0OCkrIk/88BAQABBQEBAAAAAAAAAAAAAAADAQIEBQYABxf/xAAlEQACAgICAgMAAwEBAAAAAAAAAQIDBBEhMRJBEwUiUTJSYUIz/9oADAMBAAIRAxEAPwDcaalKApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQH//Z",
            // Ta vraie image Verso (Liste/Carte blanche) intégrée directement :
            urlImageVerso: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGREZaVFRfeWhaXFxeWp1lZmtph3VpZ2Z1f3V9pM2FfKOfp3V90fGByv7////////9yv3///////////////////////80NDc8XlB6XF96////////////////////////////////////////////////////////////////////////////wAALCAKAAoABAREA8f/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1N2N3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqoo6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/aAAwDAQACEQMRAD8AsUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUE91b2wzPMkY9WIFZ0/ibS4M/6R5jf3UBP69KdmxXNiiuXn8bWyA+RbSSf7xAFZs/jS+lz5UEUQ9TljRytidRI7iiuAl8UatL0uRGP9hAKqSavqM3Mt7Of+BmnyNke1XQ9IorzBby5B3C5lz9XNXIdc1OEgrdyNj+/wDL/OhwY/ao9ForirTxnOhAvIEkX+8mVP8AhXRadrun6jgQXAV/+eb8NSaaLjJS2NCiiikMKKKKACiiigAooooAKKK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",
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

// --- INTERFACE : GESTION DES TERRITOIRES AVEC DEUX PHOTOS DIRECTES INTÉGRÉES ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        let dateEcheance = t.dateAttribution ? new Date(new Date(t.dateAttribution).setMonth(new Date(t.dateAttribution).getMonth() + 3)).toLocaleDateString('fr-FR') : "";
        let dateSortieFormatee = t.dateAttribution ? new Date(t.dateAttribution).toLocaleDateString('fr-FR') : "-";
        
        // Sélection automatique de l'image correspondante
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
        <nav style="background: #3498db; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
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
