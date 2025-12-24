import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Visit() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
  }, []);


  return (
    <div className="bg-yellow-500 flex flex-wrap items-center justify-center gap-4 md:gap-6 p-6 md:p-12 w-full">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-black" data-aos="fade-right">
        #DreamBIG
      </h1>

      {/* Buttons */}
      <button
        className="bg-white text-blue-900 font-semibold px-5 md:px-6 py-2 md:py-3 rounded-full shadow-md border-2 border-white hover:bg-gray-100 transition"
        data-aos="zoom-in"
      >
        VISIT OUR CAMPUS
      </button>

      <button
        className="bg-white text-blue-900 font-semibold px-5 md:px-6 py-2 md:py-3 rounded-full shadow-md border-2 border-white hover:bg-gray-100 transition"
        data-aos="zoom-in"
      >
        TALK TO OUR COUNSELLORS
      </button>

      <Link
        to="/apply/applysummercourse"
        className="bg-gray-900 text-white font-semibold px-5 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        data-aos="fade-up"
      >
        APPLY NOW
      </Link>

    </div>
  );
}
