import React from "react";
import { Link, NavLink } from 'react-router-dom';

// import styles from "./navbar.module.scss";

export const Navbar = () => {

    const links = [
        { href: '/', label: 'Home', title: 'Vai alla home' },
        { href: '/catalogo', label: 'Catalogo' },
      ];


      return (
        <nav>
          <ul>
            {links.map(({ href, label, title }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  title={title ? title : label}
                  style={({ isActive }) => ({
                    pointerEvents: isActive ? 'none' : 'auto',
                    opacity: isActive ? 0.4 : 1,
                  })}
                  className={({ isActive }) =>
                    isActive ? 'nav nav--active' : 'nav'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      );
    };

export default Navbar;
