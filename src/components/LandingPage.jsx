import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import landingImage from "../../src/Assets/PokemonsLanding.png"

// const landingImage = require("../Assets/LandingImage.png")


const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("${landingImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    button{
        border-radius: 50px;
        color: white ;
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
`

export default function LandingPage (){



    return (
        <LandingContainer className="landing">
            <h1>Welcome to the pokemons' world</h1>
            <button><Link to={"/home"}>ENTER</Link></button>
        </LandingContainer>
    )


}