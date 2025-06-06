export default function CountryInfo({ country }) {
  return (
    <div id="detalhes" className="max-w-3xl mx-auto py-12 px-6 text-gray-800">
      <h3 className="text-2xl font-semibold mb-6">Informações sobre {country.name.common}</h3>
      <ul className="space-y-3">
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
