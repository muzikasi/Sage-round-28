import { useEffect, useRef, useState } from "react"
import TestMemo from "./TeseMemo"
import Form from "./Form"

export default function App(){
  const clickCount = useRef(0)
  const [count, setCount]=useState(0)


  useEffect(()=>{
    console.log("Render")
  })
  return <>  
    <h1>Welcome!</h1>
    <button onClick={()=>{
      setCount(count+1)
      clickCount.current =clickCount.current + 1
      console.log(clickCount.current)
    }}>Click</button>

    <TestMemo/>
    <Form/>
  </>
}