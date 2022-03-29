import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage (){



    return (
        <div>
            <h1>this is the landing page</h1>
            <img src="public/LandingPageImg.jpg" alt="" />
            <button><Link to={"/pokemons"}>poke</Link></button>
        </div>
    )


}