export default function Gym() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/Bandeaux/bandeau-gants.png)'}}>
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6 leading-none">
              Une salle full équipée pour se dépasser
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Une salle premium de 150m², conçue comme un lieu de sport, de lien et de rayonnement pour Asnières.
            </p>
          </div>
        </div>
      </section>

      {/* Espace Sol et Combat */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-6">
                Espace Sol et Combat
              </h2>
              <p className="text-lg text-mist-600 leading-relaxed">
                Zone polyvalente pour stretching, yoga mais surtout adaptée aux sports de combat sol et pieds-poings. Équipé de zone de frappe.
              </p>
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 4.png"
                alt="Espace Sol et Combat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Espace Ring */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 card p-0 overflow-hidden">
              <img
                src="/Salle/salle 5.png"
                alt="Espace Ring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-6">
                Espace Ring
              </h2>
              <p className="text-lg text-mist-600 leading-relaxed">
                L'espace parfait pour appréhender un ring en préparation de compétition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espace Fitness */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-6">
                Espace Fitness
              </h2>
              <p className="text-lg text-mist-600 leading-relaxed">
                Zone machines pour renforcement musculaire et cardio.
              </p>
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 3.png"
                alt="Espace Fitness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Espace Vestiaire */}
      <section className="section bg-mist-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 card p-0 overflow-hidden">
              <img
                src="/Salle/salle 6.png"
                alt="Espace Vestiaire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-6">
                Espace Vestiaire
              </h2>
              <p className="text-lg text-mist-600 leading-relaxed">
                Les nécessaires pour vous changer et vous préparer à la séance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espace Accueil */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-mist-950 mb-6 text-center">
              Espace Accueil
            </h2>
            <p className="text-lg text-mist-600 leading-relaxed text-center max-w-3xl mx-auto">
              Une zone d'accueil pour vous accueillir dans notre salle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 7.png"
                alt="Espace Accueil - Vue 1"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 1.png"
                alt="Espace Accueil - Vue 2"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="card p-0 overflow-hidden">
              <img
                src="/Salle/salle 2.png"
                alt="Espace Accueil - Vue 3"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Prêt à découvrir notre salle ?
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Venez visiter nos installations et profiter d'une séance d'essai gratuite
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Réserver une visite
              </a>
              <a href="/prix" className="btn-secondary">
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
