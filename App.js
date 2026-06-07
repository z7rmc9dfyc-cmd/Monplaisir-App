// Données initiales du programme tirées de ton PDF
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

let modeEdition = false;

window.changerPage = function(page) {
    if (page === 'accueil') afficherAccueil();
    if (page === 'sonorisation') afficherSonorisation();
};

window.basculerEdition = function() {
    modeEdition = !modeEdition;
    afficherSonorisation();
};

window.sauvegarderDonnées = function() {
    donnéesProgramme.forEach((ligne, index) => {
        if (ligne.special === "OUI") {
            ligne.audio = document.getElementById(`audio-${index}`).value;
            ligne.mardi = document.getElementById(`mardi-${index}`).value;
            ligne.samedi = document.getElementById(`samedi-${index}`).value;
        } else {
            ligne.audio = document.getElementById(`audio-${index}`).value;
            ligne.zoom = document.getElementById(`zoom-${index}`).value;
            ligne.estrade = document.getElementById(`estrade-${index}`).value;
            ligne.perchistes = document.getElementById(`perchistes-${index}`).value;
            ligne.mardi = document.getElementById(`mardi-${index}`).value;
            ligne.samedi = document.getElementById(`samedi-${index}`).value;
        }
    });
    modeEdition = false;
    alert("✅ Modifications enregistrées temporairement !");
    afficherSonorisation();
};

function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; min-height: 100vh;">
        <nav style="background-color: #2c3e50; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="margin: 0; font-size: 24px;">🚀 Monplaisir App</h1>
            <span style="background-color: #1abc9c; padding: 5px 12px; border-radius: 15px; font-size: 14px; font-weight: bold;">Tableau de bord</span>
        </nav>
        <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #333;">Bienvenue dans votre espace de gestion</h2>
                <p style="color: #666;">Sélectionnez un pôle d'activité pour commencer à travailler.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
                <div style="background: white; padding: 25px; border-radius: 10px; border-top: 5px solid #3498db; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h3>👥 Gestion des Membres</h3>
                    <p style="color: #7f8c8d; font-size: 14px;">Suivi des effectifs, fiches d'inscription et cotisations.</p>
                    <button onclick="alert('En construction')" style="background-color: #3498db; color: white; border: none; padding: 10px; border-radius: 5px; width: 100%; font-weight: bold; cursor: pointer;">Ouvrir le pôle</button>
                </div>
                <div style="background: white; padding: 25px; border-radius: 10px; border-top: 5px solid #1abc9c; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h3>🗺️ Pôle Territoires</h3>
                    <p style="color: #7f8c8d; font-size: 14px;">Cartographie et suivi des affectations sur le terrain.</p>
                    <button onclick="alert('En construction')" style="background-color: #1abc9c; color: white; border: none; padding: 10px; border-radius: 5px; width: 100%; font-weight: bold; cursor: pointer;">Ouvrir le pôle</button>
                </div>
                <div style="background: white; padding: 25px; border-radius: 10px; border-top: 5px solid #9b59b6; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h3>🔊 Sonorisation & Estrade</h3>
                    <p style="color: #7f8c8d; font-size: 14px;">Planning des affectations audio, vidéo, Zoom et estrade 2026.</p>
                    <button onclick="window.changerPage('sonorisation')" style="background-color: #9b59b6; color: white; border: none; padding: 10px; border-radius: 5px; width: 100%; font-weight: bold; cursor: pointer;">Ouvrir le pôle</button>
                </div>
            </div>
        </div>
    </div>`;
}

function afficherSonorisation() {
    let lignesHTML = "";
    donnéesProgramme.forEach((l, i) => {
        if (l.special === "OUI") {
            lignesHTML += `<tr style="background-color: #fcf3cf; border-bottom: 1px solid #eee;">
                <td colspan="4" style="padding: 12px; font-weight: bold; text-align: center; color: #b7950b;">
                    ${modeEdition ? `<input type="text" id="audio-${i}" value="${l.audio}" style="width: 80%; padding: 4px; text-align: center; font-weight: bold;">` : l.audio}
                </td>
                <td style="padding: 12px; font-weight: bold;">${modeEdition ? `<input type="text" id="mardi-${i}" value="${l.mardi}" style="width: 90%; padding: 4px;">` : l.mardi}</td>
                <td style="padding: 12px; font-weight: bold;">${modeEdition ? `<input type="text" id="samedi-${i}" value="${l.samedi}" style="width: 90%; padding: 4px;">` : l.samedi}</td>
            </tr>`;
        } else {
            lignesHTML += `<tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px;">${modeEdition ? `<input type="text" id="audio-${i}" value="${l.audio}" style="width: 90%; padding: 4px;">` : l.audio}</td>
                <td style="padding: 12px;">${modeEdition ? `<input type="text" id="zoom-${i}" value="${l.zoom}" style="width: 90%; padding: 4px;">` : l.zoom}</td>
                <td style="padding: 12px;">${modeEdition ? `<input type="text" id="estrade-${i}" value="${l.estrade}" style="width: 90%; padding: 4px;">` : l.estrade}</td>
                <td style="padding: 12px;">${modeEdition ? `<input type="text" id="perchistes-${i}" value="${l.perchistes}" style="width: 90%; padding: 4px;">` : l.perchistes}</td>
                <td style="padding: 12px; font-weight: 500; color: #2c3e50;">${modeEdition ? `<input type="text" id="mardi-${i}" value="${l.mardi}" style="width: 90%; padding: 4px;">` : l.mardi}</td>
                <td style="padding: 12px; font-weight: 500; color: #2c3e50;">${modeEdition ? `<input type="text" id="samedi-${i}" value="${l.samedi}" style="width: 90%; padding: 4px;">` : l.samedi}</td>
            </tr>`;
        }
    });

    document.body.innerHTML = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; min-height: 100vh;">
        <nav style="background-color: #9b59b6; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="margin: 0; font-size: 22px;">🔊 Assemblée de Monplaisir - Programme 2026</h1>
            <div>
                <button onclick="${modeEdition ? 'window.sauvegarderDonnées()' : 'window.basculerEdition()'}" style="background-color: ${modeEdition ? '#27ae60' : '#2980b9'}; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-right: 10px;">
                    ${modeEdition ? '💾 Sauvegarder' : '✏️ Modifier le Tableau'}
                </button>
                <button onclick="window.changerPage('accueil')" style="background-color: rgba(255,255,255,0.2); color: white; border: 1px solid white; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">⬅️ Accueil</button>
            </div>
        </nav>

        <div style="max-width: 1300px; margin: 30px auto; padding: 0 20px;">
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="background-color: #2c3e50; color: white; border-bottom: 2px solid #ddd;">
                            <th style="padding: 12px;">Audio-Vidéo</th>
                            <th style="padding: 12px;">Accueil Zoom</th>
                            <th style="padding: 12px;">Estrade</th>
                            <th style="padding: 12px;">Perchistes</th>
                            <th style="padding: 12px;">Mardi</th>
                            <th style="padding: 12px;">Samedi</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${lignesHTML}
                    </tbody>
                </table>
            </div>
            
            <div style="margin-top: 25px; background: #eaeded; border: 2px dashed #bdc3c7; padding: 20px; border-radius: 10px; text-align: center; color: #7f8c8d;">
                ℹ️ <em>Une section « Notices d'utilisation » pourra être ajoutée en dessous dès que vous le souhaiterez.</em>
            </div>
        </div>
    </div>`;
}

afficherAccueil();
