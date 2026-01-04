# 🚀 Guide de Déploiement JAB CONNEXION

## Solution Recommandée : Vercel + Railway

Cette solution offre le meilleur rapport **prix/facilité** :
- **Frontend sur Vercel** : GRATUIT
- **Backend + Base de données sur Railway** : ~$5/mois

---

## 📋 Prérequis

1. Compte GitHub (gratuit)
2. Compte Vercel (gratuit) - https://vercel.com
3. Compte Railway (gratuit) - https://railway.app
4. Votre code poussé sur GitHub

---

## 🎯 Étape 1 : Pousser le code sur GitHub

```bash
# Initialiser git (si pas déjà fait)
cd /Users/jderome/cc/jabconnexion
git init
git add .
git commit -m "Initial commit - JAB CONNEXION"

# Créer un repo sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/jabconnexion.git
git branch -M main
git push -u origin main
```

---

## 🚂 Étape 2 : Déployer le Backend sur Railway

### 2.1 Créer le projet Railway

1. Allez sur https://railway.app et connectez-vous avec GitHub
2. Cliquez sur "New Project"
3. Sélectionnez "Deploy from GitHub repo"
4. Choisissez votre repo `jabconnexion`
5. Railway détectera automatiquement Node.js

### 2.2 Ajouter MySQL

1. Dans votre projet Railway, cliquez sur "+ New"
2. Sélectionnez "Database" → "Add MySQL"
3. Railway créera automatiquement une base MySQL

### 2.3 Configurer les variables d'environnement

Dans Railway, allez dans votre service backend → Variables :

```env
# Railway fournit automatiquement ces variables MySQL
MYSQL_URL=mysql://...
DB_HOST=containers-us-west-xxx.railway.app
DB_USER=root
DB_PASSWORD=xxx
DB_NAME=railway
DB_PORT=3306

# Ajoutez manuellement ces variables :
JWT_SECRET=votre_secret_jwt_super_long_et_aleatoire_123456
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://votre-site.vercel.app
```

### 2.4 Configurer le démarrage

Dans Railway, allez dans Settings :
- **Root Directory** : `backend`
- **Build Command** : `npm install`
- **Start Command** : `node server.js`

### 2.5 Importer le schéma de base de données

1. Dans Railway, cliquez sur votre base MySQL → "Connect"
2. Copiez la commande de connexion MySQL
3. Sur votre machine locale :

```bash
# Connectez-vous à la base Railway
mysql -h containers-us-west-xxx.railway.app -u root -p railway

# Puis importez votre schéma (si vous avez un fichier schema.sql)
# Ou créez les tables manuellement
```

**Créez les tables nécessaires** :

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  day_of_week INT NOT NULL,
  start_time VARCHAR(10) NOT NULL,
  end_time VARCHAR(10) NOT NULL,
  capacity INT DEFAULT 20,
  instructor VARCHAR(255),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Créer un utilisateur admin par défaut (mot de passe : admin123)
-- Hash bcrypt de "admin123"
INSERT INTO users (username, password) VALUES
('admin', '$2b$10$rKvvqYhJ5Y5Y5Y5Y5Y5Y5eBqYJ5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5');
```

### 2.6 Récupérer l'URL du backend

Une fois déployé, Railway vous donnera une URL type :
`https://jabconnexion-backend.up.railway.app`

**Copiez cette URL** pour l'étape suivante.

---

## ⚡ Étape 3 : Déployer le Frontend sur Vercel

### 3.1 Créer le projet Vercel

1. Allez sur https://vercel.com et connectez-vous avec GitHub
2. Cliquez sur "Add New" → "Project"
3. Importez votre repo GitHub `jabconnexion`

### 3.2 Configurer le projet

Dans les paramètres Vercel :

- **Framework Preset** : Vite
- **Root Directory** : `frontend`
- **Build Command** : `npm run build`
- **Output Directory** : `dist`

### 3.3 Ajouter les variables d'environnement

Dans Vercel → Settings → Environment Variables :

```env
VITE_API_URL=https://jabconnexion-backend.up.railway.app
```

⚠️ **Remplacez** `https://jabconnexion-backend.up.railway.app` par l'URL Railway de l'étape 2.6

### 3.4 Déployer

Cliquez sur "Deploy" !

Vercel construira et déploiera automatiquement votre frontend.

Vous obtiendrez une URL type : `https://jabconnexion.vercel.app`

---

## 🔄 Étape 4 : Mettre à jour le CORS

Retournez sur Railway dans les variables d'environnement du backend et mettez à jour :

```env
CORS_ORIGIN=https://jabconnexion.vercel.app
```

⚠️ **Remplacez** par votre vraie URL Vercel

---

## 🌐 Étape 5 : Connecter votre domaine Hostinger (Optionnel)

### Sur Vercel (pour le frontend) :

1. Allez dans Settings → Domains
2. Ajoutez votre domaine : `www.votre-domaine.com`
3. Vercel vous donnera les enregistrements DNS à configurer

### Sur Hostinger :

1. Allez dans votre panel Hostinger → DNS/Nameservers
2. Ajoutez un enregistrement CNAME :
   - **Type** : CNAME
   - **Name** : www
   - **Target** : cname.vercel-dns.com

3. Ajoutez un enregistrement A pour le domaine racine :
   - **Type** : A
   - **Name** : @
   - **Target** : 76.76.21.21 (IP de Vercel)

### Pour le backend (Railway) :

Railway génère automatiquement un domaine HTTPS. Si vous voulez un sous-domaine personnalisé :

1. Dans Railway → Settings → Domains
2. Ajoutez : `api.votre-domaine.com`
3. Configurez le CNAME sur Hostinger :
   - **Type** : CNAME
   - **Name** : api
   - **Target** : `votre-projet.up.railway.app`

Puis mettez à jour la variable `VITE_API_URL` sur Vercel avec le nouveau domaine.

---

## ✅ Vérification

### Testez le frontend :
Visitez `https://jabconnexion.vercel.app` (ou votre domaine)

### Testez le backend :
```bash
curl https://jabconnexion-backend.up.railway.app/api/classes
```

### Testez la connexion admin :
1. Allez sur `/admin`
2. Connectez-vous avec : `admin` / `admin123`
3. Ajoutez un cours de test

---

## 🔧 Déploiements futurs

Tout est automatisé ! À chaque `git push` :
- Vercel redéploie automatiquement le frontend
- Railway redéploie automatiquement le backend

---

## 💰 Coûts

- **Vercel** : 0€ (plan gratuit illimité)
- **Railway** : ~5€/mois (500 heures d'exécution + base MySQL)
- **Total** : ~5€/mois

---

## 🆘 Dépannage

### Le frontend ne peut pas contacter le backend

1. Vérifiez que `VITE_API_URL` est bien configuré sur Vercel
2. Vérifiez que `CORS_ORIGIN` est bien configuré sur Railway
3. Vérifiez que le backend est en ligne sur Railway

### La base de données ne fonctionne pas

1. Vérifiez que MySQL est bien créé sur Railway
2. Vérifiez les variables DB_* dans Railway
3. Connectez-vous à MySQL et vérifiez que les tables existent

### L'authentification échoue

1. Vérifiez que `JWT_SECRET` est configuré
2. Vérifiez que l'utilisateur admin existe dans la table `users`
3. Consultez les logs Railway pour voir les erreurs

---

## 📚 Ressources

- Documentation Vercel : https://vercel.com/docs
- Documentation Railway : https://docs.railway.app
- Support Railway : https://railway.app/help

---

Bon déploiement ! 🚀
