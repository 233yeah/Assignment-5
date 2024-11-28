import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function moviePage() {
        navigate(`/movie`);
    }

    return (

        <div className="login-container">
            <h1>Welcome Back</h1>
            <form className="login-form" onSubmit={(event) => { login(event) }}>
                <label className="login-text">Email:</label>
                <input type="text" className="login-inputs" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                <label className="login-text">Password:</label>
                <input type="text" className="login-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                <button className="login-button" onClick={() => { moviePage() }}>Sign In</button>
            </form>
        </div>
    )
}
export default Login;