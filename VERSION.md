# Système de Versioning JAB CONNEXION

## Version actuelle: v1.0.2

## Comment déployer une nouvelle version

Le site utilise un système de versioning sémantique (SemVer) avec auto-incrémentation.

### Script de déploiement

```bash
./deploy.sh [patch|minor|major] "message de commit"
```

### Types de versions

- **patch** (1.0.X) : Corrections de bugs, petites modifications
  ```bash
  ./deploy.sh patch "Correction du bug XYZ"
  ```

- **minor** (1.X.0) : Nouvelles fonctionnalités compatibles
  ```bash
  ./deploy.sh minor "Ajout de la page événements"
  ```

- **major** (X.0.0) : Changements majeurs non rétrocompatibles
  ```bash
  ./deploy.sh major "Refonte complète du design"
  ```

### Ce que fait le script

1. ✅ Incrémente automatiquement la version dans `package.json`
2. ✅ Met à jour le fichier `frontend/src/version.js`
3. ✅ Crée un commit avec le message fourni
4. ✅ Pousse les changements sur GitHub
5. ✅ Affiche la nouvelle version déployée

### Affichage de la version

La version est affichée automatiquement dans le footer du site :
```
© 2026 Jab Connexion. Tous droits réservés. - v1.0.2
```

## Historique des versions

### v1.0.2 (2026-01-04)
- Affichage de la version dans le footer
- Disclaimer avec "encore" entre guillemets

### v1.0.1 (2026-01-04)
- Création du système de versioning automatique
- Script de déploiement avec auto-incrémentation

### v1.0.0 (2026-01-04)
- Optimisation des images (98.6% de réduction)
- Système d'administration complet
- Gestion des cours et messages de contact
- Design pastel avec 7 catégories de cours
