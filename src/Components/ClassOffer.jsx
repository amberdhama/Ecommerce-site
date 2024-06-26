import React from "react";
import im from "../assets/images/exclusive.png"
function ClassOffer() {
  return (
    <div className="offer">
      <div className="smallcontainer">
        <div className="row">
          <div className="col-2">
            <img src={im} className="offer-img" alt="Exclusive Offer" />
          </div>
          <div className="col-2">
            <p>Exclusively Available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small>
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.
            </small>
            <br />
            <a href="#" className="btn">Buy Now &#8594;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassOffer;
