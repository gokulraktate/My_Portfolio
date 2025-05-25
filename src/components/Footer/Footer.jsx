import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Gokul Raktate</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media & Coding Profiles Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6 text-2xl">
          {[
            { icon: <FaGithub />, link: "https://github.com/gokulraktate" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/gokulraktate/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gokul-raktate-3a6789216/" },
            { icon: <SiCodechef />, link: "https://www.codechef.com/users/gokulraktate" },
            { icon: <SiHackerrank />, link: "https://www.hackerrank.com/profile/gokulraktate" },
            { icon: <SiGeeksforgeeks />, link: "https://www.geeksforgeeks.org/user/gokulsanjapbax/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform transform hover:scale-110"
              aria-label={`Link to ${item.link}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Gokul Raktate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
