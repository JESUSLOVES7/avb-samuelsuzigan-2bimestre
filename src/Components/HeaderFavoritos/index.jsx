import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HeaderFavoritos() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="text-blue-700 hover:text-blue-500 flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Voltar
          </button>
          <h1 className="text-2xl font-bold text-pink-700">
            ❤️ Meus Favoritos
          </h1>
        </div>
      </div>
    </header>
  );
}
