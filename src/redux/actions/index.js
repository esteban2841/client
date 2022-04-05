import axios from "axios";

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';
export const PAGINATION = 'PAGINATION';
export const SORT_FILTER = "SORT_FILTER"
export const POKE_DETAIL = "POKE_DETAIL"
export const GET_TYPES = "GET_TYPES"
export const TYPE_FILTER = "TYPE_FILTER"

let urlPokemons= 'http://localhost:3001/pokemons'

export const getAllPokemons =   () => async dispatch => {
   
    const pokemones = await axios(urlPokemons)
    
    
    return dispatch({
            type : GET_ALL_POKEMONS,
            payload : pokemones.data
    })
};

export const getPokemon =  (name) => async dispatch => {
   
    const pokemones = await fetch(urlPokemons + "?name="+name)
    const res = await pokemones.json()
    
    // const pokeFiltered = res.filter(pokemon => name === pokemon.name)


    return (
        
        dispatch({
            type : GET_POKEMON,
            payload : res
    }))
};

export const pagination =  (page) => async dispatch => {
    
    
    const pokemones = await fetch(urlPokemons + "?page="+page)
    const res = await pokemones.json()
    
    // const pokeFiltered = res.filter(pokemon => name === pokemon.name)


    return (
        
        dispatch({
            type : PAGINATION,
            payload : res
    }))
};
export const sortFilter =  (objSort) => async dispatch => {
    return (
        
        dispatch({
            type : SORT_FILTER,
            payload : objSort
    }))
};
export const pokeDetail =  (id) => async dispatch => {
    
    const urlDetail = "http://localhost:3001/pokemons/" + id;
    const pokemones = await fetch(urlDetail)
    const res = await pokemones.json()

    return (
        
        dispatch({
            type : POKE_DETAIL,
            payload : res
    }))
};
export const getTypes =  () => async dispatch => {
    
    const urlTypes = "http://localhost:3001/types"
    const res = await fetch(urlTypes)
    const types = await res.json()
    return (
        
        dispatch({
            type : GET_TYPES,
            payload : types
        }))
    };
    export const typeFilters =  (objSort) => async dispatch => {
        return (
            
            dispatch({
                type : SORT_FILTER,
                payload : objSort
        }))
    };
    
    