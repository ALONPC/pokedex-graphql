import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { genRanges } from "../lib/constants";
import PokemonItem from "../components/PokemonItem";

const getAllPokemon = gql`
  query($limit: Int!) {
    getAllPokemon(limit: $limit) {
      name
    }
  }
`;

const PokemonList = () => {
  console.log(genRanges);
  return (
    <Query query={getAllPokemon} variables={{ limit: 151 }}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>Error</h1>;

        console.log("TCL: PokemonList -> data", data);

        return (
          <>
            {data.getAllPokemon.map((pokemon, index) => {
              return <PokemonItem key={index} name={pokemon.name} />;
            })}
          </>
        );
      }}
    </Query>
  );
};

export default PokemonList;
