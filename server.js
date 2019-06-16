const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const api = "https://pokeapi.co/api/v2/";

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String
    order: Int
    weight: Int
    height: Int
    sprites: Sprite
    abilities: [Ability]
    types: [Type]
    stats: [Stat]
    game_indices: [Game]
  }
  type Ability {
    is_hidden: Boolean
    slot: Int
    ability: AbilityData
  }
  type AbilityData {
    name: String
    url: String
  }
  type Sprite {
    front_default: String
    back_default: String
  }
  type Game {
    game_index: Int
    version: Version
  }
  type Version {
    name: String
    url: String
  }
  type Stat {
    base_stat: Int
    effort: Int
    stat: StatData
  }
  type StatData {
    name: String
    url: String
  }
  type Type {
    slot: Int
    type: TypeData
  }
  type TypeData {
    name: String
    url: String
  }
  type Query {
    getPokemon(pokemonName: String!): Pokemon
  }
`;

const resolvers = {
  Query: {
    getPokemon: (root, args) => {
      const { pokemonName } = args;
      let formattedPokemonName = pokemonName;
      if (pokemonName[0] === pokemonName[0].toUpperCase()) {
        formattedPokemonName = pokemonName.toLowerCase();
      }
      return new Promise((resolve, reject) => {
        axios
          .get(`${api}pokemon/${formattedPokemonName}`)
          .then(res => {
            console.log("POKEMON:", res);
            resolve(res.data);
          })
          .catch(err => {
            console.log("ERROR:", err);
            err.response.status == 404
              ? console.log(
                  "Pokemon not found in the database, check the pokemon's name and try again"
                )
              : console.log("An error ocurred while fetching, try again later");
            reject(err);
          });
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

server.listen().then(({ url, port }) => {
  console.log(`Pokedex ready at ${url}, port ${port}`);
});
