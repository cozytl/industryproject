import "./Header.scss";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="nav">
      <div className="nav__container">
        <h1 className="nav__logo-image">Ecowise</h1>

        <div className="nav__bar">
          <NavLink to="/" className="nav__bar--item">
            Home
          </NavLink>
          <p className="nav__bar--item">About</p>
          <p className="nav__bar--item">Contact</p>
          <p className="nav__bar--item">Profile</p>
        </div>
      </div>
    </header>
  );
}
