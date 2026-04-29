import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo.png';
import Cardwidget from '../../components/Cartwidget';
import Menu from '../../components/Menu';

const Header = () => {
    const links = [
        { label: 'Tienda', href: '/' },
        { label: 'Talleres', href: '/talleres' },
        { label: 'Contacto', href: '/contacto' },
    ];

    return (
        <header className="header">
            <nav className="navbar container">
                <figure className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </figure>
                <Menu className="navbar__menu" links={links}>
                    <li className="navbar__item--cart">
                        <Link to="/carrito" className="navbar__link">
                            <Cardwidget />
                        </Link>
                    </li>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;
