import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoBlanco.png";

export function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav" path="true">
      <ul>
        <li onClick={() => scrollToSection("home")}>
          <img src={Logo} alt="Logo Bold Studio" />
        </li>
      </ul>
      <ul>
        <li onClick={() => scrollToSection("about")}>
          <Link to="/#about">ABOUT US</Link>
        </li>
        <li onClick={() => scrollToSection("work")}>
          <Link to="/#work">WORK</Link>
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <Link to="/#contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/login">ADMIN</Link>
        </li>
      </ul>
    </nav>
  );
}
