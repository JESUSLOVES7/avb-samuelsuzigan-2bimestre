export default function FlagImage({ image, countryName }) {
  return (
    <div
      className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
    >
      {/* Imagem da Bandeira */}
      <img
        src={image}
        alt={`Bandeira de ${countryName}`}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Camada de escurecimento mais forte */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Conteúdo (Descubra, nome do país, Saiba mais) */}
      <div className="relative z-20 text-center px-4 py-20 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl md:text-2xl tracking-widest mb-2 drop-shadow-md">
          Descubra
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {countryName}
        </h1>
        <a href="#detalhes">
          <button className="text-black bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2 px-4 py-2 rounded-md transition">
            Saiba mais
          </button>
        </a>
      </div>
    </div>
  );
}
