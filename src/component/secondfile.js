import React from 'react';
function Second({name}){
    console.log(this)
    return(
        <div>
            <h1>hiddddddddddd {name}</h1>
        </div>
    )
}
export default Second;