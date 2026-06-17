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
            <img src="/kappa.avif" alt="About" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>

            <p>
              We are a passionate team focused on creating innovative digital
              products that solve real-world business problems.
            </p>

            <p>
              Our solutions combine modern design, performance and technology to
              deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>

        <div className="about-cards">
          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <FaBullseye />

            <h3>Mission</h3>

            <p>Deliver reliable and scalable solutions.</p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ y: -10 }}>
            <FaEye />

            <h3>Vision</h3>

            <p>Empower businesses through technology.</p>
          </motion.div>
        </div>

        {/* Statistics */}

        <div className="stats">
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
