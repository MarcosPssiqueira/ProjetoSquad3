import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import './Footer.css'
export default function Footer () {

    return (
        <div className="Footer">
        <h3>Call of Burguer</h3>
        <p> Call of Burguer... loremlorem lorem lorem lorem lorem</p>
        <ul className="listaFooter">
            <li><img className="imgFooter" src={instagram} alt="" /></li>
            <li><img className="imgFooter" src={facebook} alt="" /> </li>
            <li><img className="imgFooter" src={twitter} alt="" /> </li>
            
        </ul>
        </div>
    )
};