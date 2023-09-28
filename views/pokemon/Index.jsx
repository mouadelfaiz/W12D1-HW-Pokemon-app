import React from "react";
const DefaultLayout = require("../layout/Default");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Index({ pokemons }) {
  return (
    <DefaultLayout>
      <div>
        <h1 style={{ textAlign: "center" }}>The Pokemon Index Page</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="/pokemon/new" role="button" style={{ marginRight: "10px" }}>
            create pokemon
          </a>
          <a href="https:/www.pokemon.com/us/pokedex" role="button">
            find Pokemon to add
          </a>
        </div>

        <br />
        <div>
          {pokemons.map((pokemon, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <h3>
                  <a
                    href={`pokemon/${pokemon.id}`}
                    data-tooltip={`about ${pokemon.name}`}
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    {capitalizeFirstLetter(pokemon.name)}
                  </a>
                </h3>
                <ul>
                  <li>
                    {" "}
                    <form
                      action={`/pokemon/${pokemon._id}?_method=DELETE`}
                      method="POST"
                    >
                      <input
                        type="submit"
                        value={`Delete ${pokemon.name}`}
                        style={{
                          width: "auto",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      />
                    </form>
                  </li>
                  <li>
                    {" "}
                    <a
                      href={`/pokemon/${pokemon._id}/edit`}
                      role="button"
                      style={{
                        width: "auto",
                        backgroundColor: "green",
                        color: "white",
                        padding: "5px 10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Edit {pokemon.name}
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}
