import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="app-store-play">
    
        <p>
        Get an extra 10% off with your student ID!
        </p>
        <div className="icon-footer appstore">
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-google-play"></i>
            <span>Google Play Store</span>
          </div>
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-app-store-ios"></i>
            <span>Apple App Store</span>
          </div>
        </div>
      </div>
      <div className="">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stories</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="">
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center</li>
          <li>How To Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      <div className="">
        <h2>Contact Us</h2>
        <ul>
          <li>9/349 fishermen colony</li>
          <li className="contact-info-flex">
            Email :
            <a
              target="_blank"
              href="mailto:zajampratik@gmail.com"
              className="icon-flex phone-icon"
            >
             zajampratik@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Phone :{" "}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=9082684754"
              className="icon-flex phone-icon"
            >
              +919082684754
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
