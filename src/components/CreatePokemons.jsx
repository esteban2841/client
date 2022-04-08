import React, { useState } from "react";
import createCss from "../styles/create.module.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
function CreatePokemons() {

    const history = useNavigate()
    const [form, setForm] = useState({
        name:"",
        img:"",
        height:0,
        weight:0,
        type1:"",
        type2:"",
    })

    const handleInputChange = (e)=>{
        const value = e.currentTarget.value
        console.log(value)
        const setState = {...form,[e.currentTarget.name]:value}
        console.log(setState)
        setForm(setState)
    }
    
    const handleSubmitForm = async (e)=>{
        e.preventDefault()
        console.log(form)
        const sendInfo = await axios.post("http://localhost:3001/pokemons",form)
        history("/home")
    }
    

    return (
        <div className={createCss.mainContainer}>
            <form action="" 
            className={createCss.form}
            onSubmit={handleSubmitForm}>
                <span className={createCss.span}>Name:</span>
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="text" 
                name="name"
                value={form.name}
                placeholder="name"
                />
                <span className={createCss.span}>Img:</span>
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="text"
                name="img" 
                value={form.img}
                placeholder="img"
                />
                <span className={createCss.span}>Height:</span>
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="number" 
                name="height"
                value={form.height}
                placeholder="height"
                />
                <span className={createCss.span}>Weight:</span>
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="number" 
                name="weight"
                value={form.weight}
                placeholder="weight"
                />
                <span className={createCss.span}>Types:</span>
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="text" 
                name="type1"
                value={form.type1}
                placeholder="type"
                />
                <input 
                className={createCss.input}
                onChange={handleInputChange}
                type="text" 
                name="type2"
                value={form.type2}
                placeholder="type"
                />
                <button className={createCss.btn} type="submit"><Link to={"/pokemons"}></Link> Submit</button>
            </form>
        </div>
    );
}

export default CreatePokemons;