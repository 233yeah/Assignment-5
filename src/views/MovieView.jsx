import "./MovieView.css";
import Header from "../components/Header";
import Genre from "../components/Genre";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MovieView() {

    return (
        <div>
            <Header />
            <div className="middle-container">
                <Genre />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MovieView;