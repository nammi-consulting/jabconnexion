import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Gym from './pages/Gym';
import Events from './pages/Events';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Routes publiques avec le layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="prix" element={<Pricing />} />
            <Route path="calendrier" element={<Calendar />} />
            <Route path="contact" element={<Contact />} />
            <Route path="boutique" element={<Shop />} />
            <Route path="notre-salle" element={<Gym />} />
            <Route path="evenements" element={<Events />} />
          </Route>

          {/* Routes admin sans le layout public */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
