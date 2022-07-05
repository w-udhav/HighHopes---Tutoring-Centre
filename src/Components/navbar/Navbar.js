import { useState } from 'react';
import { Link } from 'react-router-dom';
import './_navbar.scss'
import { CgDetailsMore } from 'react-icons/cg'
import { TbArrowsCross } from 'react-icons/tb'
import { Button } from '@mui/material';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }
    return (
        <nav className="navbar">
            <div className="hamburgerBtnContain">
                <div>
                    <Button
                        onClick={handleToggle}
                        className='hamburgerBtn'
                    >
                        {navbarOpen ? <TbArrowsCross size={30} /> : <CgDetailsMore size={30} />}
                    </Button>
                </div>
            </div>
            <div className={`hamburger ${navbarOpen ? "showMenu" : ""}`}>
                <ul id='hamMenu'>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/enrol'> Enrol </Link>
                    </li>
                    <li>
                        <Link to='/programme'> Programme </Link>
                    </li>
                    <li>
                        <Link to='/about'> About </Link>
                    </li>
                    <li>
                        <Link to='contact'> Contact </Link>
                    </li>
                </ul>
            </div>


            <div className="nav-wrapp">
                <ul id='menu'>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/enrol'> Enrol </Link>
                    </li>
                    <li>
                        <Link to='/programme'> Programme </Link>
                    </li>
                    <li>
                        <Link to='/about'> About </Link>
                    </li>
                    <li>
                        <Link to='#'> Contact </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;