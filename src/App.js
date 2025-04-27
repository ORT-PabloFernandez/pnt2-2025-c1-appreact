import React, { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import BeerList from "./components/Beer/BeerList";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState(0);

  const handleComprar = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className="App">
      <Cabecera carrito={carrito} />
      <main style={{ padding: "24px" }}>
        <BeerList onComprar={handleComprar} />
      </main>
    </div>
  );
}

export default App;
