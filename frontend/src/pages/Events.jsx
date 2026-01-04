export default function Events() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-mist-50">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-semibold tracking-tight text-mist-950 mb-6 leading-none">
              Événements & Stages
            </h1>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto">
              Découvrez nos événements sportifs, culturels et éducatifs
            </p>
          </div>
        </div>
      </section>

      {/* Événementiel - Style Oatmeal */}
      <section className="section bg-white border-y border-mist-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Événements Sportifs */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-primary mb-6 uppercase">Événements Sportifs</h3>
              <div className="space-y-4 text-mist-600">
                <div className="border-b pb-4" style={{borderColor: '#e7e5e4'}}>
                  <p className="font-semibold text-mist-950 mb-2">Gala interne de MMA</p>
                  <p className="text-sm">Mise en avant des élèves dans des <em>démonstrations</em> ou <em>combats amicaux</em>.</p>
                  <p className="text-sm italic text-mist-500 mt-1">Séances "Boxe Mat"</p>
                </div>
                <div className="border-b pb-4" style={{borderColor: '#e7e5e4'}}>
                  <p className="font-semibold text-mist-950 mb-2">Entraînements collectifs ouverts à tous niveaux</p>
                  <p className="text-sm">Voyages sportifs et stages multidisciplinaires (MMA + préparation physique + bien-être).</p>
                </div>
                <div className="border-b pb-4" style={{borderColor: '#e7e5e4'}}>
                  <p className="font-semibold text-mist-950 mb-2">Stages avec champions invités</p>
                  <p className="text-sm">Masterclass animées par des athlètes de renom.</p>
                </div>
                <div>
                  <p className="font-semibold text-mist-950 mb-2">Préparation physique collective</p>
                  <p className="text-sm">Bootcamps intensifs pour tester ses limites.</p>
                </div>
              </div>
            </div>

            {/* Événements 360 */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-primary mb-6 uppercase">Événements 360</h3>
              <div className="space-y-4 text-mist-600">
                <div className="border-b pb-4" style={{borderColor: '#e7e5e4'}}>
                  <p className="font-semibold text-mist-950 mb-2">Soirées UFC / Viewing Party</p>
                  <p className="text-sm">Retransmission de grands événements sportifs avec écran géant.</p>
                </div>
                <div className="border-b pb-4" style={{borderColor: '#e7e5e4'}}>
                  <p className="font-semibold text-mist-950 mb-2">Collectes solidaires / Défis sportifs caritatifs</p>
                  <p className="text-sm">Associées à une initiation sportive.</p>
                </div>
                <div>
                  <p className="font-semibold text-mist-950 mb-2">Fête annuelle de la salle</p>
                  <p className="text-sm">Avec démonstrations, remise de ceintures...</p>
                </div>
              </div>
            </div>

            {/* Événements Éducatifs */}
            <div className="card md:col-span-2">
              <h3 className="text-2xl font-semibold text-primary mb-6 uppercase">Événements Éducatifs & Pédagogiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="font-semibold text-mist-950 mb-2">Ateliers d'initiation</p>
                  <p className="text-sm text-mist-600">MMA, boxe, jiu-jitsu, self-défense.</p>
                </div>
                <div>
                  <p className="font-semibold text-mist-950 mb-2">Conférences</p>
                  <p className="text-sm text-mist-600">Sur la nutrition, la récupération, la préparation mentale.</p>
                </div>
                <div>
                  <p className="font-semibold text-mist-950 mb-2">Stages jeunes & vacances</p>
                  <p className="text-sm text-mist-600">Programmes adaptés aux enfants et ados.</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-mist-950 mb-2">Séances découvertes</p>
                <p className="text-sm text-mist-600">Pour entreprises (team building).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-mist-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-mist-950 mb-6">
              Intéressé par nos événements ?
            </h2>
            <p className="text-lg text-mist-600 mb-10">
              Contactez-nous pour plus d'informations sur nos prochains événements et stages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary-orange">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
