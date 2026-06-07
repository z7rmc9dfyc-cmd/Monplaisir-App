// Fonction globale pour changer de page sans recharger
window.changerPage = function(page) {
    if (page === 'accueil') {
        afficherAccueil();
    } else if (page === 'sonorisation') {
        afficherSonorisation();
    }
};

// --- PAGE D'ACCUEIL ---
function afficherAccueil() {
    document.body.innerHTML = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; min-height: 100vh;">
        <nav style="background-color: #2c3e50; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">🚀 Monplaisir App</h1>
            <span style="background-color: #1abc9c; padding: 5px 12px; border-radius: 15px; font-size: 14px; font-weight: bold;">Tableau de bord</span>
        </nav>

        <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #333; margin-bottom: 10px;">Bienvenue dans votre espace de gestion</h2>
                <p style="color: #666; font-size: 16px;">Sélectionnez un pôle d'activité pour commencer à travailler.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
                <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #3498db;">
                    <h3 style="color: #2c3e50; margin-top: 0;">👥 Gestion des Membres</h3>
                    <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Suivi des effectifs, fiches d'inscription, cotisations et annuaire général.</p>
                    <button onclick="alert('Module Membres en cours de construction')" style="background-color: #3498db; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
                </div>

                <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #1abc9c;">
                    <h3 style="color: #2c3e50; margin-top: 0;">🗺️ Pôle Territoires</h3>
                    <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Cartographie, répartition des zones d'activité et suivi des affectations sur le terrain.</p>
                    <button onclick="alert('Module Territoires en cours de construction')" style="background-color: #1abc9c; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
                </div>

                <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #9b59b6;">
                    <h3 style="color: #2c3e50; margin-top: 0;">🔊 Sonorisation & Matériel</h3>
                    <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Inventaire technique, planification des programmes de sonorisation et suivi du matériel disponible.</p>
                    <button onclick="window.changerPage('sonorisation')" style="background-color: #9b59b6; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

// --- PÔLE SONORISATION ---
function afficherSonorisation() {
    document.body.innerHTML = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; min-height: 100vh;">
        <nav style="background-color: #9b59b6; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">🔊 Pôle Sonorisation & Matériel</h1>
            <button onclick="window.changerPage('accueil')" style="background-color: rgba(255,255,255,0.2); color: white; border: 1px solid white; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">⬅️ Retour à l'accueil</button>
        </nav>

        <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 30px;">
                <h2 style="color: #2c3e50; margin-top: 0; border-bottom: 2px solid #9b59b6; padding-bottom: 10px;">📦 Inventaire du Matériel Technique</h2>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; text-align: left;">
                    <thead>
                        <tr style="background-color: #f8f9fa; border-bottom: 2px solid #ddd;">
                            <th style="padding: 12px; color: #333;">Code</th>
                            <th style="padding: 12px; color: #333;">Désignation Équipement</th>
                            <th style="padding: 12px; color: #333;">État</th>
                            <th style="padding: 12px; color: #333;">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px; font-weight: bold; color: #7f8c8d;">#SON-01</td>
                            <td style="padding: 12px; font-weight: 500;">Console de mixage Behringer X32</td>
                            <td style="padding: 12px;"><span style="background: #e8f8f5; color: #1abc9c; padding: 4px 10px; border-radius: 10px; font-size: 13px; font-weight: bold;">Excellent</span></td>
                            <td style="padding: 12px; color: #27ae60; font-weight: bold;">✅ Disponible</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px; font-weight: bold; color: #7f8c8d;">#SON-02</td>
                            <td style="padding: 12px; font-weight: 500;">Enceintes amplifiées QSC K12.2 (Paire)</td>
                            <td style="padding: 12px;"><span style="background: #e8f8f5; color: #1abc9c; padding: 4px 10px; border-radius: 10px; font-size: 13px; font-weight: bold;">Excellent</span></td>
                            <td style="padding: 12px; color: #27ae60; font-weight: bold;">✅ Disponible</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px; font-weight: bold; color: #7f8c8d;">#SON-03</td>
                            <td style="padding: 12px; font-weight: 500;">Kit Microphones sans fil Shure SM58 (x2)</td>
                            <td style="padding: 12px;"><span style="background: #fef9e7; color: #f39c12; padding: 4px 10px; border-radius: 10px; font-size: 13px; font-weight: bold;">Bon état</span></td>
                            <td style="padding: 12px; color: #e67e22; font-weight: bold;">🔄 En maintenance</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
}

// Lancement initial de l'application sur l'accueil
afficherAccueil();
