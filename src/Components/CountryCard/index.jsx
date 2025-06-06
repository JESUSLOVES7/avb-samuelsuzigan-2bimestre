export default function CountryCard({ country, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer w-full max-w-xs"
    >
      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">{country.name.common}</h2>
        <p className="text-sm text-indigo-600 font-medium text-center">{country.region}</p>
        <p className="text-xs text-gray-500 text-center mt-1">
          População: {country.population.toLocaleString('pt-BR')}
        </p>
      </div>
    </div>
  );
}
