import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage (){



    return (
        <div>
            <h1>this is the landing page</h1>
            <img src="https://p4.wallpaperbetter.com/wallpaper/283/550/399/pokemon-1920x1080-anime-pokemon-hd-art-wallpaper-preview.jpg" alt="" />
            <button><Link to={"/home"}>poke</Link></button>
        </div>
    )


}