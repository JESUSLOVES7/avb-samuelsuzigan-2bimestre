export default function FavoriteCardList({ countries, onFavoritesChange }) {
    const toggleFavorite = (code) => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const isFavorite = favorites.includes(code);
  
      let newFavorites;
      if (isFavorite) {
        newFavorites = favorites.filter(fav => fav !== code);
      } else {
        newFavorites = [...favorites, code];
      }
  
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      // Atualiza a lista
      fetch(`https://restcountries.com/v3.1/alpha?codes=${newFavorites.join(',')}`)
        .then(res => res.json())
        .then(data => onFavoritesChange(data));
    };
  
    if (countries.length === 0) {
      return <p className="text-center mt-20 text-lg text-gray-600">Nenhum país favoritado ainda.</p>;
    }
  
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 px-4">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-between"
          >
            <img
              src={country.flags.svg}
              alt={`Bandeira de ${country.name.common}`}
              className="w-28 h-20 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-2">
              {country.name.common}
            </h2>
            <button
              onClick={() => toggleFavorite(country.cca3)}
              className="text-2xl transition-transform hover:scale-110"
            >
              ❤️
            </button>
          </div>
        ))}
      </div>
    );
  }
  