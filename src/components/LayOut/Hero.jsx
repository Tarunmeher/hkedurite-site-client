import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteConfig from "../../config/siteConfig";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(null);

  const fetchSlides = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes("https")) {
        url = url.replace("http", "https");
      }
      const res = await fetch(`${url}/getBannerImages`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (res.ok) {
        setSlides(data.results);
        const timer = setInterval(() => {
          setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
      } else {
        setSlides(null);
      }
    } catch (err) {
      console.error(err);
      setSlides(null);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });

    fetchSlides();
  }, []);

  const prevSlide = () => setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[85vh] lg:min-h-screen">
      {/* Background Image */}
      <img
        src={
          slides &&
          import.meta.env.VITE_SERVICE_URL +
            "/files/" +
            slides[index].profile_pic
        }
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
        <div data-aos="fade-up" className="text-white max-w-2xl pt-24 md:pt-32">
          <p className="text-orange-400 tracking-widest text-sm mb-3">
            HK EDURATE INTERNATIONAL SCHOOL
          </p>

          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {slides && slides[index].title}
          </h1>

          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            {slides && slides[index].description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <Link to="/About/about-vss">
              <button
                className={`px-5 py-3 ${siteConfig.background.bgcolor} rounded-full font-semibold`}
              >
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
