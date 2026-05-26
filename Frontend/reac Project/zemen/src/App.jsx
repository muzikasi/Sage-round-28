import {useEffect} from 'react'
import Effect from './Effect'
import Effect2 from './Effect2'


export default function App(){

    useEffect(()=>{
        console.log("Effect from App Component")
    })

    return <>
    <Effect2/>
    <Effect/>
    </>
}