export default function FlagImage({ image, countryName }) {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden" // Adicionado overflow-hidden
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)', // Fundo escuro fixo
      }}
    >
      {/* Imagem da Bandeira */}
      <img
        src={image}
        alt={`Bandeira de ${countryName}`}
        className="absolute inset-0 w-full h-full object-cover object-center z-0" // Imagem cobrindo o div pai
      />

      {/* Camada de escurecimento sobre a imagem */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Nova camada para escurecer */}

      {/* Conteúdo (Descubra, nome do país, Saiba mais) */}
      <div className="relative z-20 text-center px-4 py-20 flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-2xl tracking-widest mb-2">Descubra</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">{countryName}</h1>
        <a href="#detalhes">
          <button className="bg-white text-black px-6 py-3 rounded shadow hover:bg-gray-200 transition">
            Saiba mais
          </button>
        </a>
      </div>
    </div>
  );
}