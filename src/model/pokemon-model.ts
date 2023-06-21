export type BasePokeData = {
  name: string;
  url: string;
};

export type BasePokeResponse<T> = {
  count: number;
  next: string;
  previous: null | string;
  results: T[];
};

export const getNextPokemons = (count = 50, offset = 0) =>
  `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${offset}`;
