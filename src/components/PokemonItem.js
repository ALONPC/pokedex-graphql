import React from "react";
import styles from "./styles.css";

const PokemonItem = props => {
  const { name } = props;
  //   return <p style={{ textTransform: "capitalize" }}>{name}</p>;
  return <h1 className="capitalize">{name}</h1>;
};

export default PokemonItem;
