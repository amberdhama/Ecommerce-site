import React from 'react';
import './Blogheader.css';
import Blheader from '../Blheader/Blheader';
import hero_image from '../../images2/hero_image.png';
import hero_image_back from '../../images2/hero_image_back.png';
import Heart from "../../images2/heart.png";
import Calories from "../../images2/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
function Blogheader() {
  const transition={type:'spring',duration:3};
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className='hero'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            {/* <Blheader/> */}
            {/* the best add */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile?'165px':'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* the hero heading */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            {/* experience figure */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+" />
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                    </span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix='+'/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <button className="btn2">Get Started</button>
                <button className="btn2">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn2">Join Now</button>
            <motion.div
             initial={{right:'-1rem'}}
             whileInView={{right:'4rem'}}
             transition={{transition}}
             className="heart-rate">
                <img src={Heart} alt=""/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition} 
                src={hero_image_back} 
                alt="" 
                className='hero-image-back'/>
        </div>   
        <motion.div
        initial={{right:"37rem"}}
        whileInView={{right:"28rem"}} 
        transition={{transition}}
        className="calories">
            <img src={Calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
        </motion.div>   
    </div>
  )
}

export default Blogheader;
