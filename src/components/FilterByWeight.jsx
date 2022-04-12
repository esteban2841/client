import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';

function FilterByWeight() {
    const dispatch = useDispatch()

    function handleChange(evento){
        dispatch(changeFilter("weight",evento.target.value))
    }
    return (
        <div>
           
            <input type="number" placeholder="Filtro By Weight" onChange={(e)=>handleChange(e)}/>
           
        </div>
    );
}

export default FilterByWeight;