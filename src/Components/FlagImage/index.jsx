export default function FlagImage({ image, countryName }) {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
    >
      <div className="text-center px-4">
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
