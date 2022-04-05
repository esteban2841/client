import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { sortFilter } from '../redux/actions';


function AzFilter () {
    const dispatch = useDispatch()
    const pokemons = useSelector(state=> state.pokemons)
    
    
    function handleDropDown(e){
        
        const target = e.target.value
        if(target === "A-Z"){
            const ascendantFilter = [...pokemons].sort((a,b) => {
                if(a.name > b.name){
                    return 1
                }else{
                    return -1
                }
                
            })
            

            dispatch(sortFilter(ascendantFilter))
            
        }else if(target === "Z-A"){
            const descendantFilter = [...pokemons].sort((a,b) => {
                if(a.name < b.name){
                    return 1
                }else{
                    return -1
                }
                
            })
            dispatch(sortFilter(descendantFilter))
        }
    }
    
    
    return (
        <div>
            <select name="" id="" onChange={(e)=>handleDropDown(e)}>
                <option value=""></option>
                <option value="A-Z" >A-Z</option>
                <option value="Z-A" >Z-A</option>
            </select>
        </div>
    );
}

export default AzFilter;