import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <header
        className={
          "h-20 md:h-24 flex justify-between px-4 items-center font-bold text-lg md:text-3xl bg-base-100 text-white "
        }
      >
        <h1>PokeDex</h1>
      </header>
      <Layout />
    </>
  );
}

export default App;
