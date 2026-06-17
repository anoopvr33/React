import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";

import "../assets/css/whyUs.css";

export default function WhyChooseUs() {
  return (
    <section className="choose">
      {/* Left */}

      <motion.div
        className="choose-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="tag">WHY CHOOSE US</span>

        <h2>Build Smarter Digital Products Faster</h2>

        <p>
          We create scalable, modern, and user-friendly applications that help
          businesses grow with speed and reliability.
        </p>

        <div className="features">
          <div className="feature">
            <FaRocket />

            <div>
              <h4>Fast Performance</h4>

              <p>Optimized for speed and responsiveness.</p>
            </div>
          </div>

          <div className="feature">
            <FaShieldAlt />

            <div>
              <h4>Secure Platform</h4>

              <p>Built with modern security standards.</p>
            </div>
          </div>

          <div className="feature">
            <FaChartLine />

            <div>
              <h4>Business Growth</h4>

              <p>Solutions designed to scale easily.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right */}

      <motion.div
        className="choose-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/kappa.avif" alt="dashboard" />
      </motion.div>
    </section>
  );
}
