import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCouter from 'number-counter';
import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerHeight<=768 ? true: false;
  return (
    <div className='hero' id="home">
        <div className='blur h-blur'></div>
        <div className='left'>
            <Navbar />
            {/* hover animation */}
            <div className='animation'>
                <motion.div
                    initial={{left: mobile? "140px": '238px'}}
                    whileInView={{left: '8px'}}
                    transition={transition}
                ></motion.div>
                <span>It's Your Workout: Your Time</span>
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
                    <span>
                        <NumberCouter end={100} start={50} delay='4' preFix="+" />
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCouter end={969} start={800} delay='4' preFix="+" />
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCouter end={40} start={0} delay='4' preFix="+" />
                    </span>
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

            <motion.div 
             initial={{ right: "-1rem" }}
             whileInView={{ right: "4rem" }}
             transition={transition}
             className='heart-rate'>
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span>
                <span> 110 bpm</span>
            </motion.div>

            {/* hero images */}
            <img src={hero_image} alt="body-builder" className='hero-image' />
            <motion.img 
             initial={{right: "11rem"}}
             whileInView={{right: "20rem"}}
             transition={transition}
             src={hero_image_back} alt="background" className='hero-image-back' />

            {/* calories */}
            <motion.div 
             initial={{ right: "37rem "}}
             whileInView={{ right: "28rem" }}
             transition={transition}
             className='calories'>
                <img src={Calories} alt="calories-img" />
                <div>
                    <span>Calories Burned</span>
                    <span> 200 Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero