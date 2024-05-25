import React from "react";
import BrandLogo from "./BrandLogo";
import img1 from "../../assets/images/logo-godrej.png"
import img2 from "../../assets/images/logo-coca-cola.png"
import img3 from "../../assets/images/logo-oppo.png"
import img4 from "../../assets/images/logo-paypal.png"
import img5 from "../../assets/images/logo-philips.png"
function Brands() {
  return (
    <div className="brands">
      <div className="smallcontainer">
        <div className="row">
          <BrandLogo img={img1}/>
          <BrandLogo img={img2}/>
          <BrandLogo img={img3}/>
          <BrandLogo img={img4}/>
          <BrandLogo img={img5}/>
        </div>
      </div>
    </div>
  );
}

export default Brands;
