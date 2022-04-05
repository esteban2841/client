import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

function PokeDetails(id) {
    
    const pokemon = useSelector(state=>state.pokemon)
    


    return (
        <div>
        
            {
                pokemon.map(poke=>{
                    
                    return (
                            
                            <div id={poke.id}>
                            <button><Link to={"/home"}>Volver</Link></button>
                            <img src={poke.img} alt=""  />
                            <p >Name: {poke.name}</p>

                        {
                            poke.types.map(t=>
                            <div >
                                
                                <p>Type: {t.name}</p>


                            </div>                            
                            )
                        }
                        {
                            poke.stats.map(s=>
                            <div >
                                
                                <p>{s.name} : {s.value}</p>
                                


                            </div>                            
                            )
                        }
                            
                                
                        </div>

                        

                    )
                })
            }

        </div>
    );
}

export default PokeDetails;