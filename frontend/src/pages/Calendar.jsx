import { useState, useEffect } from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import { getApiUrl } from '../config/api';

export default function Calendar() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { name: 'Coaching privé', color: '#AFC4D6' },
    { name: 'MMA Enfants', color: '#FFF1B8' },
    { name: 'MMA Adultes', color: '#C9E4D6' },
    { name: 'BOXE THAI', color: '#FFD6A5' },
    { name: 'MMA PRO', color: '#E6A4A4' },
    { name: 'Grappling', color: '#D8CFF0' },
    { name: 'Lady boxing', color: '#F4C2D7' }
  ];

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch(getApiUrl('/api/classes'));
      if (!response.ok) throw new Error('Erreur lors du chargement des cours');
      const data = await response.json();
      setClasses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Chargement du planning...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-mist-950">
          Erreur: {error}. Assurez-vous que le serveur backend est démarré.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xl text-gray-600 mb-2">
            Consultez les horaires de nos cours
          </p>
        </div>

        {/* Légende des catégories */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-semibold text-gray-700 mr-2">Nos cours :</span>
            {categories.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: category.color }}
                ></div>
                <span className="text-sm text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {classes.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-xl text-gray-600">
              Aucun cours programmé pour le moment. Revenez bientôt !
            </p>
          </div>
        ) : (
          <WeeklyCalendar classes={classes} />
        )}
      </div>
    </div>
  );
}
