import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../../Components/Header';
import CountryGrid from '../../Components/CountryGrid';


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
      <Head />
      <div className="max-w-7xl mx-auto pt-8">
        <CountryGrid
          countries={countries}
          onCardClick={(code) => navigate(`/country/${code}`)}
        />
      </div>
    </div>
  );
}
