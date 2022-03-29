import React, { useEffect} from "react";
import { getAllPokemons } from '../../src/redux/actions/index';
import { useDispatch, useSelector } from 'react-redux'



export default function Pokemons (){
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons)

    // console.log(pokemons)

    // const [data, setData] =useState([])

    useEffect(()=>{
    //     const getData =  ()=>{
        dispatch(getAllPokemons())
    //         setData(data)
    //         console.log(data)
    //     }
    //     getData()
    },[])
    
    
    return(
        <div>
            {
                pokemons.map(pokemon=>{
                    return (
                        <div>
                            <img src={pokemon.img} alt="" />
                            <p>{pokemon.name}</p>

                        </div>

                    )
                })
            }
            
        </div>
    )
    
}
// const mapState = (state) => state.pokemons
// export default connect(mapState, null)(Pokemons)