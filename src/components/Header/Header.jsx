import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
    return (
        <header className="nav">
            <div className="nav__logo-box">
                <img className="nav__logo-image" src={logo} alt="logo" />{" "}
            </div>
            <div className="nav__bar">
                <h3 className="nav__bar--item">Home</h3>
                <h3 className="nav__bar--item">About</h3>
                <h3 className="nav__bar--item">Contact</h3>
                <h3 className="nav__bar--item">Profile</h3>
            </div>
        </header>
    );
}
