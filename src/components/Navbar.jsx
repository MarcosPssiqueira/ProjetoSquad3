import { Link } from "react-router-dom"

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className= "navbar">
        <h2>
            <Link to={`/`}> Call of Burguer</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}> Home </Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn"> Reviews </Link>
            </li>
            <li>
                <Link to={`/menu`}> Menu </Link>
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
}

export default Navbar;