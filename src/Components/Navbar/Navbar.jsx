import './Navbar.css'
import Logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../../ThemeContext'

const Navbar = () => {

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("cyber");
    } else {
      setTheme("light");
    }
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

      <img src={Logo} alt="Logo" className='logo' />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>

        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>

        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>

        {/* Theme Button */}
        <li>
          <button className="theme-btn" onClick={changeTheme}>
            {theme === "light" && "☀️"}
            {theme === "dark" && "🌙"}
            {theme === "cyber" && "🚀"}
          </button>
        </li>

        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
           Contact Us
          </Link>
        </li>

      </ul>

      <img
        src={menu_icon}
        alt=""
        className='menu-icon'
        onClick={toggleMenu}
      />

    </nav>
  )
}

export default Navbar;