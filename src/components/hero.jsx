import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "../assets/css/hero.css";

const slides = [
  {
    id: 1,
    title: "Authentic Kerala Kappa Chips, Crafted for Every Crunch",
    subtitle:
      "Experience the rich taste of Kerala with Malabar Foods Kappa Chips. Made from carefully selected tapioca and prepared using traditional methods to deliver freshness, crispiness.",
    image: "https://m.media-amazon.com/images/I/81wLz0fVluL._SL1500_.jpg",
  },
  {
    id: 2,
    title: "From Kerala Farms to Your Favourite Snack",
    subtitle:
      "Malabar Foods brings you perfectly crispy Kappa Chips made from fresh tapioca roots. A delicious blend of tradition, quality, and taste that's perfect for every occasion.",
    image:
      "https://th.bing.com/th/id/R.dfa345b73d803956aa53ac1957c6283b?rik=hFin%2bZGuX8F59A&riu=http%3a%2f%2fwww.flavoursofcalicut.com%2fcdn%2fshop%2ffiles%2fWhatsApp_Image_2024-10-28_at_11.19.19_1200x1200.jpg%3fv%3d1733072161&ehk=eOOIx6gkeeWvJwrKmV5CN0vxvxkTAVmuLZvfGRDs0AM%3d&risl=&pid=ImgRaw&r=0",
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

                <button> <a href="/contact">Contact Us</a></button>
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
