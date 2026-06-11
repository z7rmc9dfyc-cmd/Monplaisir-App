console.log("App.js est bien chargé");

function afficher(section) {
    console.log("Clic détecté sur : " + section);
    const conteneur = document.getElementById('conteneur-principal');
    conteneur.innerHTML = "<h2>Section : " + section + "</h2>";
}
