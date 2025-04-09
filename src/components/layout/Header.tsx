import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/users';

  return (
    <header className="app-header">
      <div className="header-content">
        <nav className="main-nav">
          <ul>
            <li className={isHome ? 'active' : ''}>
              <Link to="/users">Пользователи</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;