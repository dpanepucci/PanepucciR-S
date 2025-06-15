import { Link, useLocation } from 'react-router-dom';
import '../styles/NavStyle.css';

// NavTab Links
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // About Me Tab, default home page
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Info
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Portfolio Tab
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Reviews
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Skill"
          // Resume Tab
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Contact Tab
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;