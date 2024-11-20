import "./HeaderView.css";
function headerView() {
    return (
        <div className="top-bar">
            <h className="logo">WacFlix</h>
            <div className="buttons">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </div>
    )
}
export default headerView;