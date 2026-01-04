export default function Pricing() {
  return (
    <div>
      {/* Hero Section - Style Oatmeal, Contenu JAB */}
      <section className="section bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/Bandeaux/bandeau-jab-logo2.webp)'}} loading="lazy">
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6 leading-none">
              Choisissez la formule qui vous correspond
            </h1>
          </div>
        </div>
      </section>

      {/* Abonnements - Style Oatmeal */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Formules d'abonnement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Abonnement Mensuel */}
            <div className="pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-mist-950 mb-2 uppercase">
                  Abonnement Mensuel
                </h3>
                <p className="text-sm text-mist-600 mb-4">Sans engagement</p>
                <div className="text-5xl font-bold text-primary mb-2">€89</div>
                <p className="text-mist-600">/mois</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-mist-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Accès illimité aux cours et installations pendant 1 mois, sans engagement.</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center text-white hover:opacity-90 py-3 px-6 rounded-xl font-semibold transition-all duration-200"
                style={{backgroundColor: '#6b7280'}}
              >
                Choisir cette formule
              </a>
            </div>

            {/* Abonnement Semestriel - POPULAIRE */}
            <div className="pricing-card-popular relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold uppercase shadow-lg">
                  Meilleur Rapport
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-semibold mb-2 uppercase">
                  Abonnement Semestriel
                </h3>
                <p className="text-sm mb-4 text-mist-200">Formule avantageuse</p>
                <div className="text-5xl font-bold mb-2">€499</div>
                <p className="text-mist-200">/6 mois</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-mist-200">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Formules plus avantageuses pour fidéliser les pratiquants.</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-white text-secondary hover:bg-mist-100 py-3 px-6 rounded-xl font-semibold transition-all duration-200"
              >
                Choisir cette formule
              </a>
            </div>

            {/* Abonnement Annuel */}
            <div className="pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-mist-950 mb-2 uppercase">
                  Abonnement Annuel
                </h3>
                <p className="text-sm text-mist-600 mb-4">Le meilleur rapport qualité-prix</p>
                <div className="text-5xl font-bold text-primary mb-2">€899</div>
                <p className="text-mist-600">/an</p>
                <p className="text-sm text-primary font-semibold mt-2">Économisez 2 mois !</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-mist-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Le meilleur rapport qualité-prix, accompagné de facilités de paiement.</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center text-white hover:opacity-90 py-3 px-6 rounded-xl font-semibold transition-all duration-200"
                style={{backgroundColor: '#6b7280'}}
              >
                Choisir cette formule
              </a>
            </div>
          </div>

          <div className="card" style={{borderWidth: '2px', borderColor: '#292524'}}>
            <h4 className="font-semibold text-mist-950 mb-4">Options supplémentaires</h4>
            <ul className="space-y-3 text-sm text-mist-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span><strong>Coaching privé / Personal training:</strong> Accès musculation & cardio en libre-service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span><strong>Stages intensifs</strong> (vacances, préparation compétition).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Informations Importantes - Style Oatmeal */}
      <section className="section bg-mist-50">
        <div className="max-w-4xl mx-auto">
          <div className="card" style={{borderWidth: '2px', borderColor: '#292524'}}>
            <div className="text-center mb-8">
              <span className="badge-red inline-block">Informations Importantes</span>
            </div>
            <ul className="space-y-4 text-mist-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Les formules mensuelles sont <strong>sans engagement</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span><strong>Première séance d'essai gratuite</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Certificat médical obligatoire pour la première inscription</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Réductions disponibles pour les familles (2 enfants ou plus)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Salle 100% conforme aux normes de sécurité et d'accessibilité</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Encadrement par des <strong>coachs diplômés et certifiés</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold text-xl">✓</span>
                <span>Pratique inscrite dans le cadre officiel de la <strong>FMMAF</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action - Style Oatmeal */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Prêt à Rejoindre JAB CONNEXION ?
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Contactez-nous pour réserver votre séance d'essai gratuite
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Essai Gratuit
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
