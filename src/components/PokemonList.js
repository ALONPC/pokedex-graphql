import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { genRanges } from "../lib/constants";
import PokemonItem from "../components/PokemonItem";

const getAllPokemonEntries = gql`
  query($limit: Int!) {
    getAllPokemonEntries(limit: $limit) {
      id
      name
      order
      weight
      height
      sprites {
        front_default
        back_default
      }
      abilities {
        slot
        ability {
          name
        }
      }
    }
  }
`;

const PokemonList = () => {
  console.log(genRanges);
  return (
    <Query query={getAllPokemonEntries} variables={{ limit: 10 }}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>Error</h1>;

        console.log("TCL: PokemonList -> data", data);

        return (
          <>
            {data.getAllPokemonEntries.map((pokemon, index) => {
              return <PokemonItem key={index} pokemon={pokemon} />;
            })}
          </>
        );
      }}
    </Query>
  );
};

export default PokemonList;
