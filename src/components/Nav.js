import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="p-nav">
        <Link to="/">SuperStore</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  )
}
export default Nav