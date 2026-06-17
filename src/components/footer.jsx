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
            Building modern digital experiences with scalable, secure and
            innovative solutions.
          </p>

          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Center */}

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>
        </div>

        {/* Right */}

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>hello@mybrand.com</p>

          <p>+91 98765 43210</p>

          <p>Kerala, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
