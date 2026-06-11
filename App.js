const donneesSections = {
    discours: {
        titre: "Programme des Discours Publics",
        contenu: `
            <style>
                .table-container { overflow-x: auto; }
                .styled-table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
                .styled-table thead tr { background-color: #2c3e50; color: #ffffff; text-align: left; }
                .styled-table th, .styled-table td { padding: 10px; border-bottom: 1px solid #dddddd; font-size: 13px; }
                .styled-table tbody tr:nth-of-type(even) { background-color: #f3f3f3; }
                .groupe-highlight { color: #c0392b; font-weight: bold; }
            </style>
            <div class="table-container">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Thème</th>
                            <th>Orateur</th>
                            <th>Président</th>
                            <th>Lecteur</th>
                            <th>Groupe recevant l'orateur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>04/04</td><td>Mariage et sexualité</td><td>HILAIRE</td><td>BENONY</td><td>LOGNOS</td><td class="groupe-highlight">Groupe ZIG</td></tr>
                        <tr><td>11/04</td><td>Vaincre le mal</td><td>LOGNOS</td><td>MAMBOL</td><td>ZIG</td><td>-</td></tr>
                        <tr><td>18/04</td><td>Perle de valeur</td><td>AÏELLO</td><td>ASTASIE</td><td>DANICAN</td><td class="groupe-highlight">Groupe BENONY</td></tr>
                        <tr><td>02/05</td><td>Monde dépravé</td><td>POMMIER</td><td>ZIG</td><td>LYCAON</td><td class="groupe-highlight">Groupe MAMBOL</td></tr>
                        <tr><td>09/05</td><td>Hauteur sûre</td><td>MAMBOL</td><td>TORVAL</td><td>MANNETIER</td><td>-</td></tr>
                        <tr><td>16/05</td><td>But dans la vie</td><td>FERDY</td><td>GILLES</td><td>MELGAR</td><td class="groupe-highlight">Groupe GILLES</td></tr>
                        <tr><td>23/05</td><td>Temps détresse</td><td>LANDAIS</td><td>MANNETIER</td><td>JOURSON</td><td class="groupe-highlight">Groupe LOGNOS</td></tr>
                        <tr><td>30/05</td><td>Marchez avec Dieu</td><td>ADHEL</td><td>SIBA</td><td>BENONY</td><td>-</td></tr>
                        <tr><td>27/06</td><td>Utilisons l'instruction</td><td>...</td><td>CASI</td><td>LOGNOS</td><td class="groupe-highlight">Groupe MANNETIER</td></tr>
                    </tbody>
                </table>
            </div>
        `
    }
};
