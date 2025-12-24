import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const galleryImages = [
  import.meta.env.VITE_SERVICE_URL + '/siteimages/class4.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/skill.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/explore.jpg',
  import.meta.env.VITE_SERVICE_URL + '/siteimages/achive.jpg',
];

export default function EventGallery() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#f0f8ff] to-[#e0f2fe] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 relative pb-4"
          data-aos="fade-down"
        >
          Events & Gallery
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0077b6] rounded-full"></span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Events Section */}
          <div className="w-full lg:w-1/2">
            {events.length ? (
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
                data-aos="fade-right"
              >
                <img
                  src={events[currentEvent].img}
                  alt={events[currentEvent].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{events[currentEvent].title}</h2>
                  <p className="text-gray-600 mb-6">{events[currentEvent].desc}</p>
                  <Link to="/Gallery/vss-events">
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                      View More →
                    </button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
                data-aos="fade-right"
              >
                <img
                  src={`${import.meta.env.VITE_SERVICE_URL}/siteimages/event.jpg`}
                  alt="No Events"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">Events not Available</h2>
                </div>
              </motion.div>
            )}
          </div>

          {/* Gallery Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6"
              data-aos="fade-left"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={img}
                      alt="Gallery"
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/Gallery/vss-gallery">
                  <button className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform">
                    View Gallery →
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
