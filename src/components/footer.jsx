import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}

        <div className="footer-brand">
          <h2>MyBrand</h2>

          <p>
         Bringing the authentic taste of Kerala to every home with premium quality Kappa Chips.
          </p>

          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          

          
          </div>
        </div>

        {/* Center */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>

          <a href="#about">About</a>

     
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>hello@mybrand.com</p>

          <p>+91 00000 00000</p>

          <p>Kerala, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
