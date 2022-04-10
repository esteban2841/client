import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {  changeFilter  } from '../redux/actions';

function StrenghtFilter() {

    const dispatch = useDispatch()
    
  
    function handleChange(e){
        dispatch(changeFilter('strength',e.target.value))
    }

    return (
        <div>
             <select name="" id="" onChange={(e)=>handleChange(e)}>
                <option value="">Sort by Strength</option>
                <option value="ascending" >ascending</option>
                <option value="descending" >descending</option>
            </select>   
        </div>
    );
}

export default StrenghtFilter;