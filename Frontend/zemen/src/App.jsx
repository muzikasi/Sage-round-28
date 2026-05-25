import {use, useState} from 'react'
export default function App(){
    const [counter, setCounter]=useState(0)
    const [text, setText]=useState("ON")
    return <>
    <h1>{counter}</h1>
    <button onClick={()=> {setCounter(counter+1)}}>Add</button>
    <button onClick={()=> {setCounter(counter-1)}}>Subtract</button>
    <button onClick={()=> {setCounter(0)}}>Reset</button>

    <h1>{text}</h1>
    <button onClick={() => setText("ON")}>ON</button>
    <button onClick={()=> setText("OFF")} >OFF</button>

    </>
}