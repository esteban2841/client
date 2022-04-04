import React, { useEffect} from "react";
import { getAllPokemons, pokeDetail } from '../../src/redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'
import pokeStyles from "../styles/pokemons.module.css"
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";


export default function Pokemons (){
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    
    console.log(pokemons)

    // const [data, setData] =useState([])

    useEffect(()=>{
    //     const getData =  ()=>{
        dispatch(getAllPokemons())
    //         setData(data)
    //         console.log(data)
    //     }
    //     getData()
    },[])
    
    function handleButtonDetails(e){
        const id = e.target.id
        console.log(id)
        dispatch(pokeDetail(id))
    }
    return(
        <div>

            <header className={pokeStyles.filtros}>
                <span>Search<SearchBar className={pokeStyles.cFiltro}/></span>
                <span>Filter:<FilterButton className={pokeStyles.cFiltro}/></span>
                                
                <button><Link to={"/create"}>Create Pokemon</Link></button>
            </header>
            <Pagination/>
            <div className={pokeStyles.mainContainer}>
                
                {
                    pokemons.map(pokemon=>{
                        
                        return (
                             <div id={pokemon.id} className={pokeStyles.cardsContainer}>
                                <p className={pokeStyles.pokeName}>{pokemon.name}</p>
                                <img src={pokemon.img} alt="" className={pokeStyles.cardImg} />
                                <div className={pokeStyles.pokeTypesContainer}>
                                {
                                    
                                    pokemon.types.map(t=>
                                    

                                        <p className={pokeStyles.pokeType}>{t.name}</p>
                                        
                                        
                                    )
                                    
                                }
                                </div>                            
                                
                                
                                <div className={pokeStyles.divLink}><Link className={pokeStyles.link} to={"/pokeDetail"}>       <button id={pokemon.id} onClick={(e)=>handleButtonDetails(e)}>Details</button></Link></div>
                                    
                            </div>

                           

                        )
                    })
                }
                
            </div>
            
        </div>
    )
    
}
// const mapState = (state) => state.pokemons
// export default connect(mapState, null)(Pokemons)