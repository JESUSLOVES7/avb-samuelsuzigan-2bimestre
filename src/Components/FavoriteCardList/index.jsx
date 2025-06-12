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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 px-4 py-8">
      {countries.map((country) => (
        <div
          key={country.cca3}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-between"
        >
          {/* Container da imagem com proporção forçada */}
          <div className="w-full aspect-[4/3] flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={country.flags.svg}
              alt={`Bandeira de ${country.name.common}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Nome do país */}
          <h2 className="text-lg font-semibold text-center mb-2">
            {country.name.common}
          </h2>

          {/* Botão de remover favorito */}
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
