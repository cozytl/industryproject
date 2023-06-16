import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav__container">
        <h1 className="nav__logo-image">Ecowise</h1>

        <div className="nav__bar">
          <p className="nav__bar--item active">Home</p>
          <p className="nav__bar--item">About</p>
          <p className="nav__bar--item">Contact</p>
          <p className="nav__bar--item">Profile</p>
        </div>
      </div>
    </header>
  );
}
