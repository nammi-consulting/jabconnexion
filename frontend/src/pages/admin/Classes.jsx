import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getApiUrl } from '../../config/api';

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');
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

  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const categories = ['Coaching privé', 'MMA Enfants', 'MMA Adultes', 'BOXE THAI', 'MMA PRO', 'Grappling', 'Lady boxing'];

  // Couleurs par catégorie
  const getCategoryColor = (category) => {
    const colors = {
      'Coaching privé': '#AFC4D6',
      'MMA Enfants': '#FFF1B8',
      'MMA Adultes': '#C9E4D6',
      'BOXE THAI': '#FFD6A5',
      'MMA PRO': '#E6A4A4',
      'Grappling': '#D8CFF0',
      'Lady boxing': '#F4C2D7'
    };
    return colors[category] || '#F39200';
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    } else {
      fetchClasses();
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (categoryFilter === '') {
      setFilteredClasses(classes);
    } else {
      setFilteredClasses(classes.filter(cls => cls.category === categoryFilter));
    }
  }, [categoryFilter, classes]);

  const fetchClasses = async () => {
    try {
      const response = await fetch(getApiUrl('/api/classes'));
      const data = await response.json();
      const sortedData = data.sort((a, b) =>
        a.day_of_week - b.day_of_week || a.start_time.localeCompare(b.start_time)
      );
      setClasses(sortedData);
      setFilteredClasses(sortedData);
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

  return (
    <div>
      {/* Bouton Ajouter un cours */}
      <div className="mb-6">
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

      {/* Liste des cours en tableau */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Cours existants ({filteredClasses.length})</h2>

          {/* Filtre par catégorie */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">Filtrer par catégorie:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredClasses.length === 0 ? (
          <p className="text-gray-600">Aucun cours pour le moment. Ajoutez-en un !</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Titre
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Jour
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Horaires
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Instructeur
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Capacité
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClasses.map((cls, index) => (
                  <tr key={cls.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span
                        className="text-xs px-2 py-1 rounded font-medium"
                        style={{
                          backgroundColor: getCategoryColor(cls.category),
                          color: '#1f2937'
                        }}
                      >
                        {cls.category}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {cls.title}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {daysOfWeek[cls.day_of_week]}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {cls.start_time} - {cls.end_time}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {cls.instructor || '-'}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900 text-center">
                      {cls.capacity}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(cls)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(cls.id)}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
