import axios from "axios";

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';
export const PAGINATION = 'PAGINATION';
export const SORT_FILTER = "SORT_FILTER"
export const POKE_DETAIL = "POKE_DETAIL"
export const GET_TYPES = "GET_TYPES"
export const TYPE_FILTER = "TYPE_FILTER"
export const LOADER_POKEMONS = "LOADER_POKEMONS"
export const LOADER_POKEMON = "LOADER_POKEMON"
export const STRENGTH_FILTER = "STRENGTH_FILTER"
export const CREATION_FILTER = "STRENGTH_FILTER"
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const NEW_PAGE = "NEW_PAGE"

let urlPokemons=  "http://localhost:3001/pokemons/"


export const getAllPokemons =   () => async (dispatch, getState) => {
   
    //ELIMINAMOS LOS DATOS QUE EXISTAN EN POKEMONFILTERED
    dispatch({
        type :  PAGINATION,
        payload : []
    })

    //MOSTRAMOS EL LOADING DE LOS DATOS
    dispatch({
        type : LOADER_POKEMONS,
        payload : true
    })
    
    const pokemones = await axios(urlPokemons)

    //ESCONDEMOS EL LOADING 
    dispatch({
        type : LOADER_POKEMONS,
        payload : false
    })

    //SETEAMOS TODOS LOS POKEMONES
    dispatch({
            type : GET_ALL_POKEMONS,
            payload : pokemones.data
    })

    //EJECUTAMOS EL FILTRO CON TODOS LOS POKEMONES
    dispatch({
        type: PAGINATION,
        payload: applyFilters(getState)
    })
};

export const getPokemon =  (name) => async dispatch => {
    const pokemones = await fetch(urlPokemons + "?name="+name)
    const res = await pokemones.json()
        
    dispatch({
        type : GET_POKEMON,
        payload : res
    })
};

export const getPage =  (newPage) => async (dispatch,getState)=> {
    

    dispatch({
        type:NEW_PAGE,
        payload: newPage
    })


    dispatch({
        type: PAGINATION,
        payload: applyFilters(getState)
    })
    

};

export const creationTypeFilter =  (objSort) => async dispatch => {
    return (
        
        dispatch({
            type : CREATION_FILTER,
            payload : objSort
    }))
};

export const pokeDetail =  (id) => async dispatch => {
    
    console.log('no se')
    dispatch({
        type : POKE_DETAIL,
        payload : []
    })
    dispatch({
        type : LOADER_POKEMON,
        payload : true
    })
    const urlDetail = urlPokemons + id;
    const pokemones = await fetch(urlDetail)
    const res = await pokemones.json()
    
    dispatch({
        type : LOADER_POKEMON,
        payload : false
    })
    
    dispatch({
        type : POKE_DETAIL,
        payload : res
    })
        
};

export const getTypes =  () => async dispatch => {
    
    const urlTypes =  "http://localhost:3001/types"
    const res = await fetch(urlTypes)
    const types = await res.json()

    return (
        dispatch({
            type : GET_TYPES,
            payload : types
        }))
};



export const changeFilter = (type,value) => async (dispatch,getState) =>{

    dispatch({
        type: CHANGE_FILTER,
        payload: {
            type,
            value
        }
    })

    
    dispatch({
        type: PAGINATION,
        payload: applyFilters(getState)
    })

}

//function para filtrar y paginar todos los pokemones
const applyFilters = (getState)=>{

    let { pokemons : data, filters, pagination : page } = getState()

    let pokemones = [...data]

    pokemones = filterByStrength(pokemones, filters.strength)
    pokemones = filterByType(pokemones,filters.type)
    pokemones = filterByText(pokemones,filters.texto)
    pokemones = filterByDataBase(pokemones,filters.creation)

    let quantityPerPage = 12
    
    const inicio = (page-1) * quantityPerPage
    const fin = page * quantityPerPage
    
    pokemones = pokemones.slice(inicio,fin)
    console.log({pokemones,inicio, fin})

    return pokemones
}

//filtros independientes
const filterByText = (data,value) =>{
    if(value === "")return data
    if(value === "A-Z"){
       return [...data].sort((a,b) => {
            if(a.name > b.name){
                return 1
            }else{
                return -1
            }
            
        })
    }else if(value === 'Z-A'){
        return [...data].sort((a,b) => {
        if(a.name < b.name){
                return 1
            }else{
                return -1
            }
            
        })
    }else{
        return [...data]
    }
            
}

const filterByType = (data,value) => {

    if(value === '') return data

    const findType = (types,type) => types.some( x => x.name === type)

    const newData = data.filter(pokemon=>{

        return findType(pokemon.types, value)
    })

    return newData
}

const filterByStrength = (data,value) => {

    if(value === "") return data
    console.log(value)
    const findStrength = (stats, stat) => stats.find(s=> s.name === stat)

    return [...data].sort( (a,b) => {
        
        const valueA = findStrength(a.stats, "attack").value
        const valueB = findStrength(b.stats, "attack").value

        if(value === "ascending"){
            if(valueA > valueB)return 1
            if(valueA < valueB)return -1
            return 0
        }

        if(value === "descending"){
            if(valueA < valueB)return 1
            if(valueA > valueB)return -1
            return 0
        }
    })
}

const filterByDataBase = (data,value) => {
    console.log(value)

    if(value === "") return data
    
    if( value === "CreatedFromAPI"){
        return data.filter(pokemon=> pokemon.createdInDb === false)
    }else if(value === 'CreatedFromDB'){
        return data.filter(pokemon=> pokemon.createdInDb === true)
    }else{
        return data
    }
}