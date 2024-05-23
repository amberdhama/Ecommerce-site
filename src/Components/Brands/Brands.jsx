import React from "react";
import BrandLogo from "./BrandLogo";

function Brands() {
  return (
    <div className="brands">
      <div className="smallcontainer">
        <div className="row">
          <BrandLogo img="../../../Images/images/logo-godrej.png"/>
          <BrandLogo img="../../../Images/images/logo-coca-cola.png"/>
          <BrandLogo img="../../../Images/images/logo-oppo.png"/>
          <BrandLogo img="../../../Images/images/logo-paypal.png"/>
          <BrandLogo img="../../../Images/images/logo-philips.png"/>
        </div>
      </div>
    </div>
  );
}

export default Brands;
