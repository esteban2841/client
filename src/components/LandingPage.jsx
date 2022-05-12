import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import landingImage from "../../src/Assets/PokemonsLanding.png"
import pokeball from "../../src/images/pokeball.png"

// const landingImage = require("../Assets/LandingImage.png")


const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("${landingImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    
    button{
        position: absolute;
        overflow: visible;
        z-index: 1000;
        top: 50%;
        left: 50.25%;
        border-radius: 50%;
        background-color: transparent;
        width: 75px;
        height: 75px;
        cursor: pointer;
        font-size: 14px;
        border-style: none;
    }
    
    img{
        position: absolute;
        overflow: visible;
        top: 43%;
        left: 47%;
        width: 200px;
        cursor: pointer;
        
    }
    
    .image-container:hover{
        button{
            top: 50%;
            left: 50.25%;
            background-color: #e6e9ed;
            box-shadow: 0 0 10px, 0 0 50px, 0 0 100px #ffffffe8;
            z-index: 1001;
            border: 15px solid #434a54;
            width: 75px;
            height: 75px;
        }
    }
    
    
`

export default function LandingPage (){
    const navigate = useNavigate()
    // const [isOpen, setIsOpen] = useState(false)
    function navigateHome (){
        navigate("/home")
    }
    // console.log(isOpen)
    return (
        <LandingContainer className="landing">
            {/* <h1>Welcome to the pokemons' world</h1> */}
            <div className="image-container" onClick={navigateHome}>
                <img src={pokeball } alt="No aparece"/>
                <button ></button>
            </div>
        </LandingContainer>
    )


}