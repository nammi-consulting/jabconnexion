import express from 'express';
import pool from '../database.js';
import { authenticateToken } from '../auth.js';

const router = express.Router();

// Envoyer un message de contact (public)
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis' });
  }

  try {
    await pool.query(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, message]
    );

    res.status(201).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
});

// Récupérer tous les messages (admin seulement)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [messages] = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
});

export default router;
