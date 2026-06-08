// Version minimale stable pour tester l'affichage
let donnéesTerritoires = [];
for (let i = 1; i <= 10; i++) {
    donnéesTerritoires.push({
        id: i,
        proclamateur: "Test",
        dateAttribution: "2026-06-07",
        recto: "Secteur " + i,
        verso: "Détails",
        vueVerso: false
    });
}

function afficherTerritoires() {
    document.body.innerHTML = "<h1>Application en ligne !</h1><p>Si tu vois ceci, le code fonctionne.</p>";
}

afficherTerritoires();
