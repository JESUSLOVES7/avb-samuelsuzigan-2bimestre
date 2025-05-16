import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Bandeiras dos Países
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition"
            onClick={() => navigate(`/country/${country.cca3}`)}
          >
            <img
              src={country.flags.svg}
              alt={`Bandeira de ${country.name.common}`}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {country.name.common}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
