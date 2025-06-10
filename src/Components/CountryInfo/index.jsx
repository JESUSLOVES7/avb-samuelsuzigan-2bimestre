export default function CountryInfo({ country }) {
  return (
    <div id="detalhes" className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h3 className="text-3xl font-bold mb-8 text-center border-b pb-4">
        Informações sobre {country.name.common}
      </h3>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-4 text-lg text-gray-700">
        <p><strong>🏛️ Capital:</strong> {country.capital?.[0] ?? 'N/A'}</p>
        <p><strong>🌍 Continente:</strong> {country.continents?.[0]}</p>
        <p><strong>👥 População:</strong> {country.population.toLocaleString()}</p>
        <p><strong>📏 Área:</strong> {country.area.toLocaleString()} km²</p>
        <p><strong>🗣️ Idiomas:</strong> {Object.values(country.languages || {}).join(', ') || 'N/A'}</p>
        <p><strong>💰 Moeda:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ') || 'N/A'}</p>
      </div>
    </div>
  );
}
