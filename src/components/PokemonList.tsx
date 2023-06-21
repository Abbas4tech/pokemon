import React from "react";
import { BasePokeData } from "../model/pokemon-model";
import Card from "./Card";

interface PokemonListProp {
  list: BasePokeData[] | null;
}

const PokemonList = ({ list }: PokemonListProp) => {
  return (
    <>
      {list?.map((e) => (
        <Card name={e.name} url={e.url} key={e.url} />
      ))}
    </>
  );
};

export default PokemonList;
