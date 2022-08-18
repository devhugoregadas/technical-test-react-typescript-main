export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export async function getAll(): Promise<Pokemon[]> {
  return fetch("/pokemon.json").then((resp) => resp.json());
}

export async function getByName(search: string): Promise<Pokemon[]> {
  const lcSearch = search.toLowerCase();
  return fetch("/pokemon.json")
    .then((resp) => resp.json())
    .then((pokemon: Pokemon[]) =>
      pokemon.filter(({ name }) => name.toLowerCase().includes(lcSearch))
    );
}

export async function getImageById(idPokemon: number): Promise<string> {
  try {
    const pokemons = await fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((pokemon: Pokemon[]) =>
        pokemon.filter(({ id }) => idPokemon === id)
      );

    const pokemon = pokemons
      .map(({ name }) => `/images/${name.toLowerCase()}.jpg`)
      .shift();
    if (pokemon) {
      return pokemon;
    }
    throw new Error("this id no exist");
  } catch (e) {
    throw new Error("this id no exist");
  }
}
