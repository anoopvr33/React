import { motion } from "framer-motion";
import "../assets/css/review.css";

const reviews = [
  {
    id: 1,
    name: "John Carter",
    role: "CEO, TechFlow",
    image: "/kappa.avif",
    review:
      "Very crispy and tastes exactly like traditional Kerala kappa chips.",
  },
  {
    id: 2,
    name: "Sophia Miller",
    role: "Product Manager",
    image: "/kappa.avif",
    review:
      "The authentic Kerala flavour is what makes this special.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Founder, NextLabs",
    image: "/kappa.avif",
    review:
      "Good packaging and excellent crunch. Will definitely buy again.",
  },
];

export default function ReviewSection() {
  return (
    <section className="review-section">
      <motion.div
        className="review-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>TESTIMONIALS</span>

        <h2>What Our Customers Say</h2>

        <p>
          Thousands of businesses trust our platform to improve productivity and
          grow faster.
        </p>
      </motion.div>

      <div className="review-grid">
        {reviews.map((item, index) => (
          <motion.div
            key={item.id}
            className="review-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <div className="review-top">
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>

                <p>{item.role}</p>
              </div>
            </div>

            <div className="stars">★★★★★</div>

            <p>{item.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
