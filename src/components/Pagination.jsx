import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { pagination } from '../redux/actions';


function Pagination() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    const [page,setPage] = useState(1)

    function handlePaginationNext(){
        let newPage
        if(page>=4){
            // setPage(1)
            newPage = 1
        }else{
            // setPage(page+1)
            newPage = page +1 
        }
        setPage(newPage)
        dispatch(pagination(newPage))
    }
    function handlePaginationPrev(){
        let newPage
        if(page<=1){
            newPage = 1
        }else{
            newPage = page -1 
        }
        setPage(newPage)
        dispatch(pagination(newPage))
    }

    return (
        <div>
            <span>Prev Page<button id="btnprev" onClick={handlePaginationPrev}>{"<"}</button></span>
            <div>{page}</div>
            <span><button id="btnNext" onClick={handlePaginationNext}>{">"}</button>Next Page</span>
        </div>
    );
}

export default Pagination;