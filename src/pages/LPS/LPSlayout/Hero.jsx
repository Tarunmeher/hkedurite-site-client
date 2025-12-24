import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const slides = [
  {
    video: 'https://cdn.pixabay.com/video/2021/10/05/90933-629483642_tiny.mp4',
    title: 'Welcome to Our College',
    description: 'Empowering students with knowledge and skills for the future.',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2017/11/12/09/32/people-2941951_1280.jpg',
    title: 'World-Class Library',
    description: 'A vast collection of books and digital resources at your fingertips.',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2013/12/27/22/36/trinity-234504_1280.jpg',
    title: 'Beautiful Campus',
    description: 'A serene and inspiring environment for learning and growth.',
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

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {slide.video ? (
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                  <source src={slide.video} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              )}
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <div className="flex justify-center gap-4">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm" data-aos="fade-right">About More...</button>
                  <button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-sm" data-aos="fade-left">Learn More...</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !text-white !text-sm"></div>
        <div className="swiper-button-next !text-white !text-sm"></div>
      </Swiper>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0 z-20">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index} className={`w-[160px] h-[40px] flex justify-between items-center ml-[-110px] hover:ml-[-1px] duration-300 ${link.bgColor}`}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full text-gray-300">
                {link.name} {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}