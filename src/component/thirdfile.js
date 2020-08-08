import React, { useState } from 'react'

function Form(){
    const [ name, setName ]=useState('ff')
    function inp(e){
        console.log(e.target.value)
        setName(
            e.target.value
        )
        
    }
    return (
        <div>
            <label htmlFor="namve">name</label>
            <input onChange={inp} id="namve" type="text" value={name} /><br/>
            <label >{name}</label>
        </div>
        )
}


export default Form;