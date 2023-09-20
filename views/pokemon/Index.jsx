const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#a28089",
    };
    return (
      <div style={myStyle}>
        <h1>The Pokemon Views Index Page</h1>
        {pokemons.map((pokemon, i) => {
          const capitalizedFirstName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          return (
            <ul>
              <li>{capitalizedFirstName}</li>
              <li>
                <a href={`pokemon/${i}`}  style={{ textDecoration: "none", color: "#11111" }}>More Info About {pokemon.name}</a>
              </li>
            </ul>
          );
        })}
        <br />
      <a href="/pokemon/new" role="button" className="outline">
        create pokemon
      </a>
      </div>
    );
  }
}

module.exports = Index;
