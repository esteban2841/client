import React, { useState } from "react";
import createCss from "../styles/create.module.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function CreatePokemons() {

    const history = useNavigate()

    const [form, setForm] = useState({
        proof:"",
        name:"",
        img:"",
        height:0,
        weight:0,
        type1:"",
        type2:"",
    })
    const [errors, setErrors] = useState({})


    

    const handleInputChange = (e)=>{
        const value = e.currentTarget.value
        const setState = {...form,[e.currentTarget.name]:value}
        const validation = validate(form)
        setErrors(validation)
        setForm(setState)
    }
    
    const handleSubmitForm = async (e)=>{
        e.preventDefault()
        const validation = (validate(form))
        
        if(Object.keys(validation).length > 0){
            setErrors(validation)
            console.log(errors)

        }else{

            const sendInfo = await axios.post( "http://localhost:3001/pokemons" , form )
            history("/home")

        }
        
    }
    

    return (
        <div className={createCss.mainContainer}>
            <form action="" 
            className={createCss.form}
            onSubmit={handleSubmitForm}>
                <Input type="text" 
                name="proof"
                value={form.proof}
                handleInputChange={handleInputChange}
                error={errors.proof}/>
                
                <Input 
                    name='name'
                    type='text'
                    value={form.name}
                    handleInputChange={handleInputChange}
                    placeholder='name'
                    error={errors.name}
                    />
                <Input 
                    name='img'
                    type='text'
                    value={form.img}
                    handleInputChange={handleInputChange}
                    placeholder='img'
                    />
                <Input 
                    name='height'
                    type='number'
                    value={form.height}
                    handleInputChange={handleInputChange}
                    placeholder='height'
                />
                <Input 
                    name='weight'
                    type='number'
                    value={form.weight}
                    handleInputChange={handleInputChange}
                    placeholder='weight'
                />
              
                <Input 
                    name='type1'
                    type='text'
                    value={form.type1}
                    handleInputChange={handleInputChange}
                    placeholder='type'
                    error={errors.type1}
                />
                <Input 
                    name='type2'
                    type='text'
                    value={form.type2}
                    handleInputChange={handleInputChange}
                    placeholder='type'
                    error={errors.type2}
                />
                
                <button className={createCss.btn} type="submit"><Link to={"/pokemons"}></Link> Submit</button>
            </form>
        </div>
    );
}


function Input({type,name,value,placeholder,handleInputChange, error}){
    
    return(
        <div className={createCss.containerInput}>
            <span className={createCss.span}>{name}:</span>
            <input 
            className={createCss.input}
            onChange={handleInputChange}
            type={type} 
            name={name}
            value={value}
            placeholder={placeholder}
            />
            <p className='errors'>{ error && error }</p>
        </div>
    )
}

function validate( form ){

    const errorsToPass = {}
    const antiNumbers = (string)=> /^[a-z]+$/.test(string) 
    const antiSpacesCapsNumbersEvaluator = (string)=> /^[a-z][a-z]\S*$/.test(string) && !/([0-9]{1,254})/.test(string) 
    
    if( form.name && !antiNumbers(form.name)){
        errorsToPass.name = "Name must contain only 20 characters and lower case letters"
    }
    if( form.type1 && !antiSpacesCapsNumbersEvaluator(form.type1)){
        errorsToPass.type1 = "Type must contain only lower case letters and no spaces"
    }
    if( form.type2 && !antiSpacesCapsNumbersEvaluator(form.type2)){
        errorsToPass.type2 = "Type must contain only lower case letters and no spaces"
    }
    if(form.proof && !antiNumbers(form.proof)){
        errorsToPass.proof="Name must contain only 20 characters and lower case letters"
    }
    console.log(errorsToPass)
    return errorsToPass
}



export default CreatePokemons;
