import React, { useState } from "react";


function CreatePokemons() {
    const [form, setForm] = useState({
        name:"",
        img:"",
        height:0,
        weight:0,
        types:"",
    })

    const handleInputChange = (e)=>{
        const value = e.currentTarget.value
        console.log(value)
        const setState = {...form,[e.currentTarget.name]:value}
        setForm(setState)
        console.log(setState)
    }
    
    const handleSubmitForm = async (e)=>{
        e.preventDefault()
        const sendInfo = await fetch("http://localhost:3001/pokemons",{
            method: "POST",
            body: JSON.stringify(form)
        })
        const res = await sendInfo.json()
        console.log(res)
    }
    

    return (
        <div>
            <form action="" className=""
            onSubmit={handleSubmitForm}>
                <input 
                onChange={handleInputChange}
                type="text" 
                name="name"
                value={form.name}
                placeholder="name"
                />
                <input 
                onChange={handleInputChange}
                type="text"
                name="img" 
                value={form.img}
                placeholder="img"
                />
                <input 
                onChange={handleInputChange}
                type="number" 
                name="height"
                value={form.height}
                placeholder="height"
                />
                <input 
                onChange={handleInputChange}
                type="number" 
                name="weight"
                value={form.weight}
                placeholder="weight"
                />
                <input 
                onChange={handleInputChange}
                type="text" 
                name="types"
                value={form.types}
                placeholder="types"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePokemons;