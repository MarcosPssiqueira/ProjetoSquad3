import { Link } from "react-router-dom";

import './Navbar.css'

import LogoMarca from "../images/logo1.png";

const Navbar = () => {
  return (
    <nav className= "navbar">
        <h2>
            <Link to={`/`}> Call of Burguer</Link>
        </h2>
        <ul>
            
            <li>
                <Link to={`/menu`} className="new-btn"> Menu </Link>
            </li>
            <li>
                <Link to={`/new`}> Reviews </Link>
            </li>
            <li>
                <Link to={`/quemsomos`}> Quem Somos?</Link>
            </li>
            <li>
                <Link to={`/trabalheconosco`}> Trabalhe Conosco</Link>
            </li>
        </ul>
    </nav>
  )
};

export default Navbar;