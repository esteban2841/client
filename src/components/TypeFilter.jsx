import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getTypes, changeFilter  } from '../redux/actions';

function TypeFilter() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getTypes())
    },[])

    const types = useSelector(state=> state.types)
    console.log(types)
    function handleChange(e){
        dispatch(changeFilter('type',e.target.value))
    }

    
    return (
        <div>
            <select name="" id="" onChange={(e)=>handleChange(e)}>
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