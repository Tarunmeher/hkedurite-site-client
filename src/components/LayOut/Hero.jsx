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

const slides = [
  {
    title: "Vrindavan Smart School",
    description: "Innovative e-learning solutions for the next generation of students.",
    image: import.meta.env.VITE_SERVICE_URL + '/siteimages/collegebnr.jpg',
    // image: "https://cdn.pixabay.com/photo/2020/12/15/13/54/children-5833719_1280.jpg"
    // link: "/tillotamma-home",
  },
  {
    title: "Vrindavan Smart School",
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + '/siteimages/class4.jpg',
    // image: "https://cdn.pixabay.com/photo/2017/10/01/14/14/street-2805643_1280.jpg"
    // link: "/tillotamma-home",
  },
  {
    title: "Vrindavan Smart School",
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + '/siteimages/entrance.jpg',
    // image: "https://cdn.pixabay.com/photo/2023/08/31/15/37/ai-generated-8225400_1280.png"
  },
  {
    title: "Vrindavan Smart School",
    description: "Shaping the future with quality education.",
    image: import.meta.env.VITE_SERVICE_URL + '/siteimages/class6.jpg',
    // image: "https://cdn.pixabay.com/photo/2024/05/11/06/39/back-to-school-8754080_1280.jpg"
    // link: "/lps-home",
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
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(function () {
      nextSlide();
    }, 2000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div id="homebannermobile" className="relative w-full h-[300px] lg:h-screen md:h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"
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
            <p className="mt-4 text-xl homebannerdesc">{slide.description}</p>
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

      {/* <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full ml-4 hover:bg-opacity-75 z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full mr-4 hover:bg-opacity-75 z-20"
      >
        &#10095;
      </button> */}

      {/* Social Icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[40%] left-0 z-20">
        <ul>
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className={`w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 ${link.bgColor}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full text-gray-300"
              >
                {link.name} {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Hero;
