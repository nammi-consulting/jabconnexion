import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Classes from './Classes';
import Messages from './Messages';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('classes');
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

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
              <p className="text-gray-600 mt-2">Gérez les cours et les messages de contact</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-mist-950 hover:bg-mist-800 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Menu de navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('classes')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                activeTab === 'classes'
                  ? 'text-primary border-b-2 border-primary bg-orange-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Gestion des Cours
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${
                activeTab === 'messages'
                  ? 'text-primary border-b-2 border-primary bg-orange-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Messages de Contact
            </button>
          </div>
        </div>

        {/* Contenu selon l'onglet actif */}
        {activeTab === 'classes' && <Classes />}
        {activeTab === 'messages' && <Messages />}
      </div>
    </div>
  );
}
