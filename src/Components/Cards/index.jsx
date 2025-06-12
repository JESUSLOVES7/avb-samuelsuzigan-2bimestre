export default function CountryCard({ country, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 cursor-pointer overflow-hidden w-full max-w-xs"
      onClick={onClick}
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={country.flags.svg}
          alt={`Bandeira de ${country.name.common}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{country.name.common}</h2>
        <p className="text-sm text-gray-500">{country.region}</p>
        <p className="text-sm text-indigo-600 font-medium">
  População: {country.population ? country.population.toLocaleString() : 'Indisponível'}
</p>

      </div>
    </div>
  );
}
