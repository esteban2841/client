import './App.css';
import {Route, Routes} from "react-router-dom"
// import NavBar from './components/Nav';
import LandingPage from './components/LandingPage.jsx';
import Pokemons from './components/Pokemons.jsx';
import CreatePokemons from './components/CreatePokemons';
import PokeDetails from './components/PokeDetails';

function App() {

  


  return (
    <div className="App">
      <Routes>
      <Route exact path={"/"} element={<LandingPage/>}></Route>
      <Route exact path={"/home"} element={<Pokemons/>}></Route>
      <Route exact path={"/create"} element={<CreatePokemons/>}></Route>
      <Route exact path={"/pokeDetail"} element={<PokeDetails/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
