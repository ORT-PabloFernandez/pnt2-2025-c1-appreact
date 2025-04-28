import React, { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import BeerList from "./components/Beer/BeerList";
import "./App.css";
import beers from "./components/moc/beers.js"

function App() {
  const [carrito, setCarrito] = useState(0);

  const handleComprar = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className="App">
      <Cabecera carrito={carrito} />
      <main style={{ padding: "24px" }}>
        <BeerList onComprar={handleComprar} beers={beers} />
      </main>
    </div>
  );
}

export default App;
