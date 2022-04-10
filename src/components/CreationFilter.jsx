import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';

function CreationFilter() {
    
    const dispatch = useDispatch()

    function handleChange(e){
        dispatch(changeFilter('creation',e.target.value))
    }

    return (
        <div>
            <select name="" id="" onChange={(e)=>handleChange(e)}>
                <option value="">Creation Filter</option>
                <option value="CreatedFromAPI">Created from API</option>
                <option value="CreatedFromDB">Created from DB</option>
            </select>
        </div>
    );
}

export default CreationFilter