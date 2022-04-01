import React, { useEffect} from "react";
import { getAllPokemons } from '../../src/redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'
import pokeStyles from "../styles/pokemons.module.css"
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";


export default function Pokemons (){
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    
    // console.log(pokemons)

    // const [data, setData] =useState([])

    useEffect(()=>{
    //     const getData =  ()=>{
        dispatch(getAllPokemons())
    //         setData(data)
    //         console.log(data)
    //     }
    //     getData()
    },[])
    
    
    return(
        <div>

            <header>
                <SearchBar/>
                <FilterButton/>
                <button><Link to={"/create"}>Create Pokemon</Link></button>
            </header>
            <Pagination/>
            <div className={pokeStyles.mainContainer}>
                
                {
                    pokemons.map(pokemon=>{
                        
                        return (
                             <div id={pokemon.id} className={pokeStyles.cardsContainer}>
                                <img src={pokemon.img} alt="" className={pokeStyles.cardImg} />
                                <p className={pokeStyles.pokeName}>{pokemon.name}</p>
                                <div className={pokeStyles.pokeTypesContainer}>
                            {
                                pokemon.types.map(t=>
                                    
                                <p className={pokeStyles.pokeType}>{t.type.name}</p>
                                    
                                    
                                    
                                )
                            }
                                    
                                    
                                </div>                            
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