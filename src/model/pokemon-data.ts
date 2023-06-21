export const getPokemonData = <T>(endpoint: string) =>
  fetch(endpoint).then((res) => res.json().then((data) => data as T));
