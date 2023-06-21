import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json().then((data) => console.log(data)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <header className={" h-20 bg-gray-900 text-white "}>
        Abbas
        <button className="btn btn-primary">Submit</button>
      </header>
    </>
  );
}

export default App;
