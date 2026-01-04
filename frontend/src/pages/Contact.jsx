import { useState } from 'react';
import { getApiUrl } from '../config/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi. Assurez-vous que le serveur backend est démarré.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Contact Info - Style Oatmeal */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="card" style={{borderWidth: '2px', borderColor: '#e7e5e4'}}>
              <h2 className="text-3xl font-display font-semibold text-mist-950 mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mist-950 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mist-950 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-mist-950 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mist-950 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="input"
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl font-medium border-l-4 ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border-green-600'
                        : 'bg-mist-100 text-mist-950 border-mist-950'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary-orange w-full ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="card" style={{borderWidth: '2px', borderColor: '#e7e5e4'}}>
                <h2 className="text-3xl font-display font-semibold mb-6 text-mist-950">Contactez-nous</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary text-3xl mr-4">✉️</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg text-mist-950">E-mail</h3>
                      <a href="mailto:jabconnection@gmail.com" className="text-primary hover:underline text-lg">
                        jabconnection@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg text-mist-950">Téléphone</h3>
                      <a href="tel:+33600000000" className="text-primary hover:underline text-lg">
                        06 xx xx xx xx
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-3xl mr-4">👤</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg text-mist-950">Contact</h3>
                      <p className="text-lg text-mist-950">Oumama MARRAKCHI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{borderWidth: '2px', borderColor: '#e7e5e4'}}>
                <h3 className="text-2xl font-semibold text-mist-950 mb-6">Horaires d'ouverture</h3>
                <div className="space-y-4 text-mist-700">
                  <div className="flex justify-between items-center py-3 border-b" style={{borderColor: '#e7e5e4'}}>
                    <span className="font-semibold">Lundi - Vendredi</span>
                    <span className="text-primary font-semibold">6h - 22h</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold">Samedi - Dimanche</span>
                    <span className="text-primary font-semibold">8h - 20h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation - Google Maps */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-4">
              Notre localisation
            </h2>
            <p className="text-xl text-mist-600">
              205 Av. des Grésillons, 92230 Gennevilliers
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8087684537786!2d2.2947897!3d48.9267891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f7e3e3e3e3f%3A0x3e3e3e3e3e3e3e3e!2s205%20Av.%20des%20Gr%C3%A9sillons%2C%2092230%20Gennevilliers!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation JAB CONNEXION"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action - Style Oatmeal */}
      <section className="section bg-mist-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Première séance d'essai gratuite !
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Venez découvrir JAB CONNEXION et testez nos installations sans engagement
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/prix" className="btn-primary-orange">
                Découvrir nos Tarifs
              </a>
              <a href="/calendrier" className="btn-secondary">
                Voir le Planning
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
