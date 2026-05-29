import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
export default function Courses(){
    return <>
        <br />
        <br />
        <Link to="/english">English</Link><br />
        <Link to="/biology">Biology</Link><br />
        <Link to="/math">Math</Link><br />
        <Link to="/physics">Physics</Link><br />
    </>
}