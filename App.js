// --- Initialisation des territoires avec chemin vers dossier 'images' ---
let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    if (i === 89) {
        donnéesTerritoires.push({
            id: 89,
            proclamateur: "Mambole Lydia",
            dateAttribution: "2026-06-04",
            recto: "📍 Route de Blonzac (Satellite)",
            verso: "🏠 Habitations 1-35",
            vueVerso: false,
            // Chemin relatif vers ton dossier images
            urlImageRecto: "images/carte89-recto.jpg",
            urlImageVerso: "images/carte89-verso.jpg"
        });
    } else {
        donnéesTerritoires.push({
            id: i,
            proclamateur: "",
            dateAttribution: "",
            recto: `Secteur ${i}`,
            verso: `Détails ${i}`,
            vueVerso: false,
            urlImageRecto: "",
            urlImageVerso: ""
        });
    }
}
// ... (le reste de ton code habituel reste identique) ...
