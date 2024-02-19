import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left'>
            <Navbar />
            {/* hover animation */}
            <div className='animation'>
                <div></div>
                <span>It is what it is.</span>
            </div>

            {/* Heading */}
            <div className='heading'>
                <div>
                    <span className='stroke-text'>Today's </span>
                    <span>pain</span>
                </div>
                <div>
                    <span>Tomorrows Gain</span>
                </div>
                <div>
                    <span>
                    The hard days are the best because that's when champions are made, so if you push through, you can push through anything
                    </span>
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
                <div>
                    <span>+ 100 </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+ 900 </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+ 40 </span>
                    <span>fitess programs</span>
                </div>
            </div>
            
            {/* buttons */}
            <div class="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right'>
            <button className='btn'>Join Now</button>
            <div className='heart-rate'>
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span>
                <span> 110 bpm</span>
            </div>

            {/* hero images */}
            <img src={hero_image} alt="body-builder" className='hero-image' />
            <img src={hero_image_back} alt="background" className='hero-image-back' />

            {/* calories */}
            <div className='calories'>
                <img src={Calories} alt="calories-img" />
                <div>
                    <span>Calories Burned</span>
                    <span> 200 Kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero