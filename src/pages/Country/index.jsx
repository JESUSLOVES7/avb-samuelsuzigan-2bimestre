import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Country() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [code]);

  if (!country) {
    return <p className="text-center mt-20 text-lg text-gray-600">Carregando...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Voltar para a lista</Link>

      <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
        <img
          src={country.flags.svg}
          alt={`Bandeira de ${country.name.common}`}
          className="w-full h-60 object-cover rounded mb-6"
        />
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
    </div>
  );
}