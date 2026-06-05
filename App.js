document.body.innerHTML = `
<div style="font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f6f9; margin: 0; min-height: 100vh;">
    
    <!-- BARRE DE NAVIGATION -->
    <nav style="background-color: #2c3e50; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">🚀 Monplaisir App</h1>
        <span style="background-color: #1abc9c; padding: 5px 12px; border-radius: 15px; font-size: 14px; font-weight: bold;">Tableau de bord</span>
    </nav>

    <!-- CONTENU PRINCIPAL -->
    <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
        
        <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="color: #333; margin-bottom: 10px;">Bienvenue dans votre espace de gestion</h2>
            <p style="color: #666; font-size: 16px;">Sélectionnez un pôle d'activité pour commencer à travailler.</p>
        </div>

        <!-- GRILLE DES MODULES -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            
            <!-- MODULE 1 : MEMBRES -->
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #3498db; transition: transform 0.2s;">
                <h3 style="color: #2c3e50; margin-top: 0;">👥 Gestion des Membres</h3>
                <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Suivi des effectifs, fiches d'inscription, cotisations et annuaire général.</p>
                <button onclick="alert('Module Membres en cours de construction')" style="background-color: #3498db; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
            </div>

            <!-- MODULE 2 : TERRITOIRES -->
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #1abc9c; transition: transform 0.2s;">
                <h3 style="color: #2c3e50; margin-top: 0;">🗺️ Pôle Territoires</h3>
                <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Cartographie, répartition des zones d'activité et suivi des affectations sur le terrain.</p>
                <button onclick="alert('Module Territoires en cours de construction')" style="background-color: #1abc9c; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
            </div>

            <!-- MODULE 3 : SONORISATION & MATÉRIEL -->
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #9b59b6; transition: transform 0.2s;">
                <h3 style="color: #2c3e50; margin-top: 0;">🔊 Sonorisation & Matériel</h3>
                <p style="color: #7f8c8d; font-size: 14px; line-height: 1.5;">Inventaire technique, planification des programmes de sonorisation et suivi du matériel disponible.</p>
                <button onclick="alert('Module Matériel en cours de construction')" style="background-color: #9b59b6; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px;">Ouvrir le pôle</button>
            </div>

        </div>

    </div>
</div>
`;
