import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HeaderBack from '../../Components/HeaderBack';
import FlagImage from '../../Components/FlagImage';
import CountryInfo from '../../Components/CountryInfo';

export default function Country() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]));
  }, [code]);

  useEffect(() => {
    if (country) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorite(favorites.includes(country.cca3));
    }
  }, [country]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav !== country.cca3);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(country.cca3);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (!country) {
    return <p className="text-center mt-20 text-lg text-gray-600">Carregando...</p>;
  }

  return (
    // Certifique-se que o contêiner principal ocupa toda a largura disponível
    <div className="min-h-screen bg-gray-50 flex flex-col w-full"> {/* Adicionado w-full aqui */}
      <HeaderBack />
      {/* Este div deve garantir que o FlagImage receba a largura total */}
      <div className="relative flex-grow w-full"> {/* Adicionado w-full aqui também */}
        <FlagImage image={country.flags.svg} countryName={country.name.common} />

        {/* Botão de Favorito */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 text-3xl ${isFavorite ? 'text-red-500' : 'text-white'
          } transition-transform hover:scale-110`}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <CountryInfo country={country} />
    </div>
  );
}