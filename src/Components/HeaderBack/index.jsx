import { useNavigate, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HeaderCountry() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Home botão grande */}
        <Link
          to="/"
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border ${
            isActive('/')
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          Home
        </Link>

        {/* Título centralizado */}
        <h1 className="text-3xl font-extrabold text-blue-700 text-center">
          Países do Mundo
        </h1>

        {/* Favoritos botão grande */}
        <Link
          to="/favoritos"
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border ${
            isActive('/favoritos')
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          Favoritos ❤️
        </Link>
      </div>

      {/* Botão Voltar centralizado abaixo */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Voltar
        </button>
      </div>
    </header>
  );
}
