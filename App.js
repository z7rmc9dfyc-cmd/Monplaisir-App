function afficher(section) {
    const conteneur = document.getElementById('conteneur-principal');
    conteneur.innerHTML = `
        <h1>${section.toUpperCase()}</h1>
        <p>Tu es bien dans la section ${section}.</p>
        <button onclick="location.reload()">Retour Accueil</button>
    `;
}
