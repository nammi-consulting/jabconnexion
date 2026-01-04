import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { login, createInitialAdmin } from './auth.js';
import classesRouter from './routes/classes.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Créer l'utilisateur admin initial
await createInitialAdmin();

// Routes
app.post('/api/auth/login', login);
app.use('/api/classes', classesRouter);
app.use('/api/contact', contactRouter);

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'JabConnexion API est en ligne' });
});

app.listen(PORT, () => {
  console.log(`\n🥊 Serveur JabConnexion démarré sur http://localhost:${PORT}`);
  console.log(`📚 API disponible sur http://localhost:${PORT}/api\n`);
});
