
import { CREATE_POKEMON, GET_ALL_POKEMONS, GET_POKEMON, NEXT_PAGE, PAGINATION, PREV_PAGE } from "../actions";


const initialState = {
    pokemons: [],
    pokemon: {},
    
};

const rootReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case GET_ALL_POKEMONS :
        return { ...state, pokemons : action.payload }
        case GET_POKEMON :
        return { ...state, pokemons : action.payload }
        case CREATE_POKEMON:
            return { ...state, pokemons : action.payload }
        case PAGINATION:
            return { ...state, pokemons : action.payload }
       
       default : return state
    };
};

export default rootReducer;
