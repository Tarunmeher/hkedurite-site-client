import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Where Education Meets Imagination",
    highlight: "Empowering Young Minds",
    desc: "Innovative e-learning solutions for the next generation of students.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/collegebnr.jpg",
  },
  {
    title: "Building Strong Foundations",
    highlight: "Quality Education for Life",
    desc: "Shaping the future with strong values, creativity, and confidence.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  },
  {
    title: "A Safe Place to Learn",
    highlight: "A Bright Future Begins Here",
    desc: "Providing a nurturing environment where children learn and grow.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance.jpg",
  },
  {
    title: "Learning Today",
    highlight: "Leading Tomorrow",
    desc: "Inspiring students to become confident, curious, and capable learners.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/class6.jpg",
  },
];


export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex((index + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[85vh] lg:min-h-screen">
      {/* Background Image */}
      <img
        src={slides[index].image}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
        <div
          data-aos="fade-up"
          className="text-white max-w-2xl pt-24 md:pt-32"
        >
          <p className="text-orange-400 tracking-widest text-sm mb-3">
            HK EDURATE INTERNATIONAL SCHOOL
          </p>

          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {slides[index].title} <br />
            <span >
              {slides[index].highlight}
            </span>
          </h1>

          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            {slides[index].desc}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              className={`px-5 py-3 ${siteConfig.background.bgcolor} rounded-full font-semibold`}
            >
              GET STARTED ↗
            </button>
            <Link to="/About/about-vss">
              <button className="px-5 py-3 border border-white rounded-full font-semibold">
                ABOUT US ↗
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </section>
  );
}
