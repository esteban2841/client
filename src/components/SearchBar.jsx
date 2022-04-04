import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../redux/actions';

const SearchBar = () => {
    
    const dispatch = useDispatch()
    const [ input, setInput ]= useState("")
    const pokemons = useSelector((state) => state.pokemons)

    function handleInputChange (e){
        e.preventDefault()
        setInput(e.target.value)
        
    }
    function handleSubmit (e){
        e.preventDefault()
        dispatch(getPokemon(input))
    }

    
    return (
        <div>
            <input 
            type="text" 
            onChange={(e)=>handleInputChange(e)}
            />
            <button onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    );
};

export default SearchBar;