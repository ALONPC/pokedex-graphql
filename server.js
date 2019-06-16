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
    species: Species
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
  type Species {
    url: String
    description: SpeciesData
  }
  type SpeciesData {
    description: String
  }
  type Query {
    getPokemon(pokemonName: String!): Pokemon
    getAllPokemon(limit: Int!): [Pokemon]
    getAllPokemonEntries(limit: Int!): [Pokemon]
  }
`;

const resolvers = {
  Query: {
    getPokemon: async (root, args) => {
      const { pokemonName } = args;
      let formattedPokemonName = pokemonName;
      if (pokemonName[0] === pokemonName[0].toUpperCase()) {
        formattedPokemonName = pokemonName.toLowerCase();
      }
      return await axios
        .get(`${api}pokemon/${formattedPokemonName}`)
        .then(res => {
          console.log("POKEMON:", res);
          return res.data;
        })
        .catch(err => {
          console.log("ERROR:", err);
          err.response.status == 404
            ? console.log(
                "Pokemon not found in the database, check the pokemon's name and try again"
              )
            : console.log("An error ocurred while fetching, try again later");
          throw new Error(err);
        });
    },
    getAllPokemon: async (root, args) => {
      const { limit } = args;
      return await axios.get(`${api}pokemon/?limit=${limit}`).then(res => {
        console.log("TCL: res", res);
        return res.data.results;
      });
    },
    getAllPokemonEntries: (root, args) => {
      // is async await necessary here? (Query for +100 pkmn takes too long)
      const { limit } = args;
      let arrAllPokemon = [];
      for (let i = 1; i < limit + 1; i++) {
        const pokemonEntry = axios.get(`${api}pokemon/${i}`).then(res => {
          return res.data;
        });
        arrAllPokemon.push(pokemonEntry);
        console.log("TCL: arrAllPokemon", arrAllPokemon);
      }

      // arrAllPokemon.forEach(async pokemon => {
      //   pokemon.species.data.description = "zzzz";
      //   await axios
      //     .get(pokemon.species.url)
      //     .then(res => {
      //       pokemon.species.data.description = res.data;
      //       return res.data;
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // });
      return arrAllPokemon;
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
