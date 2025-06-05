import CountryCard from '../Cards';

export default function CountryGrid({ countries, onCardClick }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 px-4">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => onCardClick(country.cca3)}
        />
      ))}
    </div>
  );
}
