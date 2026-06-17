import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaUsers, FaGlobe } from "react-icons/fa";

import "../assets/css/about.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar></Navbar>
      <section className="about-page">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>ABOUT US</span>

          <h1>Building Modern Digital Experiences</h1>

          <p>
            We help businesses transform ideas into scalable, secure and
            user-friendly products.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/3030972_429633-PE4QDE-696.jpg" alt="About" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>

            <p>
              At Malabar Foods, we are passionate about bringing Kerala's traditional flavours to modern snack lovers. Our Kappa Chips are prepared using high-quality tapioca sourced from trusted farms and crafted with authentic recipes that preserve the true taste of Malabar.
            </p>

            <p>
             Every batch is made with a focus on freshness, quality, and consistency so customers can enjoy a delicious and satisfying snack anytime.
            </p>
          </motion.div>
        </div>

        <div className="about-cards">
          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <FaBullseye />

            <h3>Mission</h3>

            <p>Deliver clean and tasty foods.</p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <FaEye />

            <h3>Vision</h3>

            <p>Empower businesses through sweets.</p>
          </motion.div>
        </div>

        {/* Statistics */}

        <div className="statss">
          <div>
            <FaUsers />

            <h3>500+</h3>

            <p>Clients</p>
          </div>

          <div>
            <FaGlobe />

            <h3>20+</h3>

            <p>Countries</p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
