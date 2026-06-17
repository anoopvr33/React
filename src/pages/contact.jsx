import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "../assets/css/contact.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import { API } from "../utils/fetch";

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    if (!e) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success === true) {
        alert("Message send (✓)");
        return;
      } else {
        alert("Something went wrong");
        return;
      }
      // console.log("response data", data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar></Navbar>
     
        <section className="contact-page">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>CONTACT US</span>

            <h2>Let's Taste Something Amazing Together</h2>

            <p>
              Have a question or a project idea? Send us a message and we'll get
              back to you as soon as possible.
            </p>

            <div className="contact-info">
              <div className="info-box">
                <FaEnvelope />

                <div>
                  <h4>Email</h4>

                  <p>hello@mybrand.com</p>
                </div>
              </div>

              <div className="info-box">
                <FaPhoneAlt />

                <div>
                  <h4>Phone</h4>

                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-box">
                <FaMapMarkerAlt />

                <div>
                  <h4>Address</h4>

                  <p>Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input
                onChange={onChange}
                name="full_name"
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                onChange={onChange}
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <input
              onChange={onChange}
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              onChange={onChange}
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            {/* Consent */}
            <label className="consent-checkbox">
              <input
                type="checkbox"
                id="check"
                name="consent"
                onChange={onChange}
                required
              />

              <span>
                I consent to sharing my personal information and agree that it
                may be used to contact me regarding my enquiry.
              </span>
            </label>

            <button type="submit">Send Message</button>
          </motion.form>
        </section>
    
      <Footer></Footer>
    </>
  );
}
