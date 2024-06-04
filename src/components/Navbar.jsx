import "../css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <Link className="logo-techin" to="/">
            <img src="/img/logo.png" alt="a" />
        </Link>
        <ul>
            <li><Link to="/institucional">Institucional</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>;
}

export default Navbar;