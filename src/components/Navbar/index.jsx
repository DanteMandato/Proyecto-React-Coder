import logo from '../../assets/logo.png';
import Cardwidget from '../Cartwidget';
import Itemlist from '../Itemlist';

const Navbar = () => {

    return(
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                <img src={logo} alt="Logo" />
                </figure>
                <ul className="navbar__menu">
                    <Itemlist label="Tienda" />
                    <Itemlist label="Talleres" />
                    <Itemlist label="Contacto" />
                    <li>
                        <a href="" className='navbar__link'>
                            <Cardwidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;