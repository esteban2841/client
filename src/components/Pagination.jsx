import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getPage } from '../redux/actions';


function Pagination() {

    const dispatch = useDispatch();
    const {pagination, pokemons} = useSelector((state) => state)
    
    const totalPokemons = pokemons
    const page = pagination
    const totalPokeQuantity = totalPokemons.length
    const quantityPerPage = 12
    const maxPage = Math.ceil(totalPokeQuantity / quantityPerPage)
    


    function handlePaginationNext(){
        let newPage
        if(page>=maxPage) newPage = 1
        else newPage = page +1 
        
        dispatch(getPage(newPage))
    }

    function handlePaginationPrev(){
        let newPage
        if(page<=1) newPage = 1
        else newPage = page -1 

        dispatch(getPage(newPage))
    }

    return (
        <div className='pagination'>
            <div>
                <div>Prev</div>
                <button onClick={handlePaginationPrev}>{"<"}</button>
            </div>
            <div>{page}</div>
            <div>
                <button onClick={handlePaginationNext}>{">"}</button>
                <div>Next</div>
            </div>
        </div>
    );
}

export default Pagination;