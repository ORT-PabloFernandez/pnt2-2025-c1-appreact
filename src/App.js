import "./App.css";
//import UserList from "./components/User/UserList";
import BeerList from "./components/Beer/BeerList";
import Cabecera from "./components/Cabecera/Cabecera";
import PieDePagina from "./components/Pie/PieDePagina";
import UserPage from "./components/User/UserPage";
//import PieDePagina from "./components/Pie/PieDePagina";

function App() {
  return (
    <>
      <Cabecera />
      <BeerList />
      <PieDePagina />
    </>
  );
}

export default App;
