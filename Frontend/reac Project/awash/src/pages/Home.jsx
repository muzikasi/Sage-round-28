import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    function handleLogin() {
        navigate('/courses')
    }
    return <>
        <h1>Home Page</h1>
        <button onClick={() => handleLogin()}>Login</button>
    </>
}