export default function Character({ head }) {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <article
        className="head"
        style={{
          height: 150,
          width: 150,
          backgroundImage: `url(./${head}-head.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
    </section>
  );
}
