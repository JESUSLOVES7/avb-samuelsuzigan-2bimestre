import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderBack from '../../Components/HeaderBack';
import FlagImage from '../../Components/FlagImage';
import CountryInfo from '../../Components/CountryInfo';

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
    <div className="min-h-screen bg-gray-100">
      <HeaderBack />
      <main className="p-8">
        <FlagImage
          src={country.flags.svg}
          alt={`Bandeira de ${country.name.common}`}
        />
        <CountryInfo country={country} />
      </main>
    </div>
  );
}
