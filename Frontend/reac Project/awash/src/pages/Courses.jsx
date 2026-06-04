import { Link } from "react-router-dom";
import CoursesDetail from "./CoursesDetail";
export default function Courses(){
    return <>
        <br />
        <br />
        <Link to="/courses/english">English</Link><br />
        <Link to="/courses/biology">Biology</Link><br />
        <Link to="/courses/math">Math</Link><br />
        <Link to="/courses/physics">Physics</Link><br />
    </>
}