import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/style.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">

        <ul className="links">
          <li>
            <NavLink to="/" className="link">
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="link">
              DetailPage
            </NavLink>
          </li> 
          
        </ul>
      </nav>
    </div>
  );
}