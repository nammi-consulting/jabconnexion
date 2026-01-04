import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from './database.js';

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
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

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

export const createInitialAdmin = async () => {
  try {
    const existingUser = db.prepare('SELECT * FROM users WHERE username = ?').get('admin');

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run('admin', hashedPassword);
      console.log('✓ Utilisateur admin créé (username: admin, password: admin123)');
    }
  } catch (error) {
    console.error('Erreur lors de la création de l\'admin:', error);
  }
};
