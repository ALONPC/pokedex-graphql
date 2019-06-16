import React from "react";
import styles from "./styles.css";

const PokemonItem = props => {
  const { pokemon } = props;
  console.log("TCL: pokemon", pokemon);
  return (
    <>
      <div className="card text-white bg-primary mb-3 col-md-12">
        <h3 className="card-header capitalize">
          {`#${pokemon.id} ${pokemon.name}`}
        </h3>
        <div className="card-body">
          <div className="row">
            <div className="col" align="center">
              <img
                className="img-fluid"
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name}.jpg`}
              />
            </div>
            <div className="col" align="center">
              <img
                className="img-fluid"
                src={pokemon.sprites.back_default}
                alt={`${pokemon.name}.jpg`}
              />
            </div>
          </div>
          {/* <div className="row">
            <h6 className="col-sm-3" align="center">
              Height: {pokemon.height}
            </h6>
            <h6 className="col-sm-3" align="center">
              Weight: {pokemon.weight}
            </h6>
          </div> */}
          <h7 className="card-subtitle text-muted">
            Height: {pokemon.height} inchs.
          </h7>
          <br />
          <h7 className="card-subtitle text-muted">
            Weight: {pokemon.weight} lbs.
          </h7>
          {/* <h6 className="card-subtitle text-muted">Support card subtitle</h6> */}
        </div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <h7 className="card-title">Abilities</h7>
        <ul className="list-group list-group-flush pokemonData">
          {pokemon.abilities.map(ability => (
            <li className="list-group-item capitalize">
              {ability.ability.name}
            </li>
          ))}
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default PokemonItem;
