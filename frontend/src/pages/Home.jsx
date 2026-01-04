import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section - Contenu JAB, Style Oatmeal */}
      <section className="section bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/homepage-jab1.png)'}}>
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-display font-semibold tracking-tight text-white mb-8 leading-none">
              Un lieu d'élévation et de connexion sociale.
            </h1>

            {/* Subheading */}
            <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl">
              Au cœur du nouveau quartier d'Asnières, nous proposons un espace premium dédié au MMA et aux arts martiaux, pensé pour fédérer habitants, familles et générations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Essai gratuit
              </a>
              <a href="/prix" className="text-sm font-medium text-white hover:text-primary transition-colors inline-flex items-center">
                Voir les tarifs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi JAB CONNEXION */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
                Pourquoi "JAB CONNEXION" ?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card">
                <h3 className="text-xl font-semibold text-mist-950 mb-4">Le JAB</h3>
                <p className="text-mist-600 leading-relaxed mb-4">
                  En boxe, le <strong>JAB</strong> est l'outil essentiel dans l'arsenal de tout boxeur.
                </p>
                <ul className="space-y-3 text-sm text-mist-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Le JAB est un <em>coup court et stratégique</em>. C'est le geste qui attire l'attention, crée l'impact et prépare la réussite.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>Le JAB, c'est l'efficacité concentrée : <em>Aller droit au but, sans détour.</em></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span>La CONNEXION, c'est le lien avec soi-même, avec les autres, avec l'intensité du sport.</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-mist-950 mb-4">Une philosophie</h3>
                <p className="leading-relaxed mb-4 text-mist-950">
                  Dans les arts martiaux comme dans la vie, tout commence par un geste simple, précis et percutant : le <strong>JAB</strong>.
                </p>
                <p className="text-sm text-mist-950 italic">
                  C'est le coup qui ouvre la voie, qui fixe le rythme et prépare la victoire.
                </p>
                <p className="mt-4 font-semibold text-primary">
                  Jab Connexion, c'est donc bien plus qu'un nom : c'est une philosophie.
                </p>
                <p className="text-sm text-mist-300 mt-2 italic">
                  La puissance du combat alliée à la force de la communauté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre salle */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Une salle full équipée pour se dépasser
            </h2>
            <p className="text-lg text-mist-600 max-w-3xl mx-auto mb-8">
              Une salle premium de 150m², conçue comme un lieu de sport, de lien et de rayonnement pour Asnières.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 2.png"
                alt="Notre salle - Vue 1"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 3.png"
                alt="Notre salle - Vue 2"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 4.png"
                alt="Notre salle - Vue 3"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 5.png"
                alt="Notre salle - Vue 4"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>

          <div className="text-center">
            <a href="/notre-salle" className="btn-secondary">
              Découvrir notre salle
            </a>
          </div>
        </div>
      </section>

      {/* Le MMA Aujourd'hui */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Plus qu'un sport : un outil d'avenir
            </h2>
            <p className="text-lg text-mist-600 max-w-3xl mx-auto mb-8">
              Le MMA (Mixed Martial Arts) est une discipline de combat moderne et complète qui réunit le meilleur des arts martiaux et des sports de combat.
            </p>
            <h3 className="text-2xl font-display font-semibold tracking-tight text-mist-950">
              Nos cours
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Cours 1 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/MMA.png"
                alt="MMA"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">MMA</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>

            {/* Cours 2 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/MUAY-THAI.png"
                alt="Muay-thaï"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">MUAY-THAÏ</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>

            {/* Cours 3 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/GRAPPLING.png"
                alt="Grappling"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">GRAPPLING</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>

            {/* Cours 4 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/LADY BOXING.png"
                alt="Lady Boxing"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">LADY BOXING</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>

            {/* Cours 5 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/STRETCHING.png"
                alt="Stretching"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">STRETCHING</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>

            {/* Cours 6 */}
            <div className="card text-center p-0 overflow-hidden">
              <img
                src="/Cours/KIDS.png"
                alt="Kids"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="text-lg font-bold text-primary mb-1">KIDS</div>
                <p className="text-xs text-mist-600">Tous niveaux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Visé */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Une offre pour tous
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">ENFANTS</div>
              <p className="text-sm font-semibold text-mist-950 mb-1">4-7 et 8-12 ans</p>
              <p className="text-xs text-mist-600">Initiation et confiance en soi</p>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">ADOS</div>
              <p className="text-sm font-semibold text-mist-950 mb-1">13-17 ans</p>
              <p className="text-xs text-mist-600">Canalisation et discipline</p>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">ADULTES</div>
              <p className="text-sm font-semibold text-mist-950 mb-1">18+ ans</p>
              <p className="text-xs text-mist-600">MMA, Fitness & Self-Défense</p>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">SENIORS</div>
              <p className="text-sm font-semibold text-mist-950 mb-1">55+ ans</p>
              <p className="text-xs text-mist-600">Loisir, Santé & Performance</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto card" style={{borderWidth: '2px', borderColor: '#a8a29e'}}>
            <p className="text-center text-mist-600 leading-relaxed">
              Notre salle est pensée comme un <strong className="text-primary">espace inclusif</strong> où chacun a sa place :
              enfants, adultes, débutants ou confirmés. Au-delà de l'entraînement, nous organiserons régulièrement des événements pour{' '}
              <strong className="text-primary">créer du lien et fédérer la communauté.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Avec JAB CONNEXION, deviens un combattant dans le corps et l'esprit.
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Entre sur le tatami. Fais le premier pas. On s'occupe du reste.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Essai gratuit
              </a>
              <a href="/prix" className="btn-secondary">
                Découvrir nos tarifs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Title */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-display font-semibold tracking-tight text-mist-950">
                Questions fréquentes
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-8 space-y-0">
              <div className="faq-item">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-medium text-mist-950 group-hover:text-mist-600 transition-colors">
                    Faut-il avoir de l'expérience pour commencer ?
                  </span>
                  <svg
                    className={`w-5 h-5 text-mist-400 transition-transform ${openFaq === 0 ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === 0 && (
                  <div className="mt-4 text-mist-600 leading-relaxed">
                    Absolument pas ! Nos cours sont ouverts à tous les niveaux, du débutant complet au pratiquant confirmé.
                    Nos coachs adaptent les exercices en fonction de votre niveau et vous accompagnent dans votre progression
                    à votre rythme. L'essentiel est d'avoir la motivation et l'envie d'apprendre.
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-medium text-mist-950 group-hover:text-mist-600 transition-colors">
                    Le MMA est-il dangereux ?
                  </span>
                  <svg
                    className={`w-5 h-5 text-mist-400 transition-transform ${openFaq === 1 ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === 1 && (
                  <div className="mt-4 text-mist-600 leading-relaxed">
                    Le MMA pratiqué à JAB CONNEXION est un sport encadré et sécurisé. Nos coachs diplômés mettent l'accent
                    sur la technique, le contrôle et la sécurité. Les entraînements progressifs permettent d'apprendre
                    les mouvements correctement avant d'augmenter l'intensité. L'équipement de protection approprié est
                    utilisé lors des exercices de sparring, et le respect entre pratiquants est une règle fondamentale.
                  </div>
                )}
              </div>

              <div className="faq-item">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-medium text-mist-950 group-hover:text-mist-600 transition-colors">
                    Quel équipement dois-je apporter ?
                  </span>
                  <svg
                    className={`w-5 h-5 text-mist-400 transition-transform ${openFaq === 2 ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === 2 && (
                  <div className="mt-4 text-mist-600 leading-relaxed">
                    Pour débuter, une tenue de sport confortable suffit (t-shirt, short ou legging). Prévoyez également
                    une bouteille d'eau et une serviette. Pour les cours de MMA et Muay-thaï, vous aurez besoin de gants
                    de boxe, de bandes de protection et d'un protège-dents. Ces équipements sont disponibles à l'achat
                    dans notre boutique. Pour votre première séance d'essai, nous pouvons vous prêter le matériel nécessaire.
                  </div>
                )}
              </div>

              <div className="faq-item border-b-0">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-medium text-mist-950 group-hover:text-mist-600 transition-colors">
                    Y a-t-il des cours pour femmes uniquement ?
                  </span>
                  <svg
                    className={`w-5 h-5 text-mist-400 transition-transform ${openFaq === 3 ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === 3 && (
                  <div className="mt-4 text-mist-600 leading-relaxed">
                    Oui ! Nous proposons des cours de Lady Boxing spécialement conçus pour les femmes. Ces sessions créent
                    un environnement accueillant et motivant où vous pourrez vous entraîner dans une ambiance conviviale.
                    C'est l'occasion parfaite de découvrir la boxe, se défouler et renforcer sa confiance en soi. Bien sûr,
                    nos cours mixtes sont également ouverts à toutes et tous dans une atmosphère de respect et d'inclusion.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
