import React from "react";

export default function Show({ pokemon }) {
  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
  const imageSrc = !pokemon.img.includes(".png")
    ? `${pokemon.img}.jpg`
    : pokemon.img;

  return (
    <main>
      <h1>Gotta Catch 'Em All</h1>
      <header>
        <h2>{capitalizedName}</h2>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imageSrc}
          alt={capitalizedName}
          style={{ width: "20%", height: "auto" }}
        />
      </div>
      <footer>
        <a href="/pokemon" role="button">
          Back
        </a>
      </footer>
    </main>
  );
}

