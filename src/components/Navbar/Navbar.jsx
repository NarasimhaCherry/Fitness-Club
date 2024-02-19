import React from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='logo' />
      
      <ul className='menu'>
        <li>Home</li>
        <li>Product</li>
        <li>Review</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar