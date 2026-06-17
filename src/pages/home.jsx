import React from "react";
import Hero from "../components/hero";
import WhyChooseUs from "../components/whyUs";
import ReviewSection from "../components/review";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <h1>halooo</h1> */}
      <WhyChooseUs></WhyChooseUs>
      <ReviewSection></ReviewSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
