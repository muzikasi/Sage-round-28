import { useState } from "react";

export default function Form(){
    const[fullName, setFullName]=useState("")

   function handleSubmit(e){
    e.preventDefault()
    alert(`your full name is ${fullName}`)
   }

   return <>
    <h1>My Form</h1>
    <form onSubmit={handleSubmit} >
        <label htmlFor="fullName">Full name</label>
        <input 
        type="text"
        id="fullName"
        placeholder="Enter Your Full Name" 
        value={fullName}
        onChange={(e)=>{
            setFullName(e.target.value)
        }}
        required/>
        <button type="submit">Submit</button>
    </form>
   </>
}