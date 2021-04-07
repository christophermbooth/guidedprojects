import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';


const Nav: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink exact to="/" className="logo-link">Super Store</NavLink>
      </div>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/deals">Deals</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
    </nav>
  )
}
export default Nav
