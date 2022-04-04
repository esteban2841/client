
import { CREATE_POKEMON, GET_ALL_POKEMONS, GET_POKEMON, PAGINATION, SORT_FILTER } from "../actions";


const initialState = {
    pokemons: [],
    pokemon: {},
    
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_ALL_POKEMONS :
        return { ...state, pokemons : action.payload }
        case GET_POKEMON :
        return { ...state, pokemons : action.payload }
        case CREATE_POKEMON:
        return { ...state, pokemons : action.payload }
        case SORT_FILTER:
        return {...state, pokemons: action.payload}
        case PAGINATION:
        return { ...state, pokemons : action.payload }
       
       default : return state
    };
};

export default rootReducer;
