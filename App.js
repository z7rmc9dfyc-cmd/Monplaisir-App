function afficherSection(section) {
    const conteneur = document.getElementById('conteneur-principal');
    
    if (section === 'territoires') {
        conteneur.innerHTML = `
            <h2>🗺️ Gestion des Territoires</h2>
            <p>Ici s'afficheront tes 120 zones et territoires.</p>
        `;
    } else if (section === 'sonorisation') {
        conteneur.innerHTML = `
            <h2>🔊 Pôle Sonorisation</h2>
            <p>Ici s'affichera ton programme de sonorisation.</p>
        `;
    }
}
