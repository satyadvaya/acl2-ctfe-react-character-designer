export default function Display({ library }) {
  return (
    <div>
      {library.map((phrase) => (
        <p>{phrase}</p>
      ))}
    </div>
  );
}
