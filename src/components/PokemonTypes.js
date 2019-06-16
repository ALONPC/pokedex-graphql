import React from "react";
import types from "./types.css";

const PokemonTypes = props => {
  const { types } = props;
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      {types.map(type => (
        <button
          type="button"
          className={`btn btn-secondary capitalize type ${type.type.name}`}
        >
          {type.type.name}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypes;
