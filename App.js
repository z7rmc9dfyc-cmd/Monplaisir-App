const contenuApp = {
    sonorisation: {
        titre: "Gestion Sonorisation",
        texte: "Interface de contrôle des équipements audio."
    },
    territoires: {
        titre: "Liste des 120 Territoires",
        texte: "Ceci est la zone dédiée à tes 120 territoires."
    }
};

function afficher(section) {
    const conteneur = document.getElementById('conteneur-principal');
    const data = contenuApp[section];

    if (data) {
        conteneur.innerHTML = `<h2>${data.titre}</h2><p>${data.texte}</p>`;
    } else {
        conteneur.innerHTML = `<h1>Bienvenue, Fredy</h1><p>Section non trouvée.</p>`;
    }
}
