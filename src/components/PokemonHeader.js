import React from "react";

const PokemonHeader = props => {
  const padNumber = number =>
    number <= 999 ? `00${number}`.slice(-3) : number;
  const { id, name } = props;
  return <h3 className="capitalize">{`#${padNumber(id)} ${name}`}</h3>;
};

export default PokemonHeader;
