const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#a28089",
    };
    return (
      <div style={myStyle}>
        <h1>The Pokemon Views Index Page</h1>
        {pokemon.map((poke, i) => {
          const capitalizedFirstName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
          return (
            <ul>
              <li>{capitalizedFirstName}</li>
              <li>
                <a style={{ textDecoration: "none", color: "#00000" }}>About {poke.name}</a>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;
