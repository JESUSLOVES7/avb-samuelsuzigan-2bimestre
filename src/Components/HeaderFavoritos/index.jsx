import { Link, useLocation } from 'react-router-dom';

export default function HeaderFavoritos({ clearFavorites }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Home botão */}
        <Link
          to="/"
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border ${
            isActive('/')
              ? 'bg-pink-600 text-white border-pink-600'
              : 'text-pink-600 border-pink-600 hover:bg-pink-50 hover:text-pink-700'
          }`}
        >
          Home
        </Link>

        {/* Título centralizado */}
        <h1 className="text-3xl font-extrabold text-pink-700 text-center">
          Favoritos ❤️
        </h1>

        {/* Favoritos botão */}
        <Link
          to="/favoritos"
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border ${
            isActive('/favoritos')
              ? 'bg-pink-600 text-white border-pink-600'
              : 'text-pink-600 border-pink-600 hover:bg-pink-50 hover:text-pink-700'
          }`}
        >
          Favoritos ❤️
        </Link>
      </div>

      {/* Botão Limpar Favoritos */}
      <div className="flex justify-center mt-4">
        <button
          onClick={clearFavorites}
          className="text-black bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2 px-4 py-2 rounded-md transition"
        >
          Limpar Favoritos 🗑️
        </button>
      </div>
    </header>
  );
}
