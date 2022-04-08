
import {  GET_ALL_POKEMONS, GET_POKEMON, GET_TYPES, LOADER_POKEMON, LOADER_POKEMONS, PAGINATION, POKE_DETAIL, SORT_FILTER, TYPE_FILTER } from "../actions";


const initialState = {
    pokemons: [],
    pokemon: [],
    types:[],
    pokemonsIsLoading:true,
    pokemonIsLoading:true
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_ALL_POKEMONS :
        return { ...state, pokemons : action.payload }
        case GET_POKEMON :
        return { ...state, pokemons : action.payload }
        case SORT_FILTER:
        return {...state, pokemons: action.payload}
        case POKE_DETAIL:
        return {...state, pokemon: action.payload}
        case PAGINATION:
        return { ...state, pokemons : action.payload }
        case GET_TYPES:
        return { ...state, types : action.payload }
        case TYPE_FILTER:
        return {...state, pokemons: action.payload}
        case LOADER_POKEMONS:
        return {...state, pokemonsIsLoading: action.payload}
        case LOADER_POKEMON:
        return {...state, pokemonIsLoading: action.payload}
       
       default : return state
    };
};

export default rootReducer;
