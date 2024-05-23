import React from "react";
import "./about.css"
import Blogheader from "./Components/Blogheader/Blogheader";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Plans from "./Components/Plans/Plans";
import Review from './Components/Review/Review';
import Join from "./Components/Join/Join";
function About() {
  return (
    <div className='about'>
        <Blogheader/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Review/>
        <Join/>
    </div>
  )
}

export default About;
