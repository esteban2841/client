import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage (){



    return (
        <div className="landing">
            <h1>Welcome to the pokemons' world</h1>
            <button><Link to={"/home"}>Let's start</Link></button>
        </div>
    )


}