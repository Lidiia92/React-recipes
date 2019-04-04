import React from 'react';
import {NavLink} from 'react-router-dom';

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
          <button>Signout</button>
    </ul>
    <h5>Welcome, {props.session.getCurrentUser.username}</h5>
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