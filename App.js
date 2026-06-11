const donneesSections = {
    discours: {
        titre: "Programme des Discours Publics",
        contenu: `
            <table border="1" style="width:100%; border-collapse: collapse; font-size: 12px; text-align: left;">
                <tr style="background-color: #f2f2f2;">
                    <th>Date</th><th>Thème</th><th>Orateur</th><th>Président</th>
                </tr>
                <tr><td>02/04/2026</td><td>Mémorial</td><td>ZIG Widney</td><td>ADHEL Gilbert</td></tr>
                <tr><td>04/04/2026</td><td>Pensée de Dieu...</td><td>HILAIRE Claude</td><td>BENONY Christian</td></tr>
                <tr><td>11/04/2026</td><td>Vaincre le mal...</td><td>LOGNOS Nicolas</td><td>MAMBOL Freddy</td></tr>
                <tr><td>18/04/2026</td><td>Perle de valeur</td><td>AÏELLO Salvatore</td><td>ASTASIE Roland</td></tr>
                <tr><td>02/05/2026</td><td>Monde dépravé</td><td>POMMIER Gane</td><td>ZIG Widney</td></tr>
                <tr><td>09/05/2026</td><td>Hauteur sûre</td><td>MAMBOL Freddy</td><td>TORVAL Malick</td></tr>
                <tr><td>16/05/2026</td><td>But dans la vie</td><td>FERDY Sitcharn</td><td>GILLES Thierry</td></tr>
                <tr><td>23/05/2026</td><td>Temps de détresse</td><td>LANDAIS Elie</td><td>MANNETIER Ludovic</td></tr>
                <tr><td>30/05/2026</td><td>Marchez avec Dieu</td><td>ADHEL Gilbert</td><td>SIBA André</td></tr>
                <tr><td>06/06/2026</td><td>Récolter la vie</td><td>GALTIER Ludovic</td><td>CASI Daniel</td></tr>
                <tr><td>13/06/2026</td><td>Craindre le vrai Dieu</td><td>BENONY Christian</td><td>ADHEL Gilbert</td></tr>
                <tr><td>20/06/2026</td><td>Fin de tout ?</td><td>ASTASIE Roland</td><td>TORVAL Malick</td></tr>
                <tr><td>27/06/2026</td><td>Utilisons l'instruction</td><td>...</td><td>CASI Daniel</td></tr>
            </table>
        `
    },
    // ... tes autres sections restent ici
};

function afficher(section) {
    const conteneur = document.getElementById('conteneur-principal');
    const data = donneesSections[section];

    if (data) {
        conteneur.innerHTML = `<h2>${data.titre}</h2>${data.contenu || '<p>' + data.texte + '</p>'}`;
    }
}
