import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        EasyService
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-base font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* CTA Button */}
      <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-dark transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
