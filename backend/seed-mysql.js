import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const courses = [
  // Coaching privé : chaque jour de 7h à 9h
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 1, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Alexandre', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 2, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Sophie', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 3, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Thomas', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 4, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Julie', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 5, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Karim', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 6, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Nadia', category: 'Coaching privé' },
  { title: 'Coaching privé', description: 'Session de coaching personnalisé', day_of_week: 0, start_time: '07:00', end_time: '09:00', capacity: 14, instructor: 'Lucas', category: 'Coaching privé' },

  // MMA Enfants : 16h à 17h le mercredi et samedi
  { title: 'MMA Enfants', description: 'Cours de MMA adapté aux enfants', day_of_week: 3, start_time: '16:00', end_time: '17:00', capacity: 14, instructor: 'Malik', category: 'MMA Enfants' },
  { title: 'MMA Enfants', description: 'Cours de MMA adapté aux enfants', day_of_week: 6, start_time: '16:00', end_time: '17:00', capacity: 14, instructor: 'Sarah', category: 'MMA Enfants' },

  // MMA Adultes : 20h à 21h30 le lundi, mardi, mercredi, jeudi et vendredi
  { title: 'MMA Adultes', description: 'Cours de MMA pour adultes tous niveaux', day_of_week: 1, start_time: '20:00', end_time: '21:30', capacity: 14, instructor: 'Rachid', category: 'MMA Adultes' },
  { title: 'MMA Adultes', description: 'Cours de MMA pour adultes tous niveaux', day_of_week: 2, start_time: '20:00', end_time: '21:30', capacity: 14, instructor: 'Kevin', category: 'MMA Adultes' },
  { title: 'MMA Adultes', description: 'Cours de MMA pour adultes tous niveaux', day_of_week: 3, start_time: '20:00', end_time: '21:30', capacity: 14, instructor: 'Anthony', category: 'MMA Adultes' },
  { title: 'MMA Adultes', description: 'Cours de MMA pour adultes tous niveaux', day_of_week: 4, start_time: '20:00', end_time: '21:30', capacity: 14, instructor: 'Morgan', category: 'MMA Adultes' },
  { title: 'MMA Adultes', description: 'Cours de MMA pour adultes tous niveaux', day_of_week: 5, start_time: '20:00', end_time: '21:30', capacity: 14, instructor: 'Dylan', category: 'MMA Adultes' },

  // BOXE THAI : mercredi de 19h à 20h
  { title: 'BOXE THAI', description: 'Entraînement de boxe thaïlandaise', day_of_week: 3, start_time: '19:00', end_time: '20:00', capacity: 14, instructor: 'Vincent', category: 'BOXE THAI' },

  // MMA PRO : de 10h à 12h le lundi, mardi, jeudi et vendredi
  { title: 'MMA PRO', description: 'Entraînement intensif pour compétiteurs', day_of_week: 1, start_time: '10:00', end_time: '12:00', capacity: 14, instructor: 'Maxime', category: 'MMA PRO' },
  { title: 'MMA PRO', description: 'Entraînement intensif pour compétiteurs', day_of_week: 2, start_time: '10:00', end_time: '12:00', capacity: 14, instructor: 'Jordan', category: 'MMA PRO' },
  { title: 'MMA PRO', description: 'Entraînement intensif pour compétiteurs', day_of_week: 4, start_time: '10:00', end_time: '12:00', capacity: 14, instructor: 'Romain', category: 'MMA PRO' },
  { title: 'MMA PRO', description: 'Entraînement intensif pour compétiteurs', day_of_week: 5, start_time: '10:00', end_time: '12:00', capacity: 14, instructor: 'Alexis', category: 'MMA PRO' },

  // Grappling : mardi et jeudi de 19h à 20h
  { title: 'Grappling', description: 'Techniques de lutte au sol et soumissions', day_of_week: 2, start_time: '19:00', end_time: '20:00', capacity: 14, instructor: 'Mehdi', category: 'Grappling' },
  { title: 'Grappling', description: 'Techniques de lutte au sol et soumissions', day_of_week: 4, start_time: '19:00', end_time: '20:00', capacity: 14, instructor: 'Youssef', category: 'Grappling' },

  // Lady boxing : lundi et vendredi de 19h à 20h
  { title: 'Lady boxing', description: 'Boxe exclusivement réservée aux femmes', day_of_week: 1, start_time: '19:00', end_time: '20:00', capacity: 14, instructor: 'Laura', category: 'Lady boxing' },
  { title: 'Lady boxing', description: 'Boxe exclusivement réservée aux femmes', day_of_week: 5, start_time: '19:00', end_time: '20:00', capacity: 14, instructor: 'Emma', category: 'Lady boxing' }
];

async function seedDatabase() {
  let connection;

  try {
    // Créer la connexion MySQL
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Connecté à MySQL');

    // Supprimer tous les cours existants
    await connection.execute('DELETE FROM classes');
    console.log('🗑️  Anciens cours supprimés');

    // Insérer les nouveaux cours
    const insertQuery = `
      INSERT INTO classes (title, description, day_of_week, start_time, end_time, capacity, instructor, category)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let count = 0;
    for (const course of courses) {
      await connection.execute(insertQuery, [
        course.title,
        course.description,
        course.day_of_week,
        course.start_time,
        course.end_time,
        course.capacity,
        course.instructor,
        course.category
      ]);
      count++;
    }

    console.log(`\n✅ ${count} cours créés avec succès !`);

    // Afficher un résumé
    const [summary] = await connection.execute(
      'SELECT category, COUNT(*) as count FROM classes GROUP BY category ORDER BY category'
    );

    console.log('\n📊 Résumé par catégorie :');
    summary.forEach(s => {
      console.log(`   ${s.category}: ${s.count} cours`);
    });

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('\n👋 Connexion fermée');
    }
  }
}

seedDatabase();
