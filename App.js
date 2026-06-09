// --- DONNÉES ---
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

// --- LOGIQUE D'AFFICHAGE ---
function afficherTerritoires() {
    const conteneur = document.getElementById('conteneur-principal');
    if (!conteneur) return;

    let cartesHtml = donnéesTerritoires.map(t => {
        return `
        <div style="background: white; border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px; width: 200px;">
            <h3>Carte N° ${t.id}</h3>
            <p><strong>Proclamateur :</strong> ${t.proclamateur || "Disponible"}</p>
            <p><strong>Localisation :</strong> ${t.vueVerso ? t.verso : t.recto}</p>
            <button onclick="window.basculerRectoVerso(${t.id})">🔄 Tourner</button>
        </div>`;
    }).join("");

    conteneur.innerHTML = `<div style="display: flex; flex-wrap: wrap;">${cartesHtml}</div>`;
}

window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { 
        t.vueVerso = !t.vueVerso; 
        afficherTerritoires(); 
    }
};

document.addEventListener('DOMContentLoaded', afficherTerritoires);

2. Ton fichier index.html (La structure)

Assure-toi qu'il ressemble à ceci pour que le JavaScript puisse s'y accrocher :
HTML

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Monplaisir App</title>
</head>
<body>
    <h1>Gestion des Territoires</h1>
    <div id="conteneur-principal"></div>
    <script src="App.js"></script>
</body>
</html>
