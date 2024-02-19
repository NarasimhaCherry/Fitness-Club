import React, { useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import {Link} from "react-scroll";

const Navbar = () => {

  const mobile = window.innerHeight<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='logo' />
      {menuOpened=== false && mobile===true?(
        <div style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px',}}
         onClick={() => setMenuOpened(true)}>
        <img src={Bars} alt="bars" style={{width: '1.5rem', height: '1.5rem'}} /></div>
      ): (
      <ul className='menu'>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          activeClass='active'
          to='home'
          span={true}
          smooth={true}
          >Home</Link></li>
       <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='programs'
          span={true}
          smooth={true}
          >Programs</Link></li>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='reasons'
          span={true}
          smooth={true}
          >Reasons</Link></li>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='plans'
          span={true}
          smooth={true}
          >Plans</Link></li>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='testimonials'
          span={true}
          smooth={true}
          >Testimonials</Link></li>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='join'
          span={true}
          smooth={true}
          >Join</Link></li>
        <li> 
          <Link 
          onClick={()=>setMenuOpened(false)}
          to='footer'
          span={true}
          smooth={true}
          >Footer</Link></li>
      </ul>
     )}
    </div>
  )
}

export default Navbar