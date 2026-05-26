import {useState, useEffect} from 'react'

export default function Effect(){
    const[counter,setCounter]=useState(0)
    const[counter2,setCounter2]=useState(0)

        useEffect(()=>{
            console.log("Effect from Effect component")
        },)

    return <>
    <h1>Learnning useEffect</h1>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Add from Effect</button>

    <h1>{counter2}</h1>
    <button onClick={()=>setCounter2(counter2+1)}>Add from Effect for counter2</button>


    </>
}