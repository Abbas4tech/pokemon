import React from "react";
import useFetchData from "../hooks/useFetch";
import PokemonList from "../components/PokemonList";

const Layout: React.FC = () => {
  const { data, isLoading, loadMore } = useFetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );

  const loading = <span className="loading loading-spinner loading-lg"></span>;

  return (
    <>
      <main>
        <article className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {isLoading ? loading : <PokemonList list={data} />}
        </article>
      </main>
    </>
  );
};

export default Layout;
