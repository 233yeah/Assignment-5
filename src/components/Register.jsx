import "./Register.css";
import { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="register-container">
            <h className="register-title">Join Us!</h>
            <form className="register-form" onSubmit={(event) => { login(event) }}>
                <label className="register-text">First Name:</label>
                <input type="text" className="register-inputs" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                <label className="register-text">Last Name:</label>
                <input type="text" className="register-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                <label className="register-text">Email:</label>
                <input type="text" className="register-inputs" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                <label className="register-text">Password:</label>
                <input type="text" className="register-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                <label className="register-text">Re-Enter Password:</label>
                <input type="text" className="register-inputs" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                <button className="register-button">Sign Up</button>

            </form>
        </div>
    )
}
export default Register;