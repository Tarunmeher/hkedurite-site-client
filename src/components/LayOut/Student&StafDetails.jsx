import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const stats = [
    { id: 1, icon: "📖", number: 500, label: "Total Courses" },
    { id: 2, icon: "🎓", number: 1900, label: "Our Students" },
    { id: 3, icon: "👨‍🏫", number: 750, label: "Skilled Lecturers" },
    { id: 4, icon: "🏆", number: 30, label: "Win Awards" },
];

const StudentAndStafDetails = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-8 mt-4"
                data-aos="fade-down"
            >
                Staff & Student Details
            </h2>

            <div
                className="relative bg-cover bg-center py-16 px-4"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_1280.jpg')` }}
            >
                <div className="absolute inset-0 bg-green-900 opacity-50"></div>
                <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                data-aos-delay={index * 200} // Staggered animation
                            >
                                <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-lg mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold">{stat.number}</h3>
                                <p className="text-lg">+ {stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <Link to='/Academics/staff/staf-details'>
                        <button
                            className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg transition duration-300 hover:bg-yellow-600 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            Know More...
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default StudentAndStafDetails;
