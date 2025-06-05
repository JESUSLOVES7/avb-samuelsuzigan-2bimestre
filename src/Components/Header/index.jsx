export default function Head() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nome do Site */}
        <h1 className="text-2xl font-bold text-blue-700">
          🌍 Países do Mundo
        </h1>

        {/* Links de Navegação */}
        <nav className="space-x-6 text-gray-700 font-medium hidden sm:flex">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Descobrir</a>
          <a href="#" className="hover:text-blue-600 transition">Sobre</a>
          <a href="#" className="hover:text-blue-600 transition">Contato</a>
        </nav>

        {/* Ícone de perfil */}
        <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shadow-inner hover:bg-blue-200 cursor-pointer transition">
          U
        </div>
      </div>
    </header>
  );
}
