import './NavBar.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoBlanco.png'

export function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='nav' path>
      <ul>
        <li><img src={Logo} alt="Logo Bold Studio"/></li>
      </ul>
       <ul>
        <li onClick={() => scrollToSection("about")}>ABOUT US</li>
        <li onClick={() => scrollToSection("work")}>WORK</li>
        <li onClick={() => scrollToSection("contact")}>CONTACT</li>
        {/* <li><Link to="/login">Admin</Link></li> */}
      </ul>
    </nav>
  );
}