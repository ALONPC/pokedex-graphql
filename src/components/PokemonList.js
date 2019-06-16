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
      types {
        slot
        type {
          name
          url
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      game_indices {
        game_index
        version {
          name
        }
      }
    }
  }
`;

const PokemonList = () => {
  console.log(genRanges);
  return (
    <Query query={getAllPokemonEntries} variables={{ limit: 30 }}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>Error</h1>;

        console.log("TCL: PokemonList -> data", data);

        return (
          <div className="container">
            <div className="row">
              <h1 className="col-md-8 display-4">National Pokedex</h1>
              {data.getAllPokemonEntries.map((pokemon, index) => {
                return <PokemonItem key={index} pokemon={pokemon} />;
              })}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default PokemonList;
