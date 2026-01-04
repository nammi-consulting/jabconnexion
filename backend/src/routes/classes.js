import express from 'express';
import db from '../database.js';
import { authenticateToken } from '../auth.js';

const router = express.Router();

// Récupérer tous les cours (public)
router.get('/', (req, res) => {
  try {
    const classes = db.prepare('SELECT * FROM classes ORDER BY day_of_week, start_time').all();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des cours' });
  }
});

// Ajouter un cours (admin seulement)
router.post('/', authenticateToken, (req, res) => {
  const { title, description, day_of_week, start_time, end_time, capacity, instructor, category } = req.body;

  try {
    const result = db.prepare(
      'INSERT INTO classes (title, description, day_of_week, start_time, end_time, capacity, instructor, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    ).run(title, description, day_of_week, start_time, end_time, capacity, instructor, category);

    const newClass = db.prepare('SELECT * FROM classes WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du cours' });
  }
});

// Modifier un cours (admin seulement)
router.put('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, day_of_week, start_time, end_time, capacity, instructor, category } = req.body;

  try {
    db.prepare(
      'UPDATE classes SET title = ?, description = ?, day_of_week = ?, start_time = ?, end_time = ?, capacity = ?, instructor = ?, category = ? WHERE id = ?'
    ).run(title, description, day_of_week, start_time, end_time, capacity, instructor, category, id);

    const updatedClass = db.prepare('SELECT * FROM classes WHERE id = ?').get(id);
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la modification du cours' });
  }
});

// Supprimer un cours (admin seulement)
router.delete('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  try {
    db.prepare('DELETE FROM classes WHERE id = ?').run(id);
    res.json({ message: 'Cours supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du cours' });
  }
});

export default router;
