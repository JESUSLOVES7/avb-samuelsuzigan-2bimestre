import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryCard from '../../Components/Cards';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="container mx-auto px-4 pt-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              onClick={() => navigate(`/country/${country.cca3}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
