import { assets } from "../assets/assets";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-about">
          <img src={assets.logoo} className="footer-logo" alt="Logo" />
          <p className="footer-description">
            © 2025 <b>NIKE.</b> All rights reserved. Your ultimate destination
             for stylish Footwear, This is committed to bringing you the 
             best in  quality.  For any inquiries. please contact us.Nike@latest.com
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>+91 9089 09890</li>
            <li>contactus@Nike.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          Copyright 2025 @ Nike.com - All Right Reserved by <b> Nike Footwear </b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
