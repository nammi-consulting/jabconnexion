import express from 'express';
import db from '../database.js';
import { authenticateToken } from '../auth.js';

const router = express.Router();

// Envoyer un message de contact (public)
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis' });
  }

  try {
    db.prepare(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)'
    ).run(name, email, phone || null, message);

    res.status(201).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
});

// Récupérer tous les messages (admin seulement)
router.get('/', authenticateToken, (req, res) => {
  try {
    const messages = db.prepare('SELECT * FROM contact_messages ORDER BY created_at DESC').all();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

export default router;
