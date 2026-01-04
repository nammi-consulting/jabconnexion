import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getApiUrl } from '../../config/api';

export default function Dashboard() {
  const [classes, setClasses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    day_of_week: 1,
    start_time: '',
    end_time: '',
    capacity: 20,
    instructor: '',
    category: ''
  });

  const { token, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const categories = ['MMA Enfants', 'MMA Adultes', 'BOXE THAI', 'MMA PRO'];

  // Couleurs par catégorie
  const getCategoryColor = (category) => {
    const colors = {
      'MMA Enfants': 'bg-yellow-500',
      'MMA Adultes': 'bg-blue-500',
      'BOXE THAI': 'bg-orange-500',
      'MMA PRO': 'bg-red-500'
    };
    return colors[category] || 'bg-primary';
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    } else {
      fetchClasses();
    }
  }, [isAuthenticated, navigate]);

  const fetchClasses = async () => {
    try {
      const response = await fetch(getApiUrl('/api/classes'));
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Erreur lors du chargement des cours:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingClass
      ? getApiUrl(`/api/classes/${editingClass.id}`)
      : getApiUrl('/api/classes');

    const method = editingClass ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await fetchClasses();
        resetForm();
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) return;

    try {
      const response = await fetch(getApiUrl(`/api/classes/${id}`), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchClasses();
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleEdit = (cls) => {
    setEditingClass(cls);
    setFormData({
      title: cls.title,
      description: cls.description || '',
      day_of_week: cls.day_of_week,
      start_time: cls.start_time,
      end_time: cls.end_time,
      capacity: cls.capacity,
      instructor: cls.instructor || '',
      category: cls.category || ''
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      day_of_week: 1,
      start_time: '',
      end_time: '',
      capacity: 20,
      instructor: '',
      category: ''
    });
    setEditingClass(null);
    setShowForm(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
              <p className="text-gray-600 mt-2">Gérez les cours de votre salle</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-mist-950 hover:bg-mist-800 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Bouton Ajouter un cours */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-mist-950 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            {showForm ? 'Annuler' : '+ Ajouter un cours'}
          </button>
        </div>

        {/* Formulaire */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingClass ? 'Modifier le cours' : 'Nouveau cours'}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du cours *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jour *
                </label>
                <select
                  required
                  value={formData.day_of_week}
                  onChange={(e) => setFormData({ ...formData, day_of_week: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                >
                  {daysOfWeek.map((day, index) => (
                    <option key={index} value={index}>{day}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructeur
                </label>
                <input
                  type="text"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure de début *
                </label>
                <input
                  type="time"
                  required
                  value={formData.start_time}
                  onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure de fin *
                </label>
                <input
                  type="time"
                  required
                  value={formData.end_time}
                  onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacité *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="bg-primary hover:bg-mist-950 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  {editingClass ? 'Modifier' : 'Ajouter'}
                </button>
                {editingClass && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition"
                  >
                    Annuler
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Liste des cours */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cours existants</h2>
          {classes.length === 0 ? (
            <p className="text-gray-600">Aucun cours pour le moment. Ajoutez-en un !</p>
          ) : (
            <div className="space-y-4">
              {classes
                .sort((a, b) => a.day_of_week - b.day_of_week || a.start_time.localeCompare(b.start_time))
                .map((cls) => (
                  <div key={cls.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{cls.title}</h3>
                          {cls.category && (
                            <span className={`${getCategoryColor(cls.category)} text-white text-xs px-2 py-1 rounded`}>
                              {cls.category}
                            </span>
                          )}
                        </div>
                        {cls.description && (
                          <p className="text-gray-600 text-sm mb-2">{cls.description}</p>
                        )}
                        <div className="flex gap-4 text-sm text-gray-700">
                          <span className="font-semibold">{daysOfWeek[cls.day_of_week]}</span>
                          <span>{cls.start_time} - {cls.end_time}</span>
                          {cls.instructor && <span>Coach: {cls.instructor}</span>}
                          <span>Capacité: {cls.capacity}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(cls)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(cls.id)}
                          className="bg-mist-950 hover:bg-mist-800 text-white px-4 py-2 rounded transition"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
