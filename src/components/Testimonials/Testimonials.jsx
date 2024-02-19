import React, { useState } from 'react'
import './Testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import {motion} from 'framer-motion';

const Testimonials = () => {
    const transition = { type: "spring", duration: 3};

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className='Testimonials' id="testimonials">
        {/* left */}
        <div className='left-test'>
            <span>Testimonials</span>
            <span className='stroke-text'>What They</span>
            <span>say about us</span>
            <motion.span
              key={selected}
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 100}}
              transition={transition}
             >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--yellow)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        {/* right */}
        <div className='right-test'>
            <motion.div
             initial={{ opacity: 0, x: -100}}
             transition={{...transition, duration: 2}}
             whileInView={{ opacity: 1, x: 0}}
            >
            </motion.div>
            <motion.div
             initial={{ opacity: 0, x: 100}}
             transition={{...transition, duration: 2}}
             whileInView={{ opacity: 1, x: 0}}
            >
            </motion.div>
            <motion.img
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate={{opacity: 1, x: 0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}
             src={testimonialsData[selected].image} alt="image1" />

            <div className='arrows'>
                <img 
                onClick={() =>{
                     selected===0
                     ? setSelected(tLength-1)
                     : setSelected((prev) => prev - 1);
                }}
                src={LeftArrow} alt="left-arrow" />
                <img
                onClick={() =>{
                    selected===tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
               }}
                src={RightArrow} alt="right-arrow" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials