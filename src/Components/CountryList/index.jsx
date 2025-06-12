import { useEffect, useState } from 'react';

export default function CountryList({ countries, onCardClick }) {
  const [favorites, setFavorites] = useState([]);

  // Carrega favoritos do localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Alternar favorito
  const toggleFavorite = (countryCode) => {
    let updatedFavorites = [];

    if (favorites.includes(countryCode)) {
      updatedFavorites = favorites.filter((fav) => fav !== countryCode);
    } else {
      updatedFavorites = [...favorites, countryCode];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 px-4">
      {countries.map((country) => (
        <div
          key={country.cca3}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 cursor-pointer overflow-hidden w-full max-w-xs mx-auto flex flex-col"
          onClick={() => onCardClick(country.cca3)}
        >
          {/* Imagem */}
          <div className="h-40 w-full overflow-hidden">
            <img
              src={country.flags.svg}
              alt={`Bandeira de ${country.name.common}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            {/* Nome do país + botão ❤️ */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-800">
                {country.name.common}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // impede que clique no botão acione o clique do card
                  toggleFavorite(country.cca3);
                }}
                className={`bg-transparent border-none outline-none p-0 m-0 text-2xl transition-transform hover:scale-110 ${
                  favorites.includes(country.cca3)
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-red-400'
                }`}
                title={
                  favorites.includes(country.cca3)
                    ? 'Remover dos favoritos'
                    : 'Adicionar aos favoritos'
                }
              >
                {favorites.includes(country.cca3) ? '❤️' : '🤍'}
              </button>
            </div>

            {/* Região */}
            <p className="text-sm text-gray-500 mb-2">{country.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
