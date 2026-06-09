// --- DONNÉES (Gardées telles quelles) ---
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

// --- FONCTION SÉCURISÉE ---
function afficherTerritoires() {
    const conteneur = document.getElementById('conteneur-principal');
    if (!conteneur) {
        console.error("Erreur : Impossible de trouver #conteneur-principal dans index.html");
        return;
    }

    let cartesHtml = donnéesTerritoires.map(t => {
        return `
        <div style="background: white; border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px;">
            <h3>Carte N° ${t.id}</h3>
            <p><strong>Proclamateur :</strong> ${t.proclamateur || "Disponible"}</p>
            <p><strong>Localisation :</strong> ${t.vueVerso ? t.verso : t.recto}</p>
            <button onclick="window.basculerRectoVerso(${t.id})">🔄 Tourner</button>
        </div>`;
    }).join("");

    conteneur.innerHTML = `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">${cartesHtml}</div>`;
}

window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { 
        t.vueVerso = !t.vueVerso; 
        afficherTerritoires(); 
    }
};

// --- ATTENDRE QUE TOUT SOIT CHARGÉ ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page chargée, lancement de l'affichage...");
    afficherTerritoires();
