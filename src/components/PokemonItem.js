import React from "react";
import PokemonTypes from "./PokemonTypes";
import PokemonHeader from "./PokemonHeader";

import styles from "./styles.css";
import PokemonSprites from "./PokemonSprites";

const PokemonItem = props => {
  const { pokemon } = props;
  console.log("Pokemon", pokemon);
  return (
    <>
      <div className="card text-white bg-seondary mb-3 col-md-6">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <PokemonHeader id={pokemon.id} name={pokemon.name} />
            </div>
            <div className="col-md-6">
              <PokemonTypes types={pokemon.types} />
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-12 text-center">
              <PokemonSprites sprites={pokemon.sprites} />
            </div>
          </div>
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

        <div className="row">
          <div className="col-md-6">
            <table class="table table-hover">
              <tbody>
                <tr class="table-active">
                  <th scope="row">Abilities</th>
                  {pokemon.abilities.map(ability => (
                    <td className="list-group-item capitalize">
                      {ability.ability.name}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="col-md-6">
            
          </div> */}
        </div>

        {/* <ul className="list-group list-group-flush pokemonData" /> */}
      </div>
    </>
  );
};

export default PokemonItem;
