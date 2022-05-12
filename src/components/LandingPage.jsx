import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import landingImage from "../../src/Assets/PokemonsLanding.png"
import pokeball from "../../src/Assets/pokeBall.png"

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
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    function navigateHome (){
        navigate("/home")
    }
    console.log(isOpen)
    return (
        <LandingContainer className="landing">
            <h1>Welcome to the pokemons' world</h1>
            <img src={isOpen? pokeball : pokeball } alt=""/>
            <button onClick={()=>{
                setIsOpen(true)
            }}>ENTER¿</button>
        </LandingContainer>
    )


}