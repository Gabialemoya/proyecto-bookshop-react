import React from 'react';

export default function Input(){

    function handleSubmit(){
        
    }

    function handleChange(){

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
        </form>
    )
}