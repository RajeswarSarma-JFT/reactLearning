import React from 'react'

class Form extends React.Component{
     constructor(props){
         super(props)
         this.state={name:''}
        //  this.chan=this.chan.bind(this)
     }
     inp=(e)=>{
this.setState({
    name:e.target.value
})
}

    render(){
        return (
        <div><div>{this.state.msg}</div>
            {/* <button onClick={this.chan.bind(this)}>click</button> */}
            {/* <button onClick={()=>{this.chan()}}>click</button> */}
            <label for="name">name</label>
            <input onInput={this.inp} id="name" type="text" value={this.state.name}/><br/>
        <label >{this.state.name}</label>
        </div>
        )
    }
}
export default Form;