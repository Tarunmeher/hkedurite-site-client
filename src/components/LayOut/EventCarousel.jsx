import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import banner from '../../assets/images/banner.png';

const events = [
  {
    title: 'Musical Night',
    date: '05 Oct 2024',
    image: 'https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400313_1280.jpg',
  },
  {
    title: 'Navodgam 2024',
    date: '03 Oct 2024',
    image: 'https://cdn.pixabay.com/photo/2021/07/27/16/02/library-6497266_1280.jpg',
  },
  {
    title: 'Medicinal Plant Drive at Nisarga Vatika',
    date: '29 Sep 2024',
    image: 'https://cdn.pixabay.com/photo/2014/10/04/21/55/amrita-474127_1280.jpg',
  },
  {
    title: 'Ek Ped Maa Ke Naam',
    date: '17 Sep 2024',
    image: 'https://cdn.pixabay.com/photo/2017/11/13/16/39/ginkgo-2946131_1280.jpg',
  },
];

export default function EventCarousel() {
  return (
    <div
      className="w-full px-4 py-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="p-6 rounded-lg text-white text-center">
        <h2 className="text-2xl font-bold mb-4">WHAT'S ON AT LCS</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile: 1 card
            768: { slidesPerView: 2 }, // Medium screens: 3 cards
            1024: { slidesPerView: 3 }, // Large screens: 4 cards
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="pb-10"
        >

          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black">{event.title}</h3>
                  <span className="text-sm text-white bg-green-500 px-2 py-1 rounded mt-2 inline-block">
                    {event.date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
