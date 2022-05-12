import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import landingImage from "../../src/Assets/LandingImage.png"

// const landingImage = require("../Assets/LandingImage.png")


const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("https://e7.pngegg.com/pngimages/591/998/png-clipart-anime-pokemon-bestseller-%C5%9Eer%C4%B0t-computer-computer-wallpaper.png");
    background-repeat: no-repeat;
    object-fit: cover;
`

export default function LandingPage (){



    return (
        <LandingContainer className="landing">
            <h1>Welcome to the pokemons' world</h1>
            <button><Link to={"/home"}>Let's start</Link></button>
        </LandingContainer>
    )


}