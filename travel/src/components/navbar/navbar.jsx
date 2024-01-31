import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './navbar.css'
import logoImage from '../../assets/images/safari logo.png'

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState (false)
    const location = useLocation();

    useEffect(() => {
        // Close the navbar when the route changes
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleClick = () => {
        if (menuOpen) {
            setMenuOpen(false); // Close the menu only if it's open
        }
    }
    return(
        <header>
            <Link to="/" className="logo">
                <img src={logoImage} alt="Logo" width={40}/>
            </Link>
            <ul id="navbar" className={menuOpen?"open":""}>
                <li><Link to='/' onClick={handleClick}>Home</Link></li>
                <li><Link to='/city' onClick={handleClick}>City</Link></li>
                <li><Link to='/expeditions' onClick={handleClick}>Expeditions</Link></li>
                <li><Link to='/packages' onClick={handleClick}>Packages</Link></li>
                <li><Link to='/about' onClick={handleClick}>About</Link></li>
                <li><Link to='/contact' onClick={handleClick}>Contact</Link></li>
            </ul>
            <div className={`bx bx-menu ${menuOpen ? 'open' : ''}`} id="menu-icon"  onClick={toggleMenu} ></div>
        </header>
    )
}