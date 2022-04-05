
import {  GET_ALL_POKEMONS, GET_POKEMON, GET_TYPES, PAGINATION, POKE_DETAIL, SORT_FILTER, TYPE_FILTER } from "../actions";


const initialState = {
    pokemons: [],
    pokemon: [],
    types:[]
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
       
       default : return state
    };
};

export default rootReducer;
