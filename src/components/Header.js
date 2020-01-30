import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Header = () => (
  <header>
    <nav className="nav">
      <div className="title">Bookstore CMS</div>
      <div className="links">
        <ul>
          <li className="active">Books</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className="margin-left-auto avatar">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  </header>
);

export default Header;
