import { Link, useLocation } from 'react-router-dom';

export default function Head() {
  const location = useLocation();

  // Para destacar o link ativo com um estilo diferente
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
        {/* Título centralizado */}
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2">
          Países do Mundo
        </h1>

        {/* Navegação centralizada abaixo do título */}
        <nav className="flex space-x-8 text-gray-700 font-semibold">
  <Link
    to="/"
            className={`hover:text-blue-600 transition ${
              isActive('/') ? 'text-blue-700 underline' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/Favoritos"
            className={`hover:text-blue-600 transition ${
              isActive('/favoritos') ? 'text-blue-700 underline' : ''
            }`}
          >
            Favoritos ❤️
          </Link>
        </nav>
      </div>
    </header>
  );
}
