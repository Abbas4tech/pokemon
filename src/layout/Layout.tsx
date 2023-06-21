import React, { memo } from "react";
import useFetchData from "../hooks/useFetch";
import PokemonList from "../components/PokemonList";
import { BasePokeData } from "../model/pokemon-model";
import { useScrollToBottom } from "../hooks/useScroll";

const Layout: React.FC = () => {
  const { data, isLoading, loadMore } = useFetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  console.log("Component rendered");
  const loading = <span className="loading loading-spinner loading-lg"></span>;
  useScrollToBottom(() => loadMore());

  return (
    <>
      <main>
        <article className="px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {isLoading ? loading : <PokemonList list={data as BasePokeData[]} />}
        </article>
      </main>
    </>
  );
};

export default memo(Layout);
