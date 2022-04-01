import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { pagination } from '../redux/actions';


function Pagination() {

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)
    const [page,setPage] = useState(1)

    function handlePaginationNext(){
        setPage(page)
        if(page>=4){
            setPage(1)
        }else{
            setPage(page+1)
        }
        console.log(page)
        dispatch(pagination(page))
    }
    function handlePaginationPrev(){
        setPage(page)
        if(page<=1){
            setPage(4)
        }else{
            setPage(page-1)
        }
        console.log(page)
        dispatch(pagination(page))
    }

    return (
        <div>
            <span>Prev Page<button id="btnprev" onClick={handlePaginationPrev}>{"<"}</button></span>
            <span><button id="btnNext" onClick={handlePaginationNext}>{">"}</button>Next Page</span>
        </div>
    );
}

export default Pagination;