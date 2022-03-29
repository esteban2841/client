import './App.css';
import {Route, Routes} from "react-router-dom"
// import NavBar from './components/Nav';
import LandingPage from './components/LandingPage.jsx';
import Pokemons from './components/Pokemons.jsx';

function App() {

  


  return (
    <div className="App">
      <Routes>
      <Route exact path={"/"} component={LandingPage}></Route>
      <Route exact path={"/pokemons"} component={Pokemons}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
