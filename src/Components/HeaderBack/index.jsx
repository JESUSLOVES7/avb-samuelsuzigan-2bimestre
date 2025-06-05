// src/Components/HeaderBack/index.jsx
import { Link } from 'react-router-dom';

export default function HeaderBack() {
  return (
    <header className="relative h-48 bg-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529516542054-0527f1dc9f7c?auto=format&fit=crop&w=1280&q=80')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-between px-8">
        <h1 className="text-white text-2xl md:text-3xl font-bold">🌎 Detalhes do País</h1>
        <Link
          to="/"
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          ⬅ Voltar para Home
        </Link>
      </div>
    </header>
  );
}
