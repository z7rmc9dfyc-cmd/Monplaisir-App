// --- DONNÉES COMPLÈTES EXTRACTES DE TES PDF (JUILLET & AOÛT 2026) ---
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
            { temps: "19:21", titre: "7. « Obéir vaut mieux qu'offrir un sacrifice » (15 min.)", attribution: "Ludovic MANNETIER" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Luc" },
            { temps: "20:10", titre: "Cantique 153 & Prière finale", attribution: "Franck JALET" }
        ]
    },
    {
        titre: "14/07/2026 | JÉRÉMIE 16-17",
        intro: { cantique: "91", priere: "Nicolas LOGNOS", president: "Nicolas LOGNOS" },
        joyaux: [
            { temps: "18:36", titre: "1. Confie-toi en Jéhovah (10 min.)", attribution: "Thierry GILLES" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 16-17 (10 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Jean-Louis" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (3 min.)", attribution: "Sonia JALET & Marie-Line MELGARD" },
            { temps: "19:05", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Jean-Louis & Olivier" },
            { temps: "19:10", titre: "6. Explique tes croyances (4 min.)", attribution: "Nicolas LOGNOS" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Besoins de l'assemblée (15 min.)", attribution: "Nicolas LOGNOS" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Daniel CASI / Lecteur: Meddy DELUMEAUX" },
            { temps: "20:10", titre: "Cantique 118 & Prière finale", attribution: "Gilbert ADHEL" }
        ]
    },
    {
        titre: "21/07/2026 | JÉRÉMIE 18-19",
        intro: { cantique: "11", priere: "Rolland ASTASIE", president: "Rolland ASTASIE" },
        joyaux: [
            { temps: "18:36", titre: "1. Le Grand Potier a le contrôle (10 min.)", attribution: "Rolland ASTASIE" },
            { temps: "18:46", titre: "2. Perles spirituelles JÉRÉMIE 18-19 (10 min.)", attribution: "Victor JOURSON" },
            { temps: "18:56", titre: "3. Lecture de la Bible (4 min.)", attribution: "Luc" }
        ],
        ministere: [
            { temps: "19:01", titre: "4. Engage la conversation (4 min.)", attribution: "Marie-Claire MELGARD & Tania ANGOSTON" },
            { temps: "19:06", titre: "5. Entretiens l'intérêt (4 min.)", attribution: "Aubertine VERIN & Tania ANGOSTON" },
            { temps: "19:11", titre: "6. Explique tes croyances (4 min.)", attribution: "Reynold BELTAI" }
        ],
        vie: [
            { temps: "19:21", titre: "7. Les étapes de la guérison spirituelle (15 min.)", attribution: "Widney ZIG" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Thierry GILLES / Lecteur: Ludovic" },
            { temps: "20:10", titre: "Cantique 153 & Prière finale", attribution: "Franck JALET" }
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
            { temps: "19:21", titre: "7. Zoom sur notre histoire (15 min.)", attribution: "Freddy MAMBOLE" },
            { temps: "19:36", titre: "8. Étude biblique de l'assemblée (30 min.)", attribution: "Conducteur: Christian BENONY / Lecteur: Victor JOURSON" },
            { temps: "20:10", titre: "Cantique 156 & Prière finale", attribution: "Daniel CASI" }
        ]
    }
];

// --- DONNÉES SECONDAIRES POUR LES AUTRES PÔLES ---
let donnéesProgramme = [{ audio: "Malick", zoom: "Fredy", estrade: "Thierry", perchistes: "Luc / José", mardi: "26/05/2026", samedi: "30/05/2026" }];
let donnéesDiscours = [{ date: "07/06/2026", president: "Thierry", orateur: "Gilbert", theme: "La paix véritable" }];
let donnéesNettoyage = [{ groupe: "Benony", mardi: "21/04/26", samedi: "25/04/26" }];

let indexSemaineActive = 0;
let modeEditionVem = false;

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') alert("Pôle Sono disponible");
    if (page === 'discours') alert("Pôle Discours disponible");
    if (page === 'nettoyage') alert("Pôle Nettoyage disponible");
    if (page === 'vem') afficherVem();
};

window.changerSemaine = function(index) {
    indexSemaineActive = index;
    afficherVem();
};

window.basculerEditionVem = function() { modeEditionVem = !modeEditionVem; afficherVem(); };
window.sauvegarderVem = function() {
    let sem = semainesVem[indexSemaineActive];
    sem.intro.president = document.getElementById("edit-pres").value;
    sem.intro.priere = document.getElementById("edit-priere").value;
    sem.joyaux.forEach((j, i) => { j.attribution = document.getElementById("j-" + i).value; });
    sem.ministere.forEach((m, i) => { m.attribution = document.getElementById("m-" + i).value; });
    sem.vie.forEach((v, i) => { v.attribution = document.getElementById("v-" + i).value; });
    modeEditionVem = false; alert("✅ Modifications enregistrées !"); afficherVem();
};

function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; margin:0;">
        <nav style="background: #2c3e50; color: white; padding: 20px; text-align: center;"><h1>🚀 Monplaisir App</h1></nav>
        <div style="max-width: 1100px; margin: 40px auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; padding: 20px;">
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🔊 Sonorisation</h3><button onclick="window.changerPage('sonorisation')" style="width:100%; padding:10px; background:#9b59b6; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #e67e22; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🎤 Discours Publics</h3><button onclick="window.changerPage('discours')" style="width:100%; padding:10px; background:#e67e22; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #2ecc71; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>🧼 Nettoyage</h3><button onclick="window.changerPage('nettoyage')" style="width:100%; padding:10px; background:#2ecc71; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 10px; border-top: 5px solid #f1c40f; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align:center;">
                <h3>📖 Cahier Vie et Ministère</h3><button onclick="window.changerPage('vem')" style="width:100%; padding:10px; background:#f1c40f; color:#2c3e50; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">Ouvrir</button>
            </div>
        </div>
    </div>`;
}

function afficherVem() {
    let sem = semainesVem[indexSemaineActive];
    let boutonsSemaines = "";
    semainesVem.forEach((s, idx) => {
        let actif = idx === indexSemaineActive ? "background:#2c3e50; color:white;" : "background:white; color:#2c3e50;";
        boutonsSemaines += `<button onclick="window.changerSemaine(${idx})" style="padding:10px 14px; margin-right:8px; margin-bottom:8px; border:1px solid #2c3e50; border-radius:4px; cursor:pointer; font-weight:bold; ${actif}">${s.titre.split(" | ")[0]}</button>`;
    });

    let genererLignes = (tableau, prefixe) => {
        return tableau.map((p, i) => `
            <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #eee; align-items:center;">
                <div style="width:12%; color:#7f8c8d; font-weight:bold;">${p.temps}</div>
                <div style="width:53%; font-weight:500; color:#34495e;">${p.titre}</div>
                <div style="width:35%; text-align:right; font-weight:bold; color:#2c3e50;">
                    ${modeEditionVem ? `<input id="${prefixe}-${i}" value="${p.attribution}" style="width:90%; padding:5px; font-weight:bold;">` : p.attribution}
                </div>
            </div>
        `).join("");
    };

    document.body.innerHTML = `
    <div style="font-family: sans-serif; background: #f4f6f9; min-height: 100vh; padding-bottom:40px;">
        <nav style="background: #f1c40f; color: #2c3e50; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
            <h2 style="margin:0">📖 Programme Réunion Vie et Ministère</h2>
            <div>
                <button onclick="${modeEditionVem ? 'window.sauvegarderVem()' : 'window.basculerEditionVem()'}" style="padding: 8px 15px; cursor:pointer; font-weight:bold; background:#2c3e50; color:white; border:none; border-radius:4px;">
                    ${modeEditionVem ? '💾 Sauver' : '✏️ Modifier'}
                </button>
                <button onclick="window.changerPage('accueil')" style="padding: 8px 15px; cursor:pointer; background:white; color:#2c3e50; border:1px solid #2c3e50; border-radius:4px; font-weight:bold; margin-left:10px;">Accueil</button>
            </div>
        </nav>

        <div style="max-width: 900px; margin: 30px auto; padding: 0 20px;">
            <div style="margin-bottom:20px; display:flex; flex-wrap:wrap;">${boutonsSemaines}</div>
            
            <div style="background:white; padding:30px; border-radius:8px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="color:#2c3e50; margin-top:0; border-bottom:3px solid #f1c40f; padding-bottom:10px; text-align:center;">${sem.titre}</h2>
                
                <div style="background:#f8f9fa; padding:15px; border-radius:6px; margin-bottom:25px; display:flex; justify-content:space-around; flex-wrap:wrap; gap:10px; font-size:14px;">
                    <div><strong>Cantique :</strong> ${sem.intro.cantique}</div>
                    <div><strong>Président :</strong> ${modeEditionVem ? `<input id="edit-pres" value="${sem.intro.president}" style="padding:2px;">` : sem.intro.president}</div>
                    <div><strong>Prière :</strong> ${modeEditionVem ? `<input id="edit-priere" value="${sem.intro.priere}" style="padding:2px;">` : sem.intro.priere}</div>
                </div>

                <h4 style="color:#2980b9; border-bottom:2px solid #2980b9; padding-bottom:5px; margin-bottom:10px; letter-spacing:0.5px;">💎 JOYAUX DE LA PAROLE DE DIEU</h4>
                ${genererLignes(sem.joyaux, "j")}

                <h4 style="color:#c0392b; border-bottom:2px solid #c0392b; padding-bottom:5px; margin-top:30px; margin-bottom:10px; letter-spacing:0.5px;">🏃 APPLIQUE-TOI AU MINISTÈRE</h4>
                ${genererLignes(sem.ministere, "m")}

                <h4 style="color:#27ae60; border-bottom:2px solid #27ae60; padding-bottom:5px; margin-top:30px; margin-bottom:10px; letter-spacing:0.5px;">🧼 VIE CHRÉTIENNE</h4>
                ${genererLignes(sem.vie, "v")}
            </div>
        </div>
    </div>`;
}

afficherAccueil();
