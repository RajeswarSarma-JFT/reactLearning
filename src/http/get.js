import React, {useEffect, useState} from 'react';
import Arrangedata from './arrange.js'
import axios from 'axios'

function GetDataaa(){
    const [datavar,dataVarChange]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            dataVarChange(res.data)
            
        }).catch(err=>{
            console.log(err)
        })
    },[])
    console.log(datavar)
    const apiinfo=datavar.map((data,i)=><Arrangedata key={i} data={data}/>)
    return (
        
        <div>
            <h1> API calls with React Hooks </h1>
        {apiinfo}
        </div>
    );
}
export default GetDataaa
