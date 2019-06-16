import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getPokemon = gql`
  query($pokemon: String!) {
    getPokemon(pokemonName: $pokemon) {
      id
      name
      weight
      height
    }
  }
`;

const PokemonEntry = () => {
  return (
    <Query query={getPokemon} variables={{ pokemon: "lucario" }}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>Error</h1>;
        console.log(data);
        return <h1>{data.getPokemon.name}</h1>;
      }}
    </Query>
  );
};

export default PokemonEntry;
