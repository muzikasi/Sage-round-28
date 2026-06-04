import {useParams} from "react-router-dom"
import Courses from "./Courses"
export default function CoursesDetail(){
    const {name}=useParams()
    return <>
        
        <h1>This is {name} Subject</h1>
    </>
}