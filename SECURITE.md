# 🔒 Sécurité - JAB CONNEXION

## ✅ Ce qui est DÉJÀ SÉCURISÉ

### 1. **Secrets protégés**
- ✅ `.gitignore` bloque les fichiers `.env`
- ✅ Mots de passe hashés avec bcrypt
- ✅ JWT pour l'authentification admin
- ✅ Variables d'environnement sur Railway/Vercel

### 2. **Code sécurisé**
- ✅ Pas de secrets en dur dans le code
- ✅ CORS configuré
- ✅ Validation des données utilisateur

---

## 🛡️ Recommandations après Déploiement

### Priorité 1: Changer le mot de passe admin

Immédiatement après déploiement :

1. Connectez-vous à MySQL Railway
2. Générez un nouveau hash bcrypt :
   ```bash
   node -e "console.log(require('bcryptjs').hashSync('VOTRE_NOUVEAU_MOT_DE_PASSE', 10))"
   ```
3. Mettez à jour la base de données :
   ```sql
   UPDATE users SET password = 'NOUVEAU_HASH' WHERE username = 'admin';
   ```

### Priorité 2: Ajouter Rate Limiting

Pour éviter le spam sur votre API, installez express-rate-limit :

```bash
cd backend
npm install express-rate-limit
```

Puis dans `backend/src/index.js` :

```javascript
import rateLimit from 'express-rate-limit';

// Limiter les requêtes API
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
  message: 'Trop de requêtes, réessayez plus tard'
});

// Limiter les tentatives de login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // max 5 tentatives de login
  message: 'Trop de tentatives, réessayez dans 15 minutes'
});

app.use('/api/', limiter);
app.use('/api/auth/login', loginLimiter);
```

### Priorité 3: Activer HTTPS uniquement

Sur Railway, ajoutez dans `backend/src/index.js` :

```javascript
// En production, forcer HTTPS
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}
```

### Priorité 4: Configurer CORS strictement

Dans `backend/src/index.js`, remplacez :

```javascript
// Au lieu de :
app.use(cors());

// Utilisez :
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

### Priorité 5: Valider les entrées utilisateur

Dans `backend/src/routes/contact.js`, ajoutez :

```javascript
import validator from 'validator';

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message trop long' });
  }

  // ... reste du code
});
```

---

## 🔐 Bonnes Pratiques Continues

### 1. **Surveiller les logs Railway**
- Consultez régulièrement les logs pour détecter des comportements anormaux
- Railway vous alerte en cas de pic de trafic

### 2. **Activer 2FA (Authentification à 2 facteurs)**
- Sur GitHub : Settings → Password and authentication
- Sur Vercel : Settings → Security
- Sur Railway : Settings → Security

### 3. **Mettre à jour les dépendances**
```bash
# Vérifier les failles de sécurité
npm audit

# Corriger automatiquement
npm audit fix
```

### 4. **Sauvegarder la base de données**
- Railway permet l'export MySQL manuel
- Configurez des sauvegardes automatiques

### 5. **Monitorer le site**
- Utilisez UptimeRobot (gratuit) pour être alerté si le site tombe
- Configurez des alertes Railway pour usage CPU/RAM anormal

---

## 🚨 Que faire en cas de problème ?

### Si vous détectez une activité suspecte :

1. **Changez immédiatement** :
   - Mot de passe admin
   - JWT_SECRET sur Railway
   - Mot de passe base de données

2. **Vérifiez les logs** :
   ```bash
   # Sur Railway, consultez les logs temps réel
   ```

3. **Bloquez les IP malveillantes** :
   - Railway permet de bloquer des IPs spécifiques

4. **Restaurez une sauvegarde** si nécessaire

---

## 📊 Checklist de Sécurité

- [ ] Mot de passe admin changé (pas "admin123")
- [ ] 2FA activé sur GitHub, Vercel, Railway
- [ ] Rate limiting configuré
- [ ] CORS strictement configuré (pas `*`)
- [ ] HTTPS forcé en production
- [ ] Validation des entrées utilisateur
- [ ] Logs surveillés régulièrement
- [ ] Sauvegardes base de données configurées
- [ ] Dépendances à jour (`npm audit`)

---

## 🔗 Ressources

- OWASP Top 10 : https://owasp.org/www-project-top-ten/
- Railway Security : https://docs.railway.app/reference/security
- Vercel Security : https://vercel.com/docs/security

---

**Dernière mise à jour** : 2025-01-04
