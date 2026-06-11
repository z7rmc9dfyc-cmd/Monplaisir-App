// Fonction pour afficher le contenu dynamique
function afficherSection(nom) {
    const conteneur = document.getElementById('conteneur-principal');
    
    if (nom === 'sonorisation') {
        conteneur.innerHTML = `
            <h2>Sonorisation</h2>
            <p>Ici, tu pourras gérer tes équipements de sonorisation.</p>
        `;
    } else if (nom === 'territoires') {
        conteneur.innerHTML = `
            <h2>Territoires</h2>
            <p>Ici, tu retrouveras la liste de tes 120 territoires.</p>
        `;
    }
}
