
import { CREATE_POKEMON, GET_ALL_POKEMONS, GET_POKEMON } from "../actions";


const initialState = {
    pokemons: [],
    pokemon: {},
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POKEMONS :
        return { ...state, houses : action.payload }
        case GET_POKEMON :
        return { ...state, house : action.payload }
        case CREATE_POKEMON:
        return { ...state, houses : state.houses.concat(action.payload)}
       default : return state
    };
};

export default rootReducer;
