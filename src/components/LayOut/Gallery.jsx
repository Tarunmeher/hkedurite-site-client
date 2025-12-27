import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const galleryImages = [
  import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/skill.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/explore.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/achive.jpg",
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full px-4 lg:px-8 py-14 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div data-aos="fade-right">
            <p className={`${siteConfig.text.secondary} font-medium uppercase tracking-wide mb-3`}>
              Photo Gallery
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              The Lens of Learning:{" "}
              <span className={`${siteConfig.text.primary}`}>Relive</span> Our <br />
              School’s Most Captivating{" "}
              <span className={`${siteConfig.text.primary}`}>Moments</span>
            </h2>

            <p className="text-gray-600 max-w-2xl text-base md:text-lg">
              A glimpse into our vibrant campus life, joyful learning moments,
              and unforgettable memories created together.
            </p>
          </div>

          <div className="flex lg:justify-end items-start" data-aos="fade-left">
            <Link
              to="/Gallery/vss-gallery"
              className="group flex items-center gap-2 text-gray-700 font-medium
              border-b border-gray-400 pb-1 hover:text-blue-900
              hover:border-blue-900 transition"
            >
              View In Gallery
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className={`overflow-hidden rounded-xl group
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover
                transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
