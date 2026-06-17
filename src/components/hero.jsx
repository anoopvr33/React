import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "../assets/css/hero.css";

const slides = [
  {
    id: 1,
    title: "Build Modern Applications",
    subtitle: "Create amazing products faster.",
    image: "/kappa.avif",
  },
  {
    id: 2,
    title: "AI Powered Solutions",
    subtitle: "Transform your business with AI.",
    image: "/kappa.avif",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    subtitle: "Ready for millions of users.",
    image: "/kappa.avif",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-container">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <h1>{slide.title}</h1>

                <p>{slide.subtitle}</p>

                <button>Get Started</button>
              </motion.div>

              <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <img src={slide.image} alt={slide.title} />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
