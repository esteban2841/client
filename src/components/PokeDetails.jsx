import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import "../styles/general.css"
import pokeStyles from "../styles/general.css"


function PokeDetails(id) {
    
    const {pokemon, loader} = useSelector(state=>({pokemon: state.pokemon, loader: state.pokemonIsLoading}))
    const navigate = useNavigate()
    
    const poke = pokemon[0] || {}

    if(loader){
        return <h1>Is loading...</h1>
    }

    const handleBack = () => navigate('/home')

    
    return (
        <div className='pokeDetail'>
            

                {
                    Object.keys(poke).length > 0 &&
                    
                    <div className='pokeDetail__container' id={poke.id}>
    
                        <img src={poke.img} alt=""/>

                        <div className='pokeDetail__info'>
                            <p className='pokeDetail__name'>{poke.name}</p>
                            <p>Id : {poke.id}</p>


                            <div className='pokeDetail__types'>
                                {
                                    poke.types.map(t=>
                                        <p className={`${pokeStyles.pokeType} ${t.name}`}>{t.name}</p>
                                    ) 
                                }
                            </div>

                            <div className="pokeDetail__stats">
                                {
                                    poke.stats.map(s=>
                                        <div >
                                        <p>{s.name} : {s.value}</p>
                                    </div>                            
                                    )
                                }
                            </div>
                        </div>
                        
                            
                    </div>
                }

                <button onClick={handleBack}>Volver</button>
    
            </div>
    );
}

export default PokeDetails;