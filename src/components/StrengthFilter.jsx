import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {  strenghtFilter  } from '../redux/actions';

function StrenghtFilter() {

    const dispatch = useDispatch()
    
    const pokemons = useSelector(state=> state.pokemons)
    const pokemonsCopy = [...pokemons]

    function handleDropDown(e){
        const target = e.target.value
        
        
        if(target === "ascending"){
           
            const toFilter = "attack"
            const getProp = (lista, stat) =>  lista.find(x=> x.name === stat)

            pokemonsCopy.sort((a,b)=>{
                const valueA = getProp(a.stats, toFilter)
                const valueB = getProp(b.stats, toFilter)

                if(valueA.value > valueB.value) return 1
                if(valueA.value < valueB.value) return -1

                return 0
            })
           dispatch(strenghtFilter(pokemonsCopy))
            
            
        }else if(target === "descending"){
            const toFilter = "attack"
            const getProp = (lista, stat) =>  lista.find(x=> x.name === stat)

            pokemonsCopy.sort((a,b)=>{
                const valueA = getProp(a.stats, toFilter)
                const valueB = getProp(b.stats, toFilter)

                if(valueA.value < valueB.value) return 1
                if(valueA.value > valueB.value) return -1

                return 0
            })
           dispatch(strenghtFilter(pokemonsCopy))
        }
        
    };


    return (
        <div>
             <select name="" id="" onChange={(e)=>handleDropDown(e)}>
                <option value="">Sort by Strength</option>
                <option value="ascending" >ascending</option>
                <option value="descending" >descending</option>
            </select>
        </div>
    );
}

export default StrenghtFilter;