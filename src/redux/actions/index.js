export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';



let urlPokemons= 'http://localhost:3000/pokemons'

export const getAllPokemons = () => dispatch => {
    return (
        fetch(urlPokemons)
        .then(respuesta=> respuesta.json())
        .then( data => dispatch({
            type : GET_ALL_POKEMONS,
            payload : data
    })))
};

export const getPokemon = (id) => dispatch => {
    return (
        fetch(urlPokemons+"/"+id)
        .then(respuesta=> respuesta.json())
        .then( data => dispatch({
            type : GET_POKEMON,
            payload : data
    })))
};

let id = 40;

export const createPokemon = (pokeObj)=>{
    id++
    return ({
        type : CREATE_POKEMON,
        payload : {...pokeObj, id:id}
    })
};

