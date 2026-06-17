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

        <h2>Authentic Kerala Taste/Hygienic Preparation</h2>

        <p>
          Made from carefully selected fresh tapioca roots.Manufactured with strict quality and hygiene standards.
        </p>

        <div className="features">
          <div className="feature">
            <FaRocket />

            <div>
              <h4>Tasty</h4>

              <p>A snack loved by all age groups.</p>
            </div>
          </div>

          <div className="feature">
            <FaShieldAlt />

            <div>
              <h4>Freshly Packed</h4>

              <p>Sealed to preserve freshness and flavour.</p>
            </div>
          </div>

          <div className="feature">
            <FaChartLine />

            <div>
              <h4>Premium Ingredients</h4>

              <p>Prepared using traditional Malabar-inspired recipes.</p>
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
        <img src="/crispy-potato-chips-collection-delicious-goldenbrown-potato-chips.png" alt="dashboard" />
      </motion.div>
    </section>
  );
}
