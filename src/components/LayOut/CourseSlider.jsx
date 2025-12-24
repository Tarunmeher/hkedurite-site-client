import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const courses = [
    { id: 1, title: "Mathematics", image: "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg" },
    { id: 2, title: "Physics", image: "https://cdn.pixabay.com/photo/2019/04/14/10/27/book-4126483_1280.jpg" },
    { id: 3, title: "Chemistry", image: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg" },
    { id: 4, title: "Odia", image: "https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_1280.jpg" },
    { id: 5, title: "English", image: "https://cdn.pixabay.com/photo/2022/01/22/16/54/book-6957870_1280.jpg" },
    { id: 6, title: "IT", image: "https://cdn.pixabay.com/photo/2024/05/26/12/03/ai-generated-8788658_1280.jpg" },
    { id: 7, title: "BT", image: "https://cdn.pixabay.com/photo/2024/07/15/06/52/dna-8895881_1280.png" },
];

const bgColors = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-indigo-500", "bg-pink-500", "bg-orange-500"
];

const CourseSlider = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-14 container">
            <h2 className="text-3xl font-bold mb-6 animate-bounce" data-aos="fade-up">
                Our Courses
            </h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    500: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="pb-10"
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={course.id}>
                        <div
                            className={`shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${bgColors[index % bgColors.length]}`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 flex justify-between items-center text-white">
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <button className="text-white text-sm font-medium hover:underline">
                                    Read More...
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CourseSlider;
