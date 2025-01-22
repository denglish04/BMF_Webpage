import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo Container */}
      <div className="logo-container">
        <img 
          src={logo} 
          alt="BMF Occidental College Logo" 
          className="site-logo"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu" aria-label="Main Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/pillars">Pillars</Link></li>
          <li><Link to="/eboard">E-Board</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/history">History</Link></li>
        </ul>
      </nav>
    </header>
  );
}
