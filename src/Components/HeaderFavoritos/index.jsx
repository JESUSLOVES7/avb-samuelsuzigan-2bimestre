import { Link, useLocation } from 'react-router-dom';

export default function HeaderFavoritos() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
        {/* Título centralizado */}
        <h1 className="text-3xl font-extrabold text-pink-700 mb-2">
          Favoritos ❤️
        </h1>

        {/* Navegação igual ao header da Home */}
        <nav className="flex space-x-8 text-gray-700 font-semibold">
          <Link
            to="/"
            className={`hover:text-pink-600 transition ${
              isActive('/') ? 'text-pink-700 underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/favoritos"
            className={`hover:text-pink-600 transition ${
              isActive('/favoritos') ? 'text-pink-700 underline' : ''
            }`}
          >
            Favoritos ❤️
          </Link>
        </nav>
      </div>
    </header>
  );
}
