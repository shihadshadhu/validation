import { Button, TextField, Typography } from '@mui/material'
import { color } from '@mui/system';
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var[input,setinput]=useState({
        fname:''
    });
    var [submited,setsubmitted]=useState(false)
    var[Validation,setvalidation]=useState({
        fname:''
    })
    const inputhandler =(e)=>{
        const {name,value}=e.target
        setinput({...input,[name]:value})   
    }
    const checkvalidation=()=>{
        let error = Validation;
        if(!input.fname.trim()){
            error.fname='Enter the first name'
        }else{
            error.fname=''
        }
        setvalidation(error)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setsubmitted(true)
    }
    useEffect(()=>{
        checkvalidation()
    })
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <TextField label="first name" onChange={inputhandler} name='fname'
        value={inputhandler.fname}/><br></br>
      
{ (Validation.fname&&submited)&&<p>{Validation.fname}</p>}
      <Button variant="contained" type='submit'>save</Button>
      </form>
    </div>
  )
}

export default Validation
