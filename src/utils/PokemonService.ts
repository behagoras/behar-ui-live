import { Pokemon } from '../types';
import getData from './getData';

class PokemonService {
  API_URL: string;
  constructor(apiUrl='https://pokeapi.co/api/v2/pokemon') {
    this.API_URL = apiUrl;
  }

  async getAllPokemons() {
    const pokemonsURL = await getData(this.API_URL);
    const { results } = pokemonsURL;
    const allPokemons:Pokemon[] = results.map(async (pokemon:any) => {
      return getData(pokemon.url);
    });

    return allPokemons;
  }

  async getPokemon(id:string) {
    const pokemon = getData(`${this.API_URL}/${id}`);
    return pokemon;
  }
}

export default PokemonService;
