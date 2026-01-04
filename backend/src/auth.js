import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from './database.js';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token invalide' });
    }
    req.user = user;
    next();
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = users[0];

    if (!user) {
      return res.status(401).json({ error: 'Identifiants incorrects' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Identifiants incorrects' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Fonction createInitialAdmin supprimée pour des raisons de sécurité
// L'utilisateur admin doit être créé manuellement via le script d'import du schéma
// et le mot de passe doit être changé avec change-admin-password.js
