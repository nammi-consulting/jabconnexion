import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getApiUrl } from '../../config/api';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    } else {
      fetchMessages();
    }
  }, [isAuthenticated, navigate]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des messages:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) return;

    try {
      const response = await fetch(getApiUrl(`/api/contact/${id}`), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchMessages();
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages de contact</h2>

      {messages.length === 0 ? (
        <p className="text-gray-600">Aucun message pour le moment.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Téléphone
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages.map((message, index) => (
                <tr key={message.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(message.created_at)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    {message.name}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                      {message.email}
                    </a>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    {message.phone || '-'}
                  </td>
                  <td className="px-3 py-2 text-sm text-gray-900 max-w-md truncate">
                    {message.message}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Voir
                      </button>
                      <button
                        onClick={() => handleDelete(message.id)}
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

      {/* Modal pour afficher le message complet */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Message de {selectedMessage.name}</h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-sm font-semibold text-gray-700">Date:</span>
                <p className="text-gray-900">{formatDate(selectedMessage.created_at)}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Email:</span>
                <p className="text-gray-900">
                  <a href={`mailto:${selectedMessage.email}`} className="text-primary hover:underline">
                    {selectedMessage.email}
                  </a>
                </p>
              </div>
              {selectedMessage.phone && (
                <div>
                  <span className="text-sm font-semibold text-gray-700">Téléphone:</span>
                  <p className="text-gray-900">{selectedMessage.phone}</p>
                </div>
              )}
              <div>
                <span className="text-sm font-semibold text-gray-700">Message:</span>
                <p className="text-gray-900 mt-1 whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedMessage(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
              >
                Fermer
              </button>
              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
