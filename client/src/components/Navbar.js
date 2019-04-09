import React from 'react';
import {NavLink} from 'react-router-dom';

import Signout from './Auth/Signout';

const Navbar = (props) => {
    console.log(props);

    return(
        <nav>
            {props.session && props.session.getCurrentUser ? <NavbarAuth session={props.session}/> : <NavbarUnAuth />}
        </nav>
    );

}


const NavbarAuth = (props) => (

    <>
    <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/search">Search</NavLink></li>
          <li><NavLink exact to="/recipe/add">Add Recipe</NavLink></li>
          <li><NavLink exact to="/profile">Profile</NavLink></li>
          <Signout />
    </ul>
    <h5>Welcome, <strong>{props.session.getCurrentUser.username}</strong></h5>
   </>
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