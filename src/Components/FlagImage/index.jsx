export default function FlagImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-60 object-cover rounded shadow-md mb-6"
    />
  );
}
