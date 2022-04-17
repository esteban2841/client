import React, { useEffect} from "react";
import { getAllPokemons, pokeDetail } from '../../src/redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'
import pokeStyles from "../styles/pokemons.module.css"
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import AzFilter from "./AzFilter";
import TypeFilter from "./TypeFilter";
import StrengthFilter from "./StrengthFilter.jsx";
import CreationFilter from "./CreationFilter.jsx";
import imagePokemon from '../images/pokeball.png'
import imageTitle from '../images/texto.png'
import '../styles/general.css'
import {useNavigate} from 'react-router-dom';

export default function Pokemons (){
    
    const dispatch = useDispatch();
    const {pokemonsFiltered, loader} = useSelector(state=>({pokemonsFiltered: state.pokemonsFiltered, loader: state.pokemonsIsLoading}))
    
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getAllPokemons())
    },[])
    
    function handleClickCard(e){
        const id = e.currentTarget.id
        dispatch(pokeDetail(id))
        navigate('/pokeDetail')
    }

    function handleClickCreate(){
        navigate('/create')
    }

    if(loader){
        return (
        <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
      )
    }
    

    return(
        <div>
            <header className={pokeStyles.header}>
                <div className={pokeStyles.headerTitle}>
                    <img src={imagePokemon} alt="" />
                    <img src={imageTitle} alt="" />
                </div>
                <div className={pokeStyles.filtros}>
                    <div>Search<SearchBar className={pokeStyles.cFiltro}/></div>
                    <div>Filter:<AzFilter className={pokeStyles.cFiltro}/></div>
                    <div>Filter:<TypeFilter className={pokeStyles.cFiltro}/></div>
                    <div>Filter:<StrengthFilter className={pokeStyles.cFiltro}/></div>
                    <div>Filter:<CreationFilter className={pokeStyles.cFiltro}/></div>
                    <button className="buttonCreate" onClick={handleClickCreate}>Create pokemon</button>
                </div>
            </header>
            <Pagination/>
            <div className={pokeStyles.mainContainer}>

                {
                    pokemonsFiltered.map(pokemon=>{
                        
                        return (
                             <div id={pokemon.id} className={pokeStyles.cardsContainer} onClick={(e)=>handleClickCard(e)}>
                                <img 
                                    src={pokemon.img ? pokemon.img : "https://i.servimg.com/u/f60/14/90/93/75/pokemo22.png"}
                                    alt="imagen pokemon"
                                    className={pokeStyles.cardImg}
                                />
                                <p className={pokeStyles.pokeName}>{pokemon.name}</p>
                                <div className={pokeStyles.pokeTypesContainer}>
                                {
                                    pokemon.types.map(t=>
                                        <p className={`${pokeStyles.pokeType} ${t.name}`}>{t.name}</p>
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
