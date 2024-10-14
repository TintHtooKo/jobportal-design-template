import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './NavBar.css';
import Bar from '../../assets/white-bar.png';
import X from '../../assets/cross.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className='logo'><Link to={'/'} onClick={handleMenuClick}>CAREER</Link></div>

      <div className={`menu`}>
        <ul>
          <li><Link to={'/'} onClick={handleMenuClick}>Home</Link></li>
          <li><Link to={'/about'} onClick={handleMenuClick}>About</Link></li>
          <li><Link to={'/job'} onClick={handleMenuClick}>Job</Link></li>
          <li><Link to={'/service'} onClick={handleMenuClick}>Service</Link></li>
          <li><Link to={'/contact'} onClick={handleMenuClick}>Contact</Link></li>
        </ul>
      </div>

      <div className={`mob-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <img src={X} className='cross' onClick={toggleMenu} />
          <li><Link to={'/'} onClick={handleMenuClick}>Home</Link></li>
          <li><Link to={'/about'} onClick={handleMenuClick}>About</Link></li>
          <li><Link to={'/job'} onClick={handleMenuClick}>Job</Link></li>
          <li><Link to={'/service'} onClick={handleMenuClick}>Service</Link></li>
          <li><Link to={'/contact'} onClick={handleMenuClick}>Contact</Link></li>
          <li>
          <div className='mob-login-btn'>
            <Link to={'/login'} onClick={handleMenuClick}>Login</Link>
          </div>
          </li>
        </ul>
      </div>

      <div className='login-btn'>
        <Link to={'/login'} onClick={handleMenuClick}>Login</Link>
      </div>

      <img src={Bar} alt="bar" className='bar' onClick={toggleMenu} />
    </nav>
  );
}
