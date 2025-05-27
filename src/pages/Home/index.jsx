import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../../Components/Header';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-0">
      <Head />
      <div className="container mx-auto px-4 pt-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {countries.map((country) => (
            <a
              key={country.cca3}
              className="block rounded-lg p-4 shadow-xs shadow-indigo-100 bg-white hover:shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer w-full max-w-xs"
              onClick={() => navigate(`/country/${country.cca3}`)}
              tabIndex={0}
            >
              <img
                src={country.flags.svg}
                alt={`Bandeira de ${country.name.common}`}
                className="h-32 w-full rounded-md object-contain bg-gray-50"
                style={{ maxHeight: '120px', minHeight: '80px' }}
              />
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {country.name.common}
                </h2>
                <p className="text-sm text-indigo-600 font-semibold">
                  {country.region}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}