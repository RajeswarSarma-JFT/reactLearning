import React from 'react';
function Arrange(props){
    console.log(props)
    return(
        <div>
            <h4>{props.data.title}</h4>
            <p>{props.data.body}</p>
        </div>
    )
}
export default Arrange