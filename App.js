// --- 1. DONNÉES COMPLÈTES VIE ET MINISTÈRE (JUILLET À SEPTEMBRE) ---
let semainesVem = [
    {
        titre: "07/07/2026 | JÉRÉMIE 13-15",
        intro: { cantique: "123", priere: "Ludovic MANNETIER", president: "Ludovic MANNETIER" },
        joyaux: [
            { temps: "18:36", titre: "1. Jéhovah mérite notre obéissance (10 min.)", attribution: "Widney ZIG" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 13-15 (10 min.)", attribution: "Christian BENONY" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Iréné ULCE" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Rosita DEMANT & Elodie ZIG" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Marie Denise TORVAL & Lydia MAMBOLE" },
            { temps: "19:10", titre: "6. Discours (5 min.)", attribution: "Victor JOURSON" }
        ],
        vie: [
            { temps: "19:21", titre: "7. « Obéir vaut mieux qu'offrir un sacrifice » (15 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Ludovic MANNETIER / Lecteur: Malick TADUAI" },
            { temps: "20:06", titre: "Aperçu (3 min) & Cantique 61", attribution: "Prière finale: Pierre PARMASSIVIN" }
        ]
    },
    {
        titre: "14/07/2026 | JÉRÉMIE 16-17",
        intro: { cantique: "34", priere: "Gilbert ADHEL", president: "Nicolas LOGNOS" },
        joyaux: [
            { temps: "18:36", titre: "1. Choisissons bien à qui nous faisons confiance (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 16-17 (10 min.)", attribution: "Gilbert ADHEL" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Daniel CASI" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Eloise JULAN & Juliette JALET" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Tysia VAHALA & Christelle NABAL" },
            { temps: "19:10", titre: "6. Fais des disciples (5 min.)", attribution: "Yvana VAINQUEUR & Martine BEAUGENDRE" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Jeunes, faites confiance aux conseils de la Parole (15 min.)", attribution: "Meddy DELUMEAUX" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Nicolas LOGNOS / Lecteur: Daniel CASI" },
            { temps: "20:06", titre: "Aperçu (3 min) & Cantique 22", attribution: "Prière finale: Luc LYCAON" }
        ]
    },
    {
        titre: "21/07/2026 | JÉRÉMIE 18-19",
        intro: { cantique: "44", priere: "Thierry GILLES", president: "Thierry GILLES" },
        joyaux: [
            { temps: "18:36", titre: "1. La guérison spirituelle est toujours possible (10 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 18-19 (10 min.)", attribution: "André SIBA" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Malick TORVAL" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Ketty BEAUGENDRE & Fabienne DELUMEAUX" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Aubertine VERIN & Tania ANGOSTON" },
            { temps: "19:11", titre: "6. Explique tes croyances (4 min.)", attribution: "Reynold BELTAI" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Les étapes de la guérison spirituelle (15 min.)", attribution: "Widney ZIG" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Ludovic" },
            { temps: "20:06", titre: "Aperçu & Cantique 153", attribution: "Prière finale: Franck JALET" }
        ]
    },
    {
        titre: "28/07/2026 | JÉRÉMIE 20-21",
        intro: { cantique: "73", priere: "Roland ASTASIE", president: "Roland ASTASIE" },
        joyaux: [
            { temps: "18:36", titre: "1. Un prédicateur courageux (10 min.)", attribution: "Christian BENONY" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 20-21 (10 min.)", attribution: "Nicolas LOGNOS" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Sony FAUSTIN" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Francoise DARIN & Jocelyne CRUSOE" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Jacqueline LAVEMBO & Rosette JOLIMAN" },
            { temps: "19:11", titre: "6. Explique tes croyances (4 min.)", attribution: "Mey Li LOGNOS & Valérie LOGNOS" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Soyons prêts à nous adapter (15 min.)", attribution: "Gilbert ADHEL" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Roland ASTASIE / Lecteur: Olivier MELGARD" },
            { temps: "20:06", titre: "Aperçu & Cantique 31", attribution: "Prière finale: Malick TORVAL" }
        ]
    },
    {
        titre: "04/08/2026 | JÉRÉMIE 22-23",
        intro: { cantique: "40", priere: "Freddy MAMBOLE", president: "Freddy MAMBOLE" },
        joyaux: [
            { temps: "18:36", titre: "1. L'importance de bons bergers (10 min.)", attribution: "Roland ASTASIE" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 22-23 (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Daniel CASI" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Sylvianne DANICAN & Claudine BABOULAL" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Dovica JULAN & Karine ROBERT" },
            { temps: "19:11", titre: "6. Discours (4 min.)", attribution: "Olivier MELGARD" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Zoom sur notre histoire (15 min.)", attribution: "Ludovic MANNETIER" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Freddy MAMBOLE / Lecteur: Luc LYCAON" },
            { temps: "20:06", titre: "Aperçu & Cantique 60", attribution: "Prière finale: Reynold BELTAI" }
        ]
    },
    {
        titre: "11/08/2026 | JÉRÉMIE 24-25",
        intro: { cantique: "124", priere: "Nicolas LOGNOS", president: "Nicolas LOGNOS" },
        joyaux: [
            { temps: "18:36", titre: "1. Qu'est-ce qui rendait les figues bonnes/mauvaises ? (10 min.)", attribution: "Malick TORVAL" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 24-25 (10 min.)", attribution: "Widney ZIG" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Luc LYCAON" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Cindy AUGUSTIN & Francelise BENONY" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Martine MELGARD & Amina MANNETIER" },
            { temps: "19:11", titre: "6. Fais des disciples (4 min.)", attribution: "Karine DOMMINEAUX & Suzette MAROUDE" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Soutenons nos réunions en présentiel (15 min.)", attribution: "Christian BENONY" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Nicolas LOGNOS / Lecteur: Franck JALET" },
            { temps: "20:06", titre: "Aperçu & Cantique 137", attribution: "Prière finale: Victor JOURSON" }
        ]
    },
    {
        titre: "18/08/2026 | JÉRÉMIE 26-28",
        intro: { cantique: "77", priere: "Ludovic MANNETIER", president: "Ludovic MANNETIER" },
        joyaux: [
            { temps: "18:36", titre: "1. Ne nous laissons pas tromper (10 min.)", attribution: "Nicolas LOGNOS" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 26-28 (10 min.)", attribution: "Daniel CASI" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Nathan ANGOSTON" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Julienne ULCE & Catherine FAUCHER" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Franck JALET & Jean Louis GUOSEF" },
            { temps: "19:10", titre: "6. Fais des disciples (5 min.)", attribution: "Georgina MALAC & Rolande LUCE" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Faisons preuve de sagesse dans nos paroles (15 min.)", attribution: "Roland ASTASIE" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Ludovic MANNETIER / Lecteur: Sony" },
            { temps: "20:06", titre: "Aperçu & Cantique 71", attribution: "Prière finale: Olivier MELGARD" }
        ]
    },
    {
        titre: "25/08/2026 | JÉRÉMIE 29-30",
        intro: { cantique: "12", priere: "Christian BENONY", president: "Christian BENONY" },
        joyaux: [
            { temps: "18:36", titre: "1. Jéhovah corrige dans une juste mesure (10 min.)", attribution: "Gilbert ADHEL" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 29-30 (10 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Daniel BENOIST" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Kathia NAROUMAN & Aline GUOSEF" },
            { temps: "19:06", titre: "5. Engage la conversation (3 min.)", attribution: "Cosette PIEREL & Lynda CHARLES" },
            { temps: "19:10", titre: "6. Discours (5 min.)", attribution: "André SIBA" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Jéhovah donne un espoir à ses serviteurs (10 min.)", attribution: "Widney ZIG" },
            { temps: "19:31", titre: "8. Une campagne en septembre (5 min.)", attribution: "Nicolas LOGNOS" },
            { temps: "19:36", titre: "9. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Christian BENONY / Lecteur: Victor JOURSON" },
            { temps: "20:06", titre: "Aperçu & Cantique 156", attribution: "Prière finale: Daniel CASI" }
        ]
    },
    {
        titre: "01/09/2026 | JÉRÉMIE 31",
        intro: { cantique: "27", priere: "Thierry GILLES", president: "Thierry GILLES" },
        joyaux: [
            { temps: "18:36", titre: "1. « Je ferai une alliance nouvelle » (10 min.)", attribution: "Ludovic MANNETIER" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 31 (10 min.)", attribution: "Roland ASTASIE" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Iréné ULCE" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Maélie MELGARD & Lislie LAROSE" },
            { temps: "19:05", titre: "5. Engage la conversation (4 min.)", attribution: "Candice JALET & Dovica JULAN" },
            { temps: "19:10", titre: "6. Explique tes croyances (5 min.)", attribution: "Luc LYCAON" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Soyons prêts à nous adapter: Utilisons jw.org (15 min.)", attribution: "Daniel CASI" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Nicolas LOGNOS" },
            { temps: "20:06", titre: "Aperçu & Cantique 132", attribution: "Prière finale: Pierre PARMASSIVIN" }
        ]
    }
];

// --- 2. DONNÉES COMPLÈTES DISCOURS PUBLICS ---
let donnéesDiscours = [
    { date: "02/04/2026", theme: "MÉMORIAL : Notre reconnaissance pour Dieu et le Christ", num: "-", orateur: "ZIG Widney", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "04/04/2026", theme: "La pensée de Dieu sur le mariage et la sexualité", num: "13", orateur: "HILAIRE Claude", assemblee: "POINTE NOIRE", pres: "BENONY Christian", lecteur: "LOGNOS Nicolas", groupe: "ZIG" },
    { date: "11/04/2026", theme: "Comment vaincre le mal par le bien", num: "117", orateur: "LOGNOS Nicolas", assemblee: "GOYAVE", pres: "MAMBOL Freddy", lecteur: "ZIG Widney", groupe: "-" },
    { date: "18/04/2026", theme: "Avez-vous trouvé une 'perle de grande valeur' ?", num: "24", orateur: "AÏELLO Salvator", assemblee: "VERNOU", pres: "ASTASIE Roland", lecteur: "DANICAN Cédric", groupe: "Benony" },
    { date: "25/04/2026", theme: "RÉUNION SPÉCIALE", num: "-", orateur: "-", assemblee: "-", pres: "-", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "02/05/2026", theme: "Vivons avec bon sens au sein d'un monde dépravé", num: "138", orateur: "POMMIER Gane", assemblee: "ST CLAUDE", pres: "ZIG Widney", lecteur: "LYCAON Luc", groupe: "MAMBOL" },
    { date: "09/05/2026", theme: "Jéhovah est une 'hauteur sûre' pour son peuple", num: "151", orateur: "MAMBOL Freddy", assemblee: "GOYAVE", pres: "TORVAL Malick", lecteur: "MANNETIER Ludovic", groupe: "MAMBOL" },
    { date: "16/05/2026", theme: "Quel est votre but dans la vie ?", num: "60", orateur: "FERDY Sitcharn", assemblee: "POINTE NOIRE", pres: "GILLES Thierry", lecteur: "MELGAR Olivier", groupe: "GILLES" },
    { date: "23/05/2026", theme: "Où trouver de l'aide dans les temps de détresse ?", num: "177", orateur: "LANDAIS ELIE", assemblee: "CAPESTERRE SUD", pres: "MANNETIER Ludovic", lecteur: "JOURSON Victor", groupe: "LOGNOS" },
    { date: "30/05/2026", theme: "Marchez-vous avec Dieu ?", num: "149", orateur: "ADHEL Gilbert", assemblee: "GOYAVE", pres: "SIBA André", lecteur: "BENONY Christian", groupe: "-" },
    { date: "06/06/2026", theme: "SEMAINE SPÉCIALE - Comment récolter la vie éternelle ?", num: "-", orateur: "GALTIER Ludovic", assemblee: "-", pres: "CASI Daniel", lecteur: "-", groupe: "-", special: "OUI" },
    { date: "13/06/2026", theme: "Pourquoi craindre le vrai Dieu ?", num: "163", orateur: "BENONY Christian", assemblee: "GOYAVE", pres: "ADHEL Gilbert", lecteur: "ADHEL Gilbert", groupe: "-" },
    { date: "20/06/2026", theme: "La mort est-elle la fin de tout ?", num: "184", orateur: "ASTASIE Roland", assemblee: "GOYAVE", pres: "TORVAL Malick", lecteur: "GILLES Thierry", groupe: "-" },
    { date: "27/06/2026", theme: "Utilisons l'instruction pour louer Jéhovah", num: "146", orateur: "BUJADINOVIC Erick", assemblee: "POINTE NOIRE", pres: "LOGNOS Nicolas", lecteur: "CASI Daniel", groupe: "MANNETIER" }
];

// --- 3. DONNÉES COMPLÈTES SONORISATION ---
let donnéesProgramme = [
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026", special: "" },
    { audio: "Widney", zoom: "Victor", estrade: "Luc", perchistes: "Malick / Fredy", mardi: "02/06/2026", samedi: "06/06/2026", special: "" },
    { audio: "Semaine Spéciale", zoom: "", estrade: "", perchistes: "", mardi: "02/06/2026", samedi: "07/06/2026", special: "OUI" },
    { audio: "Thierry", zoom: "Gilbert", estrade: "Daniel", perchistes: "Iréné / Olivier", mardi: "09/06/2026", samedi: "13/06/2026", special: "" },
    { audio: "Rolland", zoom: "Ludovic", estrade: "Fredy", perchistes: "Jean Louis / Luc", mardi: "16/06/2026", samedi: "20/06/2026", special: "" },
    { audio: "Ludovic", zoom: "Malick", estrade: "Widney", perchistes: "Luc / Olivier", mardi: "23/06/2026", samedi: "27/06/2026", special: "" },
    { audio: "Assemblée Régionale", zoom: "", estrade: "", perchistes: "", mardi: "03/07/2026", samedi: "05/07/2026", special: "OUI" },
    { audio: "Widney", zoom: "Gilbert", estrade: "Luc", perchistes: "Daniel / Malick", mardi: "07/07/2026", samedi: "11/07/2026", special: "" },
    { audio: "Thierry", zoom: "Luc", estrade: "Daniel", perchistes: "Fredy / victor", mardi: "14/07/2026", samedi: "18/07/2026", special: "" },
    { audio: "Rolland", zoom: "Victor", estrade: "Widney", perchistes: "Iréné / Luc", mardi: "21/07/2026", samedi: "25/07/2026", special: "" },
    { audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Victor / Christian", mardi: "28/07/2026", samedi: "01/08/2026", special: "" },
    { audio: "Victor", zoom: "Thierry", estrade: "Fredy", perchistes: "Jean Louis / Olivier", mardi: "04/08/2026", samedi: "08/08/2026", special: "" }
];

// --- 4. DONNÉES COMPLÈTES NETTOYAGE ---
let donnéesNettoyage = [
    { groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26", special: "" },
    { groupe: "Gilles", mardi: "28/04/26", samedi: "02/05/26", special: "" },
    { groupe: "Zig", mardi: "05/05/26", samedi: "09/05/26", special: "" },
    { groupe: "Lognos", mardi: "12/05/26", samedi: "16/05/26", special: "" },
    { groupe: "Mambole", mardi: "19/05/26", samedi: "23/05/26", special: "" },
    { groupe: "Astasie", mardi: "26/05/26", samedi: "30/05/26", special: "" },
    { groupe: "Manetier", mardi: "02/06/26", samedi: "06/06/26", special: "" },
    { groupe: "Benony", mardi: "09/06/26", samedi: "13/06/26", special: "" },
    { groupe: "Zig", mardi: "16/06/26", samedi: "20/06/26", special: "" },
    { groupe: "Gilles", mardi: "23/06/26", samedi: "27/06/26", special: "" },
    { groupe: "Assemblée Régionale", mardi: "03/07/2026 au 05/07/2026", samedi: "-", special: "OUI" },
    { groupe: "Lognos", mardi: "07/07/26", samedi: "11/07/26", special: "" },
    { groupe: "Mambole", mardi: "14/07/26", samedi: "18/07/26", special: "" },
    { groupe: "Astasie", mardi: "21/07/26", samedi: "25/07/26", special: "" },
    { groupe: "Benony", mardi: "28/07/26", samedi: "01/08/26", special: "" },
    { groupe: "Zig", mardi: "04/08/26", samedi: "08/08/26", special: "" },
    { groupe: "Gilles", mardi: "11/08/26", samedi: "15/08/26", special: "" },
    { groupe: "Lognos", mardi: "18/08/26", samedi: "22/08/26", special: "" },
    { groupe: "Mambole", mardi: "25/08/26", samedi: "29/08/26", special: "" },
    { groupe: "Astasie", mardi: "01/09/26", samedi: "05/09/26", special: "" },
    { groupe: "Manetier", mardi: "08/09/26", samedi: "12/09/26", special: "" },
    { groupe: "Benony", mardi: "15/09/26", samedi: "19/09/26", special: "" },
    { groupe: "Gilles", mardi: "22/09/26", samedi: "26/09/26", special: "" },
    { groupe: "Zig", mardi: "29/09/26", samedi: "03/10/26", special: "" },
    { groupe: "Assemblée Circonscription", mardi: "Semaine Spéciale", samedi: "-", special: "OUI" },
    { groupe: "Mambole", mardi: "13/10/26", samedi: "17/10/26", special: "" },
    { groupe: "Astasie", mardi: "20/10/26", samedi: "24/10/26", special: "" },
    { groupe: "Manetier", mardi: "27/10/26", samedi: "31/10/26", special: "" },
    { groupe: "Benony", mardi: "03/11/26", samedi: "07/11/26", special: "" },
    { groupe: "Gilles", mardi: "10/11/26", samedi: "14/11/26", special: "" },
    { groupe: "Zig", mardi: "17/11/26", samedi: "21/11/26", special: "" },
    { groupe: "Lognos", mardi: "24/11/26", samedi: "28/11/26", special: "" },
    { groupe: "Mambole", mardi: "01/12/26", samedi: "05/12/26", special: "" },
    { groupe: "Benony", mardi: "08/12/26", samedi: "12/12/26", special: "" },
    { groupe: "Gilles", mardi: "15/12/26", samedi: "19/12/26", special: "" },
    { groupe: "Zig", mardi: "22/12/26", samedi: "26/12/26", special: "" },
    { groupe: "Lognos", mardi: "29/12/26", samedi: "03/01/27", special: "" }
];

// --- 5. INITIALISATION DES 120 CARTES DE TERRITOIRE ---
let donnéesTerritoires = [];
for (let i = 1; i <= 120; i++) {
    donnéesTerritoires.push({
        id: i,
        proclamateur: "",
        dateAttribution: "",
        recto: `Secteur général et limites de la carte géographique ${i}.`,
        verso: `Détails des rues, résidences et impasses spécifiques du Territoire ${i}.`,
        observation: "",
        vueVerso: false
    });
}

let indexSemaineActive = 0;
let modeEdition = { sono: false, discours: false, nettoyage: false, vem: false, territoires: false };

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
    if (page === 'discours') afficherDiscours();
    if (page === 'nettoyage') afficherNettoyage();
    if (page === 'vem') afficherVem();
    if (page === 'territoires') afficherTerritoires();
};

window.changerSemaine = function(index) { indexSemaineActive = index; afficherVem(); };
window.basculerRectoVerso = function(id) {
    let t = donnéesTerritoires.find(item => item.id === id);
    if (t) { t.vueVerso = !t.vueVerso; afficherTerritoires(); }
};

// --- LOGIQUES DE SAUVEGARDE POUR TOUTES LES PAGES ---
window.basculerEditionVem = function() { modeEdition.vem = !modeEdition.vem; afficherVem(); };
window.sauvegarderVem = function() {
    let sem = semainesVem[indexSemaineActive];
    sem.intro.president = document.getElementById("edit-pres").value;
    sem.intro.priere = document.getElementById("edit-priere").value;
    sem.joyaux.forEach((j, i) => { j.attribution = document.getElementById("j-" + i).value; });
    sem.ministere.forEach((m, i) => { m.attribution = document.getElementById("m-" + i).value; });
    sem.vie.forEach((v, i) => { v.attribution = document.getElementById("v-" + i).value; });
    modeEdition.vem = false; alert("✅ Programme Vie et Ministère mis à jour !"); afficherVem();
};

window.basculerEditionTerritoires = function() { modeEdition.territoires = !modeEdition.territoires; afficherTerritoires(); };
window.sauvegarderTerritoires = function() {
    donnéesTerritoires.forEach((t) => {
        let elProc = document.getElementById(`proc-${t.id}`);
        let elDate = document.getElementById(`date-${t.id}`);
        let elObs = document.getElementById(`obs-${t.id}`);
        if (elProc) t.proclamateur = elProc.value;
        if (elDate) t.dateAttribution = elDate.value;
        if (elObs) t.observation = elObs.value;
    });
    modeEdition.territoires = false; alert("✅ Registre Territoires sauvegardé !"); afficherTerritoires();
};

window.basculerEditionNettoyage = function() { modeEdition.nettoyage = !modeEdition.nettoyage; afficherNettoyage(); };
window.sauvegarderNettoyage = function() {
    donnéesNettoyage.forEach((l, i) => {
        l.groupe = document.getElementById("gn-" + i).value;
        l.mardi = document.getElementById("mn-" + i).value;
        if (l.special !== "OUI") l.samedi = document.getElementById("sn-" + i).value;
    });
    modeEdition.nettoyage = false; alert("✅ Nettoyage mis à jour !"); afficherNettoyage();
};

window.basculerEditionSono = function() { modeEdition.sono = !modeEdition.sono; afficherSonorisation(); };
window.sauvegarderSono = function() {
    donnéesProgramme.forEach((l, i) => {
        l.audio = document.getElementById("as-" + i).value;
        l.zoom = document.getElementById("zs-" + i).value;
        l.estrade = document.getElementById("es-" + i).value;
        l.mardi = document.getElementById("ms-" + i).value;
        l.samedi = document.getElementById("ss-" + i).value;
    });
    modeEdition.sono = false; alert("✅ Sonorisation mise à jour !"); afficherSonorisation();
};

window.basculerEditionDiscours = function() { modeEdition.discours = !modeEdition.discours; afficherDiscours(); };
window.sauvegarderDiscours = function() {
    donnéesDiscours.forEach((l, i) => {
        l.date = document.getElementById("d-" + i).value;
        l.theme = document.getElementById("t-" + i).value;
        l.orateur = document.getElementById("o-" + i).value;
        l.pres = document.getElementById("p-" + i).value;
        l.lecteur = document.getElementById("l-" + i).value;
    });
    modeEdition.discours = false; alert("✅ Discours mis à jour !"); afficherDiscours();
};

// --- DESIGN : ACCUEIL TITRE ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0; padding-bottom:30px;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center; box-shadow:0 2px 4px rgba(0,0,0,0.1);"><h1>🗺️ Territoires et Localisation</h1></nav>
        <div style="max-width: 95%; margin: 20px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; padding: 10px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🔊 Sonorisation & Estrade</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:12px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:12px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🧼 Programme de nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:12px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:12px; background:#f1c40f; color:#2c3e50; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align:center;">
                <h3>🗺️ Gestion des Territoires</h3><button onclick="window.changerPage('territoires')" style="width:100%; padding:12px; background:#3498db; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; font-size:16px;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

// --- DESIGN : CAHIER VIE ET MINISTÈRE ---
function afficherVem() {
    let sem = semainesVem[indexSemaineActive];
    let boutonsSemaines = "";
    semainesVem.forEach((s, idx) => {
        let actif = idx === indexSemaineActive ? "background:#2c3e50; color:white;" : "background:white; color:#2c3e50;";
        boutonsSemaines += `<button onclick="window.changerSemaine(${idx})" style="padding:10px 11px; margin:4px; border:1px solid #2c3e50; border-radius:4px; cursor:pointer; font-weight:bold; font-size:12px; ${actif}">${s.titre.split(" | ")[0]}</button>`;
    });

    let genererLignes = (tableau, prefixe) => {
        return tableau.map((p, i) => `
            <div style="background: #fdfefe; padding: 12px; border: 1px solid #eaeded; border-radius: 6px; margin-bottom: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
                    <span style="color:#7f8c8d; font-weight:bold; font-size:13px;">⏱️ ${p.temps}</span>
                    <span style="text-align:right; font-weight:bold; color:#2c3e50; font-size:14px; background: #f2f4f4; padding: 2px 8px; border-radius: 4px;">
                        ${modeEdition.vem ? `<input id="${prefixe}-${i}" value="${p.attribution}" style="padding:2px; font-size:13px;">` : p.attribution}
                    </span>
                </div>
                <div style="font-weight:500; color:#34495e; font-size:14px; line-height: 1.4;">${p.titre}</div>
            </div>
        `).join("");
    };

    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0; font-size:18px;">📖 Réunion Vie & Ministère</h2>
            <div>
                <button onclick="${modeEdition.vem ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 6px 12px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px; font-size:13px;">${modeEdition.vem ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; cursor:pointer; background:white; color:#2c3e50; border:1px solid #2c3e50; border-radius:4px; font-weight:bold; margin-left:5px; font-size:13px;">Accueil</button>
            </div>
        </nav>
        <div style="max-width: 95%; margin: 15px auto;">
            <div style="margin-bottom:15px; display:flex; flex-wrap:wrap; justify-content:center;">${boutonsSemaines}</div>
            <div style="background:white; padding:20px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                <h3 style="color:#2c3e50; margin-top:0; border-bottom:3px solid #f1c40f; padding-bottom:8px; text-align:center; font-size:16px;">${sem.titre}</h3>
                <div style="background:#f8f9fa; padding:12px; border-radius:6px; margin-bottom:20px; display:flex; flex-direction:column; gap:6px; font-size:13px; border-left: 4px solid #f1c40f;">
                    <div><strong>🎵 Cantique d'ouverture :</strong> ${sem.intro.cantique}</div>
                    <div><strong>👔 Président :</strong> ${modeEdition.vem ? `<input id="edit-pres" value="${sem.intro.president}">` : sem.intro.president}</div>
                    <div><strong>🙏 Prière :</strong> ${modeEdition.vem ? `<input id="edit-priere" value="${sem.intro.priere}">` : sem.intro.priere}</div>
                </div>
                <h4 style="color:#2980b9; margin-bottom:10px; border-bottom:1px solid #2980b9; padding-bottom:5px; font-size:14px;">💎 JOYAUX DE LA PAROLE</h4>
                ${genererLignes(sem.joyaux, "j")}
                <h4 style="color:#c0392b; margin-top:25px; margin-bottom:10px; border-bottom:1px solid #c0392b; padding-bottom:5px; font-size:14px;">🏃 APPLIQUE-TOI AU MINISTÈRE</h4>
                ${genererLignes(sem.ministere, "m")}
                <h4 style="color:#27ae60; margin-top:25px; margin-bottom:10px; border-bottom:1px solid #27ae60; padding-bottom:5px; font-size:14px;">🧼 VIE CHRÉTIENNE</h4>
                ${genererLignes(sem.vie, "v")}
            </div>
        </div>
    </div>`;
}

// --- DESIGN : DISCOURS PUBLICS ---
function afficherDiscours() {
    let lignes = "";
    donnéesDiscours.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fff3e0; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="d-${i}" value="${l.date}" style="width:80px">` : l.date}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="t-${i}" value="${l.theme}" style="width:100%">` : `<strong>${l.theme}</strong> <small>(n°${l.num})</small>`}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="o-${i}" value="${l.orateur}" style="width:100%">` : `${l.orateur} <br><small>${l.assemblee}</small>`}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="p-${i}" value="${l.pres}" style="width:100%">` : l.pres}</td>
            <td style="padding: 10px;">${modeEdition.discours ? `<input id="l-${i}" value="${l.lecteur}" style="width:100%">` : l.lecteur}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:30px;">
        <nav style="background: #e67e22; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0; font-size:18px;">🎤 Discours Publics 2026</h2>
            <div>
                <button onclick="${modeEdition.discours ? 'window.sauvegarderDiscours()' : 'window.basculerEditionDiscours()'}" style="padding: 6px 12px; font-weight:bold; cursor:pointer; background: white; color: #e67e22; border:none; border-radius:4px;">${modeEdition.discours ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; margin-left:5px; cursor:pointer; background: transparent; color: white; border: 1px solid white; border-radius:4px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 10px; max-width: 100%; overflow-x: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; min-width: 750px; font-size:13px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <tr style="background: #2c3e50; color: white; text-align: left;"><th style="padding:10px;">Date</th><th>Thème</th><th>Orateur</th><th>Président</th><th>Lecteur</th></tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- DESIGN : SONORISATION & ESTRADE ---
function afficherSonorisation() {
    let lignes = "";
    donnéesProgramme.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #fcf3cf; font-weight: bold;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 10px;">${modeEdition.sono ? `<input id="as-${i}" value="${l.audio}">` : l.audio}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="zs-${i}" value="${l.zoom}">` : l.zoom)}</td>
            <td style="padding: 10px;">${l.special === "OUI" ? "-" : (modeEdition.sono ? `<input id="es-${i}" value="${l.estrade}">` : l.estrade)}</td>
            <td style="padding: 10px; font-weight:500;">${modeEdition.sono ? `<input id="ms-${i}" value="${l.mardi}">` : l.mardi}</td>
            <td style="padding: 10px; font-weight:500;">${modeEdition.sono ? `<input id="ss-${i}" value="${l.samedi}">` : l.samedi}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:30px;">
        <nav style="background: #9b59b6; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0; font-size:18px;">🔊 Sonorisation & Estrade</h2>
            <div>
                <button onclick="${modeEdition.sono ? 'window.sauvegarderSono()' : 'window.basculerEditionSono()'}" style="padding: 6px 12px; font-weight:bold; cursor:pointer; background: white; color:#9b59b6; border:none; border-radius:4px;">${modeEdition.sono ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; margin-left:5px; cursor:pointer; background: transparent; color: white; border: 1px solid white; border-radius:4px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 10px; max-width: 100%; overflow-x: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; min-width: 650px; font-size:13px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <tr style="background: #2c3e50; color: white; text-align: left;"><th style="padding:10px;">Audio</th><th>Zoom</th><th>Estrade</th><th>Mardi</th><th>Samedi</th></tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- DESIGN : NETTOYAGE ---
function afficherNettoyage() {
    let lignes = "";
    donnéesNettoyage.forEach((l, i) => {
        let styleLigne = l.special === "OUI" ? "background-color: #e8f8f5; font-weight: bold; color: #117a65;" : "";
        lignes += `<tr style="border-bottom: 1px solid #eee; ${styleLigne}">
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="gn-${i}" value="${l.groupe}">` : l.groupe}</td>
            <td style="padding: 12px;">${modeEdition.nettoyage ? `<input id="mn-${i}" value="${l.mardi}">` : l.mardi}</td>
            <td style="padding: 12px;">${l.special === "OUI" ? "-" : (modeEdition.nettoyage ? `<input id="sn-${i}" value="${l.samedi}">` : l.samedi)}</td>
        </tr>`;
    });
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:30px;">
        <nav style="background: #2ecc71; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin:0; font-size:18px;">🧼 Programme de Nettoyage</h2>
            <div>
                <button onclick="${modeEdition.nettoyage ? 'window.sauvegarderNettoyage()' : 'window.basculerEditionNettoyage()'}" style="padding: 6px 12px; font-weight:bold; cursor:pointer; background: white; color: #2ecc71; border:none; border-radius:4px;">${modeEdition.nettoyage ? '💾 Sauver' : '✏️ Modifier'}</button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; margin-left:5px; cursor:pointer; background: transparent; color: white; border: 1px solid white; border-radius:4px;">Accueil</button>
            </div>
        </nav>
        <div style="padding: 10px; max-width: 100%; overflow-x: auto;">
            <table style="width: 100%; background: white; border-collapse: collapse; min-width: 550px; font-size:13px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <tr style="background: #2c3e50; color: white; text-align: left;"><th style="padding:12px;">Groupes</th><th>Mardi</th><th>Samedi</th></tr>
                ${lignes}
            </table>
        </div>
    </div>`;
}

// --- DESIGN RESTRUCTURE DU MODULE TERRITOIRES ET LOCALISATION (120 CARTES SANS BOURG) ---
function afficherTerritoires() {
    let cartesHtml = donnéesTerritoires.map(t => {
        let dateEcheance = "";
        if (t.dateAttribution) {
            let d = new Date(t.dateAttribution);
            d.setMonth(d.getMonth() + 3);
            dateEcheance = d.toLocaleDateString('fr-FR');
        }
        return `
        <div style="background: white; border-radius: 8px; border: 1px solid #d6dbdf; box-shadow: 0 2px 4px rgba(0,0,0,0.05); display: flex; flex-direction: column; overflow: hidden;">
            <div style="background: #3498db; color: white; padding: 10px; text-align: center;">
                <strong style="font-size: 16px;">Carte N° ${t.id}</strong>
            </div>
            <div style="padding: 12px; flex-grow: 1; display: flex; flex-direction: column; gap: 10px;">
                <div style="background: #f8f9fa; padding: 8px; border-radius: 6px; font-size: 12px; border-left: 3px solid #2ecc71;">
                    <div style="margin-bottom: 6px;"><strong>👤 Nom & Prénom :</strong></div>
                    ${modeEdition.territoires ? 
                        `<input id="proc-${t.id}" value="${t.proclamateur}" placeholder="Saisir Nom & Prénom" style="width:100%; padding:5px; box-sizing: border-box; font-size:12px; margin-bottom:8px;">` : 
                        `<div style="font-size:14px; font-weight:bold; color:#2c3e50; margin-bottom:8px;">${t.proclamateur || "Disponible"}</div>`
                    }
                    <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #566573;">
                        <div>📅 <strong>Date de sortie :</strong> ${modeEdition.territoires ? `<input type="date" id="date-${t.id}" value="${t.dateAttribution}" style="font-size:11px;">` : (t.dateAttribution ? new Date(t.dateAttribution).toLocaleDateString('fr-FR') : "-")}</div>
                        ${t.dateAttribution ? `<div style="color:#e67e22; font-weight:bold; margin-top: 2px;">📥 <strong>Date de rentrée prévue :</strong> ${dateEcheance}</div>` : ""}
                    </div>
                </div>
                <div style="border: 1px dashed #b2babb; padding: 10px; border-radius: 6px; font-size: 13px; background: #fefefe; min-height: 55px;">
                    <div style="font-weight: bold; color: #7f8c8d; font-size: 11px; margin-bottom: 4px; text-transform: uppercase;">
                        📍 ${t.vueVerso ? "Détails Verso (Rues)" : "Vue Recto (Secteur)"}
                    </div>
                    <div>${t.vueVerso ? t.verso : t.recto}</div>
                </div>
                <button onclick="window.basculerRectoVerso(${t.id})" style="width: 100%; padding: 6px; background: #f2f4f4; border: 1px solid #bdc3c7; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; color: #34495e;">
                    🔄 Retourner la carte (Recto/Verso)
                </button>
                <div style="font-size: 12px;">
                    <label style="font-weight: bold; color: #7f8c8d;">Observations :</label>
                    ${modeEdition.territoires ? 
                        `<textarea id="obs-${t.id}" style="width:100%; box-sizing:border-box; padding:4px; font-size:12px; margin-top:3px; height:40px;">${t.observation}</textarea>` : 
                        `<div style="background:#fff9c4; padding:6px; border-radius:4px; margin-top:3px; font-style:italic; min-height:20px; color:#5d6d7e;">${t.observation || "Aucune note."}</div>`
                    }
                </div>
            </div>
        </div>`;
    }).join("");

    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #3498db; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0; font-size:18px;">🗺️ Cartothèque - 120 Cartes</h2>
            <div>
                <button onclick="${modeEdition.territoires ? 'window.sauvegarderTerritoires()' : 'window.basculerEditionTerritoires()'}" style="padding: 6px 12px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px; font-size:13px;">
                    ${modeEdition.territoires ? '💾 Sauver Attributions' : '✏️ Gérer les Cartes'}
                </button>
                <button onclick="window.changerPage('accueil')" style="padding: 6px 12px; cursor:pointer; background:white; color:#3498db; border:1px solid white; border-radius:4px; font-weight:bold; margin-left:5px; font-size:13px;">Accueil</button>
            </div>
        </nav>
        <div style="max-width: 98%; margin: 20px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; padding: 5px;">
            ${cartesHtml}
        </div>
    </div>`;
}

afficherAccueil();
