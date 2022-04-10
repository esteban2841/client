import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { changeFilter, sortFilter } from '../redux/actions';


function AzFilter () {
    const dispatch = useDispatch()
    
    function handleChange(e){
        dispatch(changeFilter('texto',e.target.value))
    }
    
    return (
        <div>
            <select name="" id="" onChange={(e)=>handleChange(e)}>
                <option value="">Sort by Name</option>
                <option value="A-Z" >A-Z</option>
                <option value="Z-A" >Z-A</option>
            </select>
        </div>
    );
}

export default AzFilter;