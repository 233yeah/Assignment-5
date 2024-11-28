import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function loginPage() {
        navigate(`/login`);
    }
    function registerPage() {
        navigate(`/register`);
    }

    return (
        <div className="tb-item top-bar">
            <h className="logo">WacFlix</h>
            <div className="buttons">
                <button onClick ={() => { registerPage()}}> Sign Up</button>
                <button onClick ={() => { loginPage()}}>Sign In</button>
            </div>
        </div>
    )
}
export default Header;