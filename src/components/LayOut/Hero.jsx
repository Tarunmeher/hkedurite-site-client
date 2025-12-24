import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

import siteConfig from "../../config/siteConfig";

const slides = [
  {
    title: siteConfig.branding.title,
    description:
      "Innovative e-learning solutions for the next generation of students.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/collegebnr.jpg",
  },
  {
    title: siteConfig.branding.title,
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  },
  {
    title: siteConfig.branding.title,
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance.jpg",
  },
  {
    title: siteConfig.branding.title,
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/class6.jpg",
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin size={30} />, url: "https://linkedin.com", bgColor: "bg-blue-600" },
  { name: "Facebook", icon: <FaFacebook size={30} />, url: "https://facebook.com", bgColor: "bg-blue-700" },
  { name: "Twitter", icon: <FaTwitter size={30} />, url: "https://twitter.com", bgColor: "bg-blue-400" },
  { name: "YouTube", icon: <FaYoutube size={30} />, url: "https://youtube.com", bgColor: "bg-red-600" },
  { name: "Instagram", icon: <FaInstagram size={30} />, url: "https://instagram.com", bgColor: "bg-pink-600" },
  { name: "WhatsApp", icon: <FaWhatsapp size={30} />, url: "https://wa.me/yourphonenumber", bgColor: "bg-green-500" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      nextSlide();
    }, 2000);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    setTimeout(function () {
      nextSlide();
    }, 2000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
      id="homebannermobile"
      className="relative w-full h-[300px] lg:h-screen md:h-[400px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {slide.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={slide.image}
              alt={slide.title.toUpperCase()}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl font-bold">
              <Typewriter
                words={[slide.title.toUpperCase()]}
                loop={false}
                typeSpeed={100}
                deleteSpeed={40}
                cursor
              />
            </h1>

            <p className="mt-4 text-xl homebannerdesc">
              {slide.description}
            </p>

            {slide.link && (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 my-2 cursor-pointer text-white border-2 group hover:bg-gray-900"
              >
                View More...
                <span className="duration-300 group-hover:rotate-90">
                  <HiArrowRight className="ml-3" />
                </span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
