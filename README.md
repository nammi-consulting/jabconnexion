# JabConnexion - Site Web Salle de MMA

Site web complet pour la salle de MMA JabConnexion avec gestion de planning et backoffice administrateur.

## Fonctionnalités

### Pages Publiques
- **Accueil** : Présentation des bienfaits du MMA
- **Tarifs** : Différentes formules (Mensuel/Annuel, Adulte/Enfant)
- **Planning** : Calendrier des cours avec créneaux disponibles
- **Contact** : Formulaire de contact et informations pratiques

### Backoffice Administrateur
- Authentification sécurisée
- Gestion complète du planning (ajouter, modifier, supprimer des cours)
- Consultation des messages de contact

## Stack Technique

### Frontend
- React 19 avec Vite
- React Router pour la navigation
- TailwindCSS pour le styling
- Fetch API pour les requêtes

### Backend
- Node.js avec Express
- SQLite pour la base de données
- JWT pour l'authentification
- bcryptjs pour le hachage des mots de passe

## Installation

### Prérequis
- Node.js 18+ et pnpm installés

### Backend

```bash
cd backend
pnpm install
pnpm dev
```

Le serveur démarre sur http://localhost:3000

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Le site web est accessible sur http://localhost:5173

## Identifiants Admin

L'accès administrateur nécessite :
- **Nom d'utilisateur** : `admin`
- **Mot de passe** : Configuré lors du déploiement

⚠️ **Important** : Utilisez un mot de passe fort et unique pour l'administration !

## API Endpoints

### Publics
- `GET /api/classes` - Liste tous les cours
- `POST /api/contact` - Envoyer un message de contact

### Admin (nécessite authentification)
- `POST /api/auth/login` - Connexion administrateur
- `POST /api/classes` - Ajouter un cours
- `PUT /api/classes/:id` - Modifier un cours
- `DELETE /api/classes/:id` - Supprimer un cours
- `GET /api/contact` - Récupérer les messages de contact

## Structure du Projet

```
jabconnexion/
├── frontend/              # Application React
│   ├── src/
│   │   ├── components/   # Composants réutilisables (Layout)
│   │   ├── pages/        # Pages de l'application
│   │   ├── context/      # Contexte d'authentification
│   │   └── App.jsx       # Configuration des routes
│   └── package.json
│
├── backend/              # API Node.js
│   ├── src/
│   │   ├── routes/       # Routes API (classes, contact)
│   │   ├── auth.js       # Authentification JWT
│   │   ├── database.js   # Configuration SQLite
│   │   └── index.js      # Point d'entrée serveur
│   └── package.json
│
└── README.md
```

## Configuration

### Backend (.env)
Créez un fichier `.env` dans le dossier `backend` :
```
PORT=3000
JWT_SECRET=votre_secret_jwt_secure
NODE_ENV=development
```

## Déploiement

### Backend
- Changez `JWT_SECRET` dans le fichier `.env`
- Configurez une base de données PostgreSQL ou MySQL pour la production
- Utilisez un gestionnaire de processus comme PM2

### Frontend
```bash
cd frontend
pnpm build
```
Les fichiers de production seront dans le dossier `dist/`

## Domaine

Le nom de domaine **jabconnexion.com** est déjà réservé.

## Support

Pour toute question, contactez l'équipe de développement.

---

Développé avec React, Node.js et SQLite
