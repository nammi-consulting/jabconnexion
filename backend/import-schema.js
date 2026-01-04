import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Utiliser les variables d'environnement
const DATABASE_URL = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

async function importSchema() {
  let connection;

  try {
    console.log('🔄 Connexion à MySQL Railway...');

    connection = await mysql.createConnection(DATABASE_URL);
    console.log('✅ Connecté à MySQL!\n');

    // Lire le fichier schema.sql
    const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf-8');

    // Nettoyer et séparer les requêtes SQL
    const cleanSchema = schema
      .split('\n')
      .filter(line => !line.trim().startsWith('--') && line.trim().length > 0)
      .join('\n');

    const queries = cleanSchema
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0);

    console.log(`📝 Exécution de ${queries.length} requêtes SQL...\n`);

    for (const query of queries) {
      console.log(`⏳ Exécution: ${query.substring(0, 60).replace(/\n/g, ' ')}...`);
      await connection.execute(query);
      console.log('✅ OK\n');
    }

    console.log('🎉 Schéma importé avec succès!');
    console.log('\n📊 Vérification des tables créées:');

    const [tables] = await connection.execute('SHOW TABLES');
    tables.forEach(table => {
      console.log(`  ✓ ${Object.values(table)[0]}`);
    });

    console.log('\n👤 Utilisateur admin créé:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('   ⚠️  CHANGEZ CE MOT DE PASSE APRÈS VOTRE PREMIER LOGIN!\n');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Connexion fermée');
    }
  }
}

importSchema();
