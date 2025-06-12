import { useEffect, useState } from 'react';
import HeaderFavoritos from '../../Components/HeaderFavoritos';
import FavoriteCardList from '../../Components/FavoriteCardList';

export default function Favoritos() {
  const [favoriteCountries, setFavoriteCountries] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length > 0) {
      fetch(`https://restcountries.com/v3.1/alpha?codes=${favorites.join(',')}`)
        .then(res => res.json())
        .then(data => setFavoriteCountries(data));
    } else {
      setFavoriteCountries([]);
    }
  };

  const clearFavorites = () => {
    localStorage.removeItem('favorites');
    setFavoriteCountries([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300">
      <HeaderFavoritos clearFavorites={clearFavorites} />
      <div className="max-w-7xl mx-auto pt-8">
        <FavoriteCardList
          countries={favoriteCountries}
          onFavoritesChange={setFavoriteCountries}
        />
      </div>
    </div>
  );
}
