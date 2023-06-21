import React, { memo } from "react";
import { BasePokeData } from "../model/pokemon-model";
import Card from "./Card";

interface PokemonListProp {
  list: BasePokeData[];
}

const PokemonList = ({ list }: PokemonListProp) => {
  return (
    <>
      {list.map((e) => (
        <Card name={e.name} url={e.url} key={Math.random().toString()} />
      ))}
    </>
  );
};

export default memo(PokemonList);
