import React from "react";

export default function Character({ head, middle, pants }) {
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

      <article
        className="middle"
        style={{
          height: 150,
          width: 150,
          backgroundImage: `url(./${middle}-middle.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>

      <article
        className="pants"
        style={{
          height: 150,
          width: 150,
          backgroundImage: `url(./${pants}-pants.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></article>
    </section>
  );
}
