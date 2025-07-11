import CountryCard from '../CountryCard';

export default function CountryTable({ countries, navigate }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => navigate(`/country/${country.cca3}`)}
        />
      ))}
    </div>
  );
}
