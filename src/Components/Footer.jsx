import React from "react";
var date=new Date;
var year=date.getFullYear()
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and iOS mobile phone.</p>
            <div className="app-logo">
              <img src="../../Images/images/play-store.png" alt="Play Store" />
              <img src="../../Images/images/app-store.png" alt="App Store" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src="../../Images/images/logo-white.png" alt="Logo" />
            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright {year} Suri Developers</p>
    </div>
  );
}

export default Footer;
