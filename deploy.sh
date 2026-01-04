#!/bin/bash

# Script de déploiement avec auto-incrémentation de version
# Usage: ./deploy.sh [patch|minor|major] "message de commit"

set -e

# Vérifier les arguments
VERSION_TYPE=${1:-patch}
COMMIT_MESSAGE=${2:-"Mise à jour du site"}

# Vérifier que le type de version est valide
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
  echo "❌ Type de version invalide. Utilisez: patch, minor ou major"
  exit 1
fi

echo "🚀 Démarrage du déploiement..."
echo ""

# Se placer dans le dossier frontend
cd frontend

# Incrémenter la version dans package.json
echo "📦 Incrémentation de la version ($VERSION_TYPE)..."
npm run version:$VERSION_TYPE

# Récupérer la nouvelle version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ Nouvelle version: $NEW_VERSION"

# Mettre à jour le fichier version.js
echo "📝 Mise à jour du fichier version.js..."
echo "// This file is auto-generated during deployment" > src/version.js
echo "export const VERSION = '$NEW_VERSION';" >> src/version.js

# Retour à la racine
cd ..

# Ajouter les fichiers modifiés
echo ""
echo "📂 Ajout des fichiers au commit..."
git add frontend/package.json frontend/src/version.js

# Vérifier s'il y a d'autres changements
if git diff --cached --quiet; then
  echo "⚠️  Aucun changement à commiter"
else
  # Créer le commit
  echo ""
  echo "💾 Création du commit..."
  git commit -m "$(cat <<EOF
$COMMIT_MESSAGE

Version: v$NEW_VERSION

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"

  # Pousser vers GitHub
  echo ""
  echo "☁️  Push vers GitHub..."
  git push origin main

  echo ""
  echo "✅ Déploiement terminé avec succès!"
  echo "📌 Version déployée: v$NEW_VERSION"
fi
