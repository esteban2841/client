
import { 
    CHANGE_FILTER,
    CREATION_FILTER,
    GET_ALL_POKEMONS,
    GET_POKEMON,
    GET_TYPES,
    LOADER_POKEMON,
    LOADER_POKEMONS,
    PAGINATION,
    POKE_DETAIL,
    NEW_PAGE,
} from "../actions";


const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    pokemon: [],
    types:[],
    pokemonsIsLoading:true,
    pokemonIsLoading:true,
    filters:{
        texto: '',
        type: '',
        strength: '',
        creation: '',
    },
    pagination:1
};

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_ALL_POKEMONS :
            console.log(action.payload)
            return { ...state, pokemons : action.payload }
        case GET_POKEMON :
            return { ...state, pokemonsFiltered : action.payload }
        case POKE_DETAIL:
            return {...state, pokemon: action.payload}
        case PAGINATION:
            return { ...state, pokemonsFiltered : action.payload }
        case GET_TYPES:
            return { ...state, types : action.payload }
        case LOADER_POKEMONS:
            return {...state, pokemonsIsLoading: action.payload}
        case LOADER_POKEMON:
            return {...state, pokemonIsLoading: action.payload}
        case CREATION_FILTER:
            return {...state, pokemonsFiltered: action.payload}
        case NEW_PAGE: 
            return {...state, pagination: action.payload} 
        case CHANGE_FILTER:
            return  {...state, filters: {
                ...state.filters,
                [action.payload.type]: action.payload.value 
            }}
       default : return state
    };
};

export default rootReducer;
