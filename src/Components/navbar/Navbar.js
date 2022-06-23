import { Link } from 'react-router-dom';
import './_navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/enrol'> Enrol </Link>
                </li>
                <li>
                    <Link to='/programme'> PROGRAMME </Link>
                </li>
                <li>
                    <Link to='/about'> ABOUT </Link>
                </li>
                <li>
                    <Link to='#'> CONTACT </Link>
                </li>
            </ul>

        </nav>
    );
}
 
export default Navbar;