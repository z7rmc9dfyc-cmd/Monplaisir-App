// --- 5. INITIALISATION DES 120 CARTES (INCLUSION DIRECTE) ---
let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    if (i === 89) {
        donnéesTerritoires.push({
            id: 89,
            proclamateur: "Mambole Lydia",
            dateAttribution: "2026-06-04",
            recto: "📍 Route de Blonzac (Satellite)",
            verso: "🏠 Liste des habitations (1-35)",
            vueVerso: false,
            // Voici tes photos en format texte, sans aucun lien externe :
            urlImageRecto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAo
