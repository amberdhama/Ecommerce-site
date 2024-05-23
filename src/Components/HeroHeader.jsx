import React from "react";
var a=10;
function HeroHeader() {
    return (
        
        <div className="header">
        <div className="container">
        <div className="row">   
            <div className="col-2">
                <h1>Give Your Workout<br />A New Style!</h1>
                <p>Success isn't always about greatness. It's about consistency. consistent<br />hard work gains success. Greatness will come.</p>
                <a href="" className="btn">Explore Now &#8594;</a>
            </div>
            <div className="col-2">
                <img src="Images\images\image1.png" alt="Workout" />
            </div>
        </div>
        </div>
        </div>
        

    );
}

export default HeroHeader;
