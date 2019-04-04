import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
    <nav>
        <NavbarUnAuth />
    </nav>
);

const NavbarUnAuth = () => (

  <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/search">Search</NavLink></li>
        <li><NavLink exact to="/login">Login</NavLink></li>
        <li><NavLink exact to="/signup">Signup</NavLink></li>
  </ul>

);

export default Navbar;