//Navbar
import './navbar.css'

function Navbar(){
    return (
        <nav className="navbar">
            <a href="/" className='siteTitle'>Emmy Fong</a>
            <ul>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;