import "./LoginView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function genrePage() {
        navigate(`/movie/genre/28`);
    }

    return (
        <div>
            <Header />
            <div className="login-container">
                <h className="login-title">Welcome Back</h>
                <form className="login-form" onSubmit={(event) => { login(event) }}>
                    <label className="login-text">Email:</label>
                    <input type="text" className="login-inputs" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                    <label className="login-text">Password:</label>
                    <input type="text" className="login-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                    <button className="login-button" onClick={() => { genrePage() }}>Sign In</button>
                </form>
            </div>
            <Footer />
        </div>

    )
}

export default LoginView;