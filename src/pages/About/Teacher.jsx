import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const teachers = [
  { id: 1, name: "Angela T. Vigil", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Frank A. Mitchell", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Susan D. Lunsford", role: "CEO & Founder", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Dennis A. Pruitt", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Angela T. Vigil", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Frank A. Mitchell", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "Susan D. Lunsford", role: "CEO & Founder", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, name: "Dennis A. Pruitt", role: "Associate Professor", img: "https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const Teacher = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <div className="w-full px-6 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
        Meet Our <span className="text-orange-500">Teachers</span>
      </h2>
      <p className="text-center text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="200">
        Get to know our experienced and passionate educators.
      </p>
      <Slider {...settings}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className="px-4" data-aos="zoom-in">
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              role="button"
              onClick={() => navigate(`/teacher/${teacher.id}`)}
            >
              <img src={teacher.img} alt={teacher.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{teacher.name}</h3>
                <p className="text-sm text-gray-500">{teacher.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Teacher;
