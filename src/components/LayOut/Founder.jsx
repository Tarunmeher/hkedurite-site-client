import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2024/04/05/05/16/trophy-8676528_1280.jpg",
    text: "He believed in imparting 360-degree education that involved teaching the students the importance of community service and giving back to society and led by example."
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2016/03/22/12/25/donald-trump-john-1272775_1280.jpg",
    text: "His vision helped countless students achieve their dreams through quality education and ethical values."
  }
];

export default function FounderLegacy() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto p-12">
      {/* Left Section */}
      <div data-aos="fade-right" className="w-full md:w-1/2 flex flex-col items-center text-center">
        <img src="https://cdn.pixabay.com/photo/2015/08/27/10/18/johan-norberg-909876_1280.jpg" alt="Founder" className="w-80 h-80 object-cover rounded-full shadow-lg drop-shadow-lg" />
        <h2 className="mt-4 text-xl font-bold">Mr. Manoj Kumar Meher</h2>
        <p className="text-gray-600">Founder Chairman</p>
        <p className="text-gray-500">LCS Group of Institutions</p>
      </div>
      
      {/* Right Section - Slider */}
      <div data-aos="fade-left" className="w-full md:w-1/2 relative bg-white shadow-lg drop-shadow-lg rounded-lg overflow-hidden p-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4 animate-bounce">Founder's Legacy</h2>
        <img
          src={slides[current].image}
          alt="Slide"
          className="w-full h-64 object-cover rounded-md"
        />
        <p className="mt-4 text-gray-700 text-center">{slides[current].text}</p>
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
