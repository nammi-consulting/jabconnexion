import { useState, useEffect } from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import { getApiUrl } from '../config/api';

export default function Calendar() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Planning des Cours</h1>
          <p className="text-xl text-gray-600">
            Consultez les horaires de nos cours de MMA
          </p>
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
