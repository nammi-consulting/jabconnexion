import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-mist-50">
      {/* Navigation style Oatmeal avec contenu JAB CONNEXION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-mist-200">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo JAB CONNEXION */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/LOGO_JAB_BLACK.png"
                alt="Jab Connexion Logo"
                className="h-12 w-12"
              />
              <span className="text-2xl font-display font-semibold tracking-tight text-mist-950">
                Jab Connexion
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/notre-salle"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Notre salle
              </Link>
              <Link
                to="/calendrier"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Planning
              </Link>
              <Link
                to="/prix"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Tarifs
              </Link>
              <Link
                to="/evenements"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Événements
              </Link>
              <Link
                to="/boutique"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Boutique
              </Link>
              <Link
                to="/admin"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Administration
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/contact"
                className="text-sm font-medium text-mist-700 hover:text-mist-950 transition-colors"
              >
                Contact
              </Link>
              <Link to="/contact" className="btn-primary-orange text-sm">
                Essai Gratuit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer style Oatmeal avec contenu JAB CONNEXION */}
      <footer className="bg-white border-t border-mist-200">
        <div className="container-custom section-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <Link to="/" className="inline-flex items-center space-x-2 mb-4">
                <img
                  src="/LOGO_JAB_BLACK.png"
                  alt="Jab Connexion Logo"
                  className="h-10 w-10"
                />
                <span className="text-xl font-display font-semibold tracking-tight text-mist-950">
                  Jab Connexion
                </span>
              </Link>
              <p className="text-sm text-mist-600 leading-relaxed">
                Un lieu d'élévation et de connexion sociale au cœur d'Asnières.
              </p>
              <p className="text-xs text-mist-500 mt-2 italic">
                Discipline, dépassement de soi, respect et solidarité.
              </p>
            </div>

            {/* Offres */}
            <div>
              <h3 className="text-sm font-semibold text-mist-950 mb-4">Nos Offres</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/prix" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Abonnements
                  </Link>
                </li>
                <li>
                  <Link to="/boutique" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link to="/prix" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link to="/calendrier" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Planning des cours
                  </Link>
                </li>
              </ul>
            </div>

            {/* À propos */}
            <div>
              <h3 className="text-sm font-semibold text-mist-950 mb-4">À propos</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Notre concept
                  </Link>
                </li>
                <li>
                  <Link to="/notre-salle" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Notre salle
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    Le MMA
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-mist-950 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:jabconnection@gmail.com" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    jabconnection@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33600000000" className="text-sm text-mist-600 hover:text-mist-950 transition-colors">
                    06 xx xx xx xx
                  </a>
                </li>
                <li>
                  <p className="text-sm text-mist-600">
                    Asnières-sur-Seine
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-mist-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-mist-500">
                © 2026 Jab Connexion. Tous droits réservés.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 text-xs font-medium bg-mist-100 text-mist-700 rounded-full border border-mist-200">
                  PASSION
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-mist-100 text-mist-700 rounded-full border border-mist-200">
                  MENTAL
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-mist-100 text-mist-700 rounded-full border border-mist-200">
                  FORCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
