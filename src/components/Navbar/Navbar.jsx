// import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Menu from '../../assets/icons/menu-vr-svg.svg';
import Logo from '../../assets/images/home/logo-banco-universitario-no-background.png';

const Navbar = () => {
    return (
      <header className="header-container">

        <div className="left-section">
          <img src={Menu} alt="menu" className="menu-icon" />
          <img src={Logo} alt="logo" className="main-logo" />
        </div>
  
        {/* Sección derecha */}
        <div className="right-section">
          <button className="login-button">
            Iniciar Sesión
          </button>
          <button className="register-button">
            Registrar
          </button>
        </div>
      </header>
    );
  };
  
  export default Navbar;