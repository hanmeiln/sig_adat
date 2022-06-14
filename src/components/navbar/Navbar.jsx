import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
            SIG-Adat <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>          
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Tentang
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/peta' className='nav-links' onClick={closeMobileMenu}>
                  Peta Adat
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/dataadat' className='nav-links' onClick={closeMobileMenu}>
                  Daftar Adat
                </Link>
              </li>
            </ul>
        </div>
    </nav>
    </>
  )

}

export default Navbar