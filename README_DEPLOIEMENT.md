# 🥊 JAB CONNEXION - Déploiement Production

## 📦 Ce qui a été préparé pour vous

✅ **Frontend** : Configuré pour utiliser des variables d'environnement
✅ **Backend** : Prêt pour Railway/Render
✅ **Base de données** : Scripts SQL disponibles
✅ **Configuration** : Fichiers Vercel et Railway prêts

---

## 🎯 Meilleure Solution : Vercel + Railway

### Pourquoi cette solution ?

| Critère | Note | Détails |
|---------|------|---------|
| **Prix** | ⭐⭐⭐⭐⭐ | ~5€/mois seulement |
| **Facilité** | ⭐⭐⭐⭐⭐ | Déploiement en quelques clics |
| **Performance** | ⭐⭐⭐⭐⭐ | CDN mondial + SSL automatique |
| **Fiabilité** | ⭐⭐⭐⭐⭐ | 99.9% uptime |

---

## 🚀 Déploiement en 3 étapes

### 1️⃣ Pousser sur GitHub (5 min)

```bash
git init
git add .
git commit -m "JAB CONNEXION - Version production"
git remote add origin https://github.com/VOTRE-USERNAME/jabconnexion.git
git push -u origin main
```

### 2️⃣ Déployer Backend sur Railway (10 min)

1. **Créer compte** : https://railway.app (connexion GitHub)
2. **New Project** → Deploy from GitHub → Choisir `jabconnexion`
3. **Ajouter MySQL** : New → Database → MySQL
4. **Variables** :
   ```
   JWT_SECRET=votre_secret_super_long_123456789
   PORT=3000
   NODE_ENV=production
   CORS_ORIGIN=https://votre-site.vercel.app (à modifier après étape 3)
   ```
5. **Settings** :
   - Root Directory: `backend`
   - Start Command: `node server.js`

6. **Noter l'URL** : `https://xxx.up.railway.app`

### 3️⃣ Déployer Frontend sur Vercel (5 min)

1. **Créer compte** : https://vercel.com (connexion GitHub)
2. **Import Project** → Choisir `jabconnexion`
3. **Configuration** :
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Variable d'environnement** :
   ```
   VITE_API_URL=https://xxx.up.railway.app (URL Railway)
   ```
5. **Deploy** !

---

## ✅ Checklist Finale

- [ ] Backend déployé sur Railway
- [ ] Base MySQL créée sur Railway
- [ ] Variables d'environnement configurées (Railway + Vercel)
- [ ] Frontend déployé sur Vercel
- [ ] CORS_ORIGIN mis à jour avec l'URL Vercel
- [ ] Test : site accessible et formulaire contact fonctionne
- [ ] Test : connexion admin fonctionne

---

## 🌐 Connecter Votre Domaine Hostinger

### Sur Vercel :
1. Settings → Domains → Ajouter `www.votre-domaine.com`
2. Copier les instructions DNS

### Sur Hostinger :
1. Panel → DNS
2. Ajouter CNAME :
   - Name: `www`
   - Target: `cname.vercel-dns.com`

---

## 💰 Coûts Mensuels

```
Vercel (Frontend)    : 0€
Railway (Backend+DB) : ~5€
Domain Hostinger     : ~1€
-------------------------
TOTAL                : ~6€/mois
```

---

## 🆘 Besoin d'Aide ?

Consultez le guide détaillé : [`GUIDE_DEPLOIEMENT.md`](./GUIDE_DEPLOIEMENT.md)

---

## 🔄 Mises à Jour Futures

Tout est automatique ! Pour mettre à jour votre site :

```bash
git add .
git commit -m "Mes modifications"
git push
```

➡️ Vercel et Railway redéploient automatiquement en 2-3 minutes !

---

Bon déploiement ! 🚀
