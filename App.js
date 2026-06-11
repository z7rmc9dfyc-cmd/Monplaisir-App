const donneesSections = {
    discours: {
        titre: "Programme des Discours Publics",
        contenu: `<table style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 12px;">
            <thead>
                <tr style="background-color: #2c3e50; color: #ffffff;">
                    <th style="padding: 8px;">Date</th>
                    <th style="padding: 8px;">Thème</th>
                    <th style="padding: 8px;">Orateur</th>
                    <th style="padding: 8px;">Président</th>
                    <th style="padding: 8px;">Lecteur</th>
                    <th style="padding: 8px;">Groupe recevant l'orateur</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>04/04</td><td>Mariage et sexualité</td><td>HILAIRE</td><td>BENONY</td><td>LOGNOS</td><td>Groupe ZIG</td></tr>
                <tr><td>11/04</td><td>Vaincre le mal</td><td>LOGNOS</td><td>MAMBOL</td><td>ZIG</td><td>-</td></tr>
                <tr><td>18/04</td><td>Perle de valeur</td><td>AÏELLO</td><td>ASTASIE</td><td>DANICAN</td><td>Groupe Benony</td></tr>
                <tr><td>02/05</td><td>Monde dépravé</td><td>POMMIER</td><td>ZIG</td><td>LYCAON</td><td>Groupe MAMBOL</td></tr>
                <tr><td>09/05</td><td>Hauteur sûre</td><td>MAMBOL</td><td>TORVAL</td><td>MANNETIER</td><td>-</td></tr>
                <tr><td>16/05</td><td>But dans la vie</td><td>FERDY</td><td>GILLES</td><td>MELGAR</td><td>Groupe GILLES</td></tr>
                <tr><td>23/05</td><td>Temps de détresse</td><td>LANDAIS</td><td>MANNETIER</td><td>JOURSON</td><td>Groupe LOGNOS</td></tr>
                <tr><td>30/05</td><td>Marchez avec Dieu</td><td>ADHEL</td><td>SIBA</td><td>BENONY</td><td>-</td></tr>
                <tr><td>27/06</td><td>Utilisons l'instruction</td><td>...</td><td>CASI</td><td>LOGNOS</td><td>Groupe MANNETIER</td></tr>
            </tbody>
        </table>`
    }
};

function afficher(section) {
    const conteneur = document.getElementById('conteneur-principal');
    const data = donneesSections[section];
    if (data) {
        conteneur.innerHTML = `<h2>${data.titre}</h2>${data.contenu}`;
    }
}
