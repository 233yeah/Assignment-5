import "./Header.css";
function Header() {

    return (
        <div className="tb-item top-bar">
            <h className="logo">WacFlix</h>
            <div className="buttons">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </div>
    )
}
export default Header;