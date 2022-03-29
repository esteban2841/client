import './App.css';
import {Route, Routes} from "react-router-dom"
// import NavBar from './components/Nav';
import LandingPage from './components/LandingPage.jsx';
import Pokemons from './components/Pokemons.jsx';

function App() {

  


  return (
    <div className="App">
      <Routes>
      <Route exact path={"/"} element={<LandingPage/>}></Route>
      <Route exact path={"/pokemons"} element={<Pokemons/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
