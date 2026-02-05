import CartWidget from "../CartWidget/CartWidget";
import logo from '../../img/logo.png';
import { Link , NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">

            <Link className="nav-brand" to="/">
                <img id="logo" src={logo} alt="Logo" />
            </Link>

            <ul className="nav-list">
                <NavLink className="nav-item" to="/category/carteras">Carteras</NavLink>
                <NavLink className="nav-item" to="/category/bolsos">Bolsos</NavLink> 
                <NavLink className="nav-item" to="/category/billeteras">Billeteras</NavLink>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar;  