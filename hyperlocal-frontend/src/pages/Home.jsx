// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import { Footer } from '../components/Footer';// to be created

const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <OurServices />
    <Footer />
  </>
);

export default Home;
