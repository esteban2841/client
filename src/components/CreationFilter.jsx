import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { creationTypeFilter } from '../redux/actions';

function CreationFilter() {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)
    const pokemonsCopy = [...pokemons]


    function handleDropDown(e){

        const targetValue = e.target.value
        if( targetValue === "CreatedFromAPI"){
            const APIpokemons = pokemonsCopy.filter(pokemon=> pokemon.createdInDb === false)
            dispatch(creationTypeFilter(APIpokemons))
        }else{
            const DBpokemons = pokemonsCopy.filter(pokemon=> pokemon.createdInDb === true)
            dispatch(creationTypeFilter(DBpokemons))
        }

    }

    return (
        <div>
            <select name="" id="" onChange={(e)=>handleDropDown(e)}>
                <option value="">Creation Filter</option>
                <option value="CreatedFromAPI">Created from API</option>
                <option value="CreatedFromDB">Created from DB</option>
            </select>
        </div>
    );
}

export default CreationFilter