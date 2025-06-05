export default function CountryInfo({ country }) {
  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">{country.name.common}</h1>

      <ul className="space-y-2 text-gray-700">
        <li><strong>Capital:</strong> {country.capital?.[0]}</li>
        <li><strong>Continente:</strong> {country.continents?.[0]}</li>
        <li><strong>População:</strong> {country.population.toLocaleString()}</li>
        <li><strong>Área:</strong> {country.area.toLocaleString()} km²</li>
        <li><strong>Idiomas:</strong> {Object.values(country.languages || {}).join(', ')}</li>
        <li><strong>Moeda:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</li>
      </ul>
    </div>
  );
}
