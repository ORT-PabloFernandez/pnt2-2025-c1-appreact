import logo from "./logo.svg";
import "./App.css";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <l3>Pagina de inicio</l3>
      <br />
      <User Nombre="Pedro" Apellido="Gutierrez" />
      <User Nombre="Maria" />
      <User Nombre="Juan" />
      <User Nombre="Anna" />
    </div>
  );
}

export default App;
