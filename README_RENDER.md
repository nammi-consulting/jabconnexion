# 🚀 Déploiement Backend sur Render.com

## Solution : Render (Backend) + Railway (MySQL) + Vercel (Frontend)

- **Backend sur Render** : GRATUIT
- **MySQL sur Railway** : ~$5/mois
- **Frontend sur Vercel** : GRATUIT

---

## Étape 1 : Créer un compte Render

1. Allez sur https://render.com
2. Cliquez sur "Get Started"
3. Connectez-vous avec GitHub

---

## Étape 2 : Créer un nouveau Web Service

1. Dans le dashboard Render, cliquez sur **"New +"** → **"Web Service"**
2. Connectez votre repository GitHub `jabconnexion`
3. Render détectera automatiquement le fichier `render.yaml`

### Configuration manuelle (si render.yaml n'est pas détecté) :

- **Name** : `jabconnexion-backend`
- **Region** : Frankfurt (Europe) ou Oregon (US)
- **Branch** : `main`
- **Root Directory** : `backend`
- **Runtime** : Node
- **Build Command** : `pnpm install`
- **Start Command** : `node src/index.js`

---

## Étape 3 : Configurer les variables d'environnement

Dans Render → votre service → **Environment** :

```env
NODE_ENV=production
PORT=10000

# JWT Secret (le même que vous avez généré)
JWT_SECRET=0332e53ee77377b1ceceec518bbe0d4849eadb754347ec2095b16deb645ffb7256c6e84523ac68a96298ad27fdc148f032680715128a39c63c8bd3b3c73928ae

# MySQL Railway (vos credentials)
DB_HOST=yamanote.proxy.rlwy.net
DB_PORT=54726
DB_USER=root
DB_PASSWORD=FxwPhsCEiuVCQOWcvIBiXWZaMdhlFhWC
DB_NAME=railway

# CORS - URL de votre frontend Vercel (à mettre à jour après déploiement Vercel)
CORS_ORIGIN=https://votre-site.vercel.app
```

⚠️ **Important** : Remplacez les valeurs par vos propres credentials

---

## Étape 4 : Déployer

1. Cliquez sur **"Create Web Service"**
2. Render va :
   - Cloner votre repo
   - Installer les dépendances avec `pnpm install`
   - Démarrer le serveur avec `node src/index.js`
   - Vous donner une URL type : `https://jabconnexion-backend.onrender.com`

---

## Étape 5 : Vérifier le déploiement

Une fois déployé, testez votre API :

```bash
curl https://jabconnexion-backend.onrender.com/api/health
```

Devrait retourner :
```json
{"status":"ok","message":"JabConnexion API est en ligne"}
```

---

## Étape 6 : Configurer CORS

1. Récupérez l'URL Render de votre backend
2. Mettez à jour la variable `CORS_ORIGIN` sur Render avec l'URL de votre futur site Vercel

---

## ⚠️ Limitations du Plan Gratuit Render

- Le service se met en **veille après 15 minutes d'inactivité**
- Au réveil, il faut **~30 secondes** pour redémarrer
- **750 heures/mois** d'exécution (suffisant pour un site peu fréquenté)

### Solution pour éviter la mise en veille :

Utilisez un service de ping gratuit comme **UptimeRobot** :
- https://uptimerobot.com
- Configurez un ping toutes les 5 minutes vers votre URL Render
- Votre service restera actif

---

## 🔄 Déploiements Automatiques

À chaque `git push` sur la branche `main`, Render redéploie automatiquement !

---

## 🆘 Dépannage

### Le service ne démarre pas

1. Vérifiez les logs dans Render → Logs
2. Vérifiez que toutes les variables d'environnement sont configurées
3. Vérifiez que la connexion MySQL fonctionne

### Erreur de connexion MySQL

1. Vérifiez les credentials Railway (DB_HOST, DB_USER, etc.)
2. Vérifiez que Railway MySQL est actif
3. Testez la connexion depuis votre machine locale

### CORS Errors

1. Vérifiez que `CORS_ORIGIN` est configuré sur Render
2. Vérifiez que l'URL correspond exactement à votre frontend Vercel

---

## Prochaine étape

Maintenant, déployez votre frontend sur Vercel !

URL du backend Render à utiliser : `https://jabconnexion-backend.onrender.com`
