import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#f0f4ff] py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Welcome to <span className="text-blue-600">EasyService</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700">
        This is the Hero Section – your one-stop solution for home services.
      </p>
    </section>
  );
};

export default HeroSection;
