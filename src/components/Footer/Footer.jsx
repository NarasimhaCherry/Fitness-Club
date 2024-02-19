import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='Footer-container' id="footer">
        <hr />
        <div className='footer'>
            <div className='social-links'>
               <a href="https://github.com/NarasimhaCherry"><img src={Github} alt="github" style={{width: '3rem', height: '3rem'}}/></a>
               <a href="https://www.instagram.com/mr.___.cherry/"><img src={Instagram} alt="instagram" style={{width: '3rem', height: '3rem'}} /></a>
               <a href="https://www.linkedin.com/in/narasimha-charithartha/"><img src={LinkedIn} alt="linkedin" style={{width: '3rem', height: '3rem'}} /></a>
            </div>
            <div className='logo-fot'>
                <img src={Logo} alt="logo" />
            </div>
        </div>

        <div className='blur f-blur-1'></div>
        <div className='blur f-blur-2'></div>
    </div>
  )
}

export default Footer