SQL

-- 1. GESTION DES MEMBRES & DROITS
CREATE TABLE membres (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    groupe_nettoyage VARCHAR(50), -- Benony, Gilles, Zig, Lognos, Mambole, Astasie, Manetier
    est_modificateur BOOLEAN DEFAULT false
);

-- 2. PÔLE TERRITOIRES (Modèle Territory Helper)
CREATE TABLE territoires (
    id SERIAL PRIMARY KEY,
    numero_carte VARCHAR(10) UNIQUE NOT NULL,
    nom_quartier VARCHAR(100) NOT NULL,
    lien_territory_helper TEXT,
    a_des_escaliers BOOLEAN DEFAULT false,
    mode_distribution VARCHAR(10) DEFAULT 'auto', -- 'auto' (filtré) ou 'manuel'
    statut VARCHAR(20) DEFAULT 'disponible',
    attribue_a_id INT REFERENCES membres(id) ON DELETE SET NULL,
    date_dernier_passage TIMESTAMP
);

-- 3. PÔLE SONORISATION & ESTRADE
CREATE TABLE programme_sono (
    id SERIAL PRIMARY KEY,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    evenement_special VARCHAR(100),
    audio_video VARCHAR(100),
    accueil_zoom VARCHAR(100),
    estrade VARCHAR(100),
    perchistes TEXT
);

-- 4. PÔLE RÉUNIONS DE SEMAINE
CREATE TABLE reunions_hebdo (
    id SERIAL PRIMARY KEY,
    date_reunion DATE UNIQUE NOT NULL,
    lecture_biblique VARCHAR(100),
    president VARCHAR(100),
    priere_debut VARCHAR(100),
    priere_finale VARCHAR(100),
    etude_conducteur VARCHAR(100),
    etude_lecteur VARCHAR(100)
);

CREATE TABLE reunion_parties (
    id SERIAL PRIMARY KEY,
    reunion_id INT REFERENCES reunions_hebdo(id) ON DELETE CASCADE,
    heure_debut TIME,
    duree INT,
    section VARCHAR(50), -- 'Joyaux', 'Ministere', 'Vie Chretienne'
    titre TEXT NOT NULL,
    intervenant_principal VARCHAR(100),
    intervenant_adjoint VARCHAR(100)
);

-- 5. PÔLE DISCOURS PUBLICS (image.png)
CREATE TABLE discours_publics (
    id SERIAL PRIMARY KEY,
    date_discours DATE NOT NULL,
    theme TEXT,
    numero_discours INT,
    orateur VARCHAR(100),
    assemblee_origine VARCHAR(100),
    president VARCHAR(100),
    lecteur VARCHAR(100),
    groupe_accueil VARCHAR(50)
);

-- 6. PÔLE NETTOYAGE (image_2.png)
CREATE TABLE programme_nettoyage (
    id SERIAL PRIMARY KEY,
    groupe_attribue VARCHAR(50) NOT NULL,
    date_mardi DATE,
    date_samedi DATE,
    note_evenement VARCHAR(100) -- Pour les assemblées régionales/circonscriptions
);

-- 7. PÔLE PRÉSENTOIR PUBLIC (image_3.png)
CREATE TABLE planning_presentoir (
    id SERIAL PRIMARY KEY,
    date_creneau DATE NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL,
    participant_1 VARCHAR(100),
    participant_2 VARCHAR(100),
    lieux_autorises TEXT
);

-- 8. PÔLE SORTIES ORGANISÉES (image_6.png)
CREATE TABLE entries_sorties_conducteurs (
    id SERIAL PRIMARY KEY,
    mois_annee VARCHAR(20) NOT NULL, -- Ex: "JUIN 2026"
    numero_semaine INT NOT NULL,     -- 1 à 5
    jour_semaine VARCHAR(20) NOT NULL,
    moment VARCHAR(20) NOT NULL,       -- Matin / Après-midi
    conducteur VARCHAR(100) NOT NULL,
    est_semaine_speciale BOOLEAN DEFAULT false
