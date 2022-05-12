import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import landingImage from "../../src/Assets/LandingImage.png"


const LandingContainer = styled.div`

.landing{

    background-image: landingImage;
}
`

export default function LandingPage (){



    return (
        <LandingContainer className="landing">
            <h1>Welcome to the pokemons' world</h1>
            <button><Link to={"/home"}>Let's start</Link></button>
        </LandingContainer>
    )


}