import express from 'express';
import pool from '../database.js';
import { authenticateToken } from '../auth.js';

const router = express.Router();

// Récupérer tous les cours (public)
router.get('/', async (req, res) => {
  try {
    const [classes] = await pool.query('SELECT * FROM classes ORDER BY day_of_week, start_time');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des cours' });
  }
});

// Ajouter un cours (admin seulement)
router.post('/', authenticateToken, async (req, res) => {
  const { title, description, day_of_week, start_time, end_time, capacity, instructor, category } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO classes (title, description, day_of_week, start_time, end_time, capacity, instructor, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, description, day_of_week, start_time, end_time, capacity, instructor, category]
    );

    const [newClass] = await pool.query('SELECT * FROM classes WHERE id = ?', [result.insertId]);
    res.status(201).json(newClass[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du cours' });
  }
});

// Modifier un cours (admin seulement)
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, day_of_week, start_time, end_time, capacity, instructor, category } = req.body;

  try {
    await pool.query(
      'UPDATE classes SET title = ?, description = ?, day_of_week = ?, start_time = ?, end_time = ?, capacity = ?, instructor = ?, category = ? WHERE id = ?',
      [title, description, day_of_week, start_time, end_time, capacity, instructor, category, id]
    );

    const [updatedClass] = await pool.query('SELECT * FROM classes WHERE id = ?', [id]);
    res.json(updatedClass[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification du cours' });
  }
});

// Supprimer un cours (admin seulement)
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM classes WHERE id = ?', [id]);
    res.json({ message: 'Cours supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du cours' });
  }
});

export default router;
