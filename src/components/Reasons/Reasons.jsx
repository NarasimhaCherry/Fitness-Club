import React from 'react'
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className='Reasons' id="reasons">
        {/* left side */}
        <div className='left-reas'>
            <img src={image1} alt="holding weight" />
            <img src={image2} alt="bicep curl" />
            <img src={image3} alt="tricp" />
            <img src={image4} alt="bicep" />
        </div>

        {/* right side */}
        <div className='right-reas'>
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>

            <div className='details-reas'>
                <div>
                    <img src={tick} alt="tick" />
                    <span>OVER 100+ EXPERT COACHES</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>YOU ARE STRONGER THAN YOU THINK</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span 
                style={{
                    color: 'var(--gray)',
                    fontWeight: "normal",
                      }}>
                    OUR PARTNERS
            </span>

            <div className='parters'>
                <img src={nb} alt="nd" />
                <img src={adidas} alt="adidas" />
                <img src={nike} alt="nike" />
            </div>
        </div>
    </div>
  )
}

export default Reasons