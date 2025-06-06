import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HeaderBack() {
  const navigate = useNavigate();

  return (
    <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/70 to-transparent">
      <button
        onClick={() => navigate('/')}
        className="text-white hover:text-gray-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} /> Voltar
      </button>
    </header>
  );
}
