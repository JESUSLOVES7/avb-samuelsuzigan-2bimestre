import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favoritos from '../pages/Favoritos';
import Home from '../pages/Home';
import Country from '../pages/Country';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}
