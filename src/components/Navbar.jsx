import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}> <img className='logo' src="./img/icon1.png" /> </Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}> CALL OF BURGUER</Link>
            </li>
            <li>
                <Link to={'/cardapio'}> MENU</Link>
            </li>

            <li>
                <Link to={'/new'} className="new-btn">
                    DEFINA SEU PEDIDO</Link>
            </li>

        </ul>
    </nav>
  )

}


export default Navbar