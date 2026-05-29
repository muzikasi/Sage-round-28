import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function CoursesDetail(){
    return <>
        <NavBar/>
        <Outlet/>
        <h1>English Course from details</h1>
    </>
}