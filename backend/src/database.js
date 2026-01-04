import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuration MySQL depuis les variables d'environnement
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Créer un pool de connexions
const pool = mysql.createPool(dbConfig);

// Vérifier la connexion au démarrage
async function initDatabase() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connexion MySQL établie');
    connection.release();
  } catch (error) {
    console.error('❌ Erreur de connexion MySQL:', error.message);
    process.exit(1);
  }
}

initDatabase();

export default pool;
