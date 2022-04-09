import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getTypes, typeFilters  } from '../redux/actions';

function TypeFilter() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])
    const types = useSelector(state=> state.types)
    const pokemons = useSelector(state=> state.pokemons)

    function handleDropDown(e){
        
        const target = e.target.value
        const coincidencias = []
            const ascendantFilter = [...pokemons].map((pokemon) => {
           
            pokemon.types.forEach( t=>{
                if(t.name === target){
                    console.log(pokemon, "si hay")
                    coincidencias.push(pokemon)

                }else{
                    console.log(" no hay pokemons del type seleccionado")
                }
                    
                
            })

            
            
        })
        if(coincidencias.length === 0){
            return <p>there is not any coincidences with the type sellected</p>
        }else{
            dispatch(typeFilters(coincidencias))
        }
        
    };
    
    return (
        <div>
            <select name="" id="" onChange={(e)=>handleDropDown(e)}>
                <option value="" >Filter by Type</option>
                {
                    types && types.map(t=>{
                        return (
                           <option value={t.name}>{t.name}</option>
                        )
                    })
                }
            </select>
        </div> 
        
    );
}

export default TypeFilter;