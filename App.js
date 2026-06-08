// --- DONNÉES DE BASE (SANS IMAGES) ---
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
    }
];

let donnéesDiscours = [
    { date: "02/04/2026", theme: "MÉMORIAL : Notre reconnaissance", num: "-", orateur: "ZIG Widney", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "-", groupe: "-", special: "OUI" }
];

let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    donnéesTerritoires.push({
        id: i,
        proclamateur: i === 89 ? "Mambole Lydia" : "",
        dateAttribution: i === 89 ? "2026-06-04" : "",
        recto: `Secteur général de la carte géographique ${i}.`,
        verso: `Détails des rues du territoire ${i}.`,
        observation: i === 89 ? "Conserver cette carte dans l'enveloppe." : "",
        vueVerso: false
    });
}

// --- LOGIQUE D'AFFICHAGE ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        return `
        <div style="background: white; border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px;">
            <h3>Carte N° ${t.id}</h3>
            <p><strong>Proclamateur :</strong> ${t.proclamateur || "Disponible"}</p>
            <p><strong>Localisation :</strong> ${t.vueVerso ? t.verso : t.recto}</p>
            <button onclick="window.basculerRectoVerso(${t.id})">🔄 Tourner</button>
        </div>`;
    }).join("");

    document.body.innerHTML = `
    <div style="font-family: sans-serif; padding: 20px;">
        <h1 onclick="window.location.reload()" style="cursor:pointer;">🗺️ Retour à l'accueil</h1>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">${cartesHtml}</div>
    </div>`;
}

window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { t.vueVerso = !t.vueVerso; afficherTerritoires(); }
};

afficherTerritoires();
