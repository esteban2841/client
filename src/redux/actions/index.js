export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';



let urlPokemons= 'http://localhost:3001/pokemons'

export const getAllPokemons =   () => async dispatch => {
   
    const pokemones = await fetch(urlPokemons)
    const res = await pokemones.json()
    
    return dispatch({
            type : GET_ALL_POKEMONS,
            payload : res
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

let id = 40;

export const createPokemon = (pokeObj)=>{
    id++
    return ({
        type : CREATE_POKEMON,
        payload : {...pokeObj, id:id}
    })
};

