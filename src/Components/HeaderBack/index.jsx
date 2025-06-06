// src/Components/HeaderBack/index.jsx
import { Link } from 'react-router-dom';

export default function HeaderBack() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-gray-800">ExploreMundo</span>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <span className="hover:text-blue-500 transition cursor-pointer">Sobre</span>
        <span className="hover:text-blue-500 transition cursor-pointer">Ajuda</span>
        <span className="hover:text-blue-500 transition cursor-pointer">Contato</span>
      </nav>

      <Link
        to="/"
        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        ⬅ Voltar para Home
      </Link>
    </header>
  );
}
