const donneesSections = {
    discours: {
        titre: "Programme des Discours Publics",
        contenu: `
            <style>
                .table-container { overflow-x: auto; }
                .styled-table { width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 11px; }
                .styled-table thead tr { background-color: #2c3e50; color: #ffffff; text-align: left; }
                .styled-table th, .styled-table td { padding: 8px; border-bottom: 1px solid #dddddd; }
                .styled-table tbody tr:nth-of-type(even) { background-color: #f3f3f3; }
                .groupe-highlight { color: #c0392b; font-weight: bold; }
            </style>
            <div class="table-container">
                <table class="styled-table">
                    <thead>
                        <tr><th>Date</th><th>Thème</th><th>Orateur</th><th>Président</th><th>Lecteur</th><th>Groupe recevant l'orateur</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>02/04</td><td>Mémorial</td><td>ZIG Widney</td><td>ADHEL Gilbert</td><td>-</td><td>-</td></tr>
                        <tr><td>04/04</td><td>Mariage et sexualité</td><td>HILAIRE Claude</td><td>BENONY Christian</td><td>LOGNOS Nicolas</td><td>Groupe ZIG</td></tr>
                        <tr><td>11/04</td><td>Vaincre le mal</td><td>LOGNOS Nicolas</td><td>MAMBOL Freddy</td><td>ZIG Widney</td><td>-</td></tr>
                        <tr><td>18/04</td><td>Perle de valeur</td><td>AÏELLO Salvator</td><td>ASTASIE Roland</td><td>DANICAN Cédric</td><td>Groupe Benony</td></tr>
                        <tr><td>02/05</td><td>Monde dépravé</td><td>POMMIER Gane</td><td>ZIG Widney</td><td>LYCAON Luc</td><td>Groupe MAMBOL</td></tr>
                        <tr><td>09/05</td><td>Hauteur sûre</td><td>MAMBOL Freddy</td><td>TORVAL Malick</td><td>MANNETIER Ludovic</td><td>-</td></tr>
                        <tr><td>16/05</td><td>But dans la vie</td><td>FERDY Sitcharn</td><td>GILLES Thierry</td><td>MELGAR Olivier</td><td>Groupe GILLES</td></tr>
                        <tr><td>23/05</td><td>Temps de détresse</td><td>LANDAIS ELIE</td><td>MANNETIER Ludovic</td><td>JOURSON Victor</td><td>Groupe LOGNOS</td></tr>
                        <tr><td>30/05</td><td>Marchez avec Dieu</td><td>ADHEL Gilbert</td><td>SIBA André</td><td>BENONY Christian</td><td>-</td></tr>
                        <tr><td>06/06</td><td>Vie éternelle</td><td>GALTIER Ludovic</td><td>CASI Daniel</td><td>-</td><td>-</td></tr>
                        <tr><td>13/06</td><td>Pourquoi craindre Dieu</td><td>BENONY Christian</td><td>ADHEL Gilbert</td><td>ADHEL Gilbert</td><td>-</td></tr>
                        <tr><td>20/06</td><td>La mort fin de tout</td><td>ASTASIE Roland</td><td>TORVAL Malick</td><td>GILLES Thierry</td><td>-</td></tr>
                        <tr><td>27/06</td><td>Utilisons l'instruction</td><td>BUJADINOVIC Erick</td><td>LOGNOS Nicolas</td><td>CASI Daniel</td><td>Groupe MANNETIER</td></tr>
                    </tbody>
                </table>
            </div>
        `
    }
};

function afficher(section) {
    const conteneur = document.getElementById('conteneur-principal');
    const data = donneesSections[section];
    if (data) {
        conteneur.innerHTML = `<h2>${data.titre}</h2>${data.contenu}`;
    }
}
