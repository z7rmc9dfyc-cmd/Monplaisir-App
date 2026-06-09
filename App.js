// --- 1. DONNÉES (Territoires + Programmes) ---
let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    donnéesTerritoires.push({
        id: i,
        proclamateur: i === 89 ? "Mambole Lydia" : "",
        recto: `Secteur général de la carte géographique ${i}.`,
        verso: `Détails des rues du territoire ${i}.`,
        vueVerso: false
    });
}

// --- 2. LOGIQUE D'AFFICHAGE ---
function afficherSection(section) {
    const conteneur = document.getElementById('conteneur-principal');
    if (!conteneur) return;

    if (section === 'territoires') {
        let cartesHtml = donnéesTerritoires.map(t => `
            <div style="background: white; border: 1px solid #ddd; padding: 10px; margin: 5px; border-radius: 8px; width: 180px;">
                <h3>N° ${t.id}</h3>
                <p>${t.proclamateur || "Libre"}</p>
                <button onclick="window.basculerRectoVerso(${t.id})">🔄</button>
            </div>`).join("");
        conteneur.innerHTML = `<div style="display: flex; flex-wrap: wrap;">${cartesHtml}</div>`;
    } else {
        conteneur.innerHTML = `<h2>Pôle : ${section.toUpperCase()}</h2><p>Le contenu du programme sera affiché ici.</p>`;
    }
}

window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { t.vueVerso = !t.vueVerso; afficherSection('territoires'); }
};
