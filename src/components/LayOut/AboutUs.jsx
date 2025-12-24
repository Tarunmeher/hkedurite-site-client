import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative py-10 md:py-20 px-6 md:px-24 flex flex-col md:flex-row items-center gap-10 bg-transparent">
            {/* Left Content */}
            <div className="text-white max-w-xl z-10" data-aos="fade-right">
                <span className="bg-[#0077b6] text-white font-semibold text-sm px-4 py-1 inline-block mb-4 tracking-wide">
                    ABOUT CAMPUS
                </span>
                <h1 className="text-4xl text-black md:text-5xl font-bold leading-tight mb-4">
                    Welcome To <span className="text-[#ffb703]">Vrindavan</span> Smart School
                </h1>
                <p className="text-lg text-gray-700 border-l-4 border-red-600 pl-4 mb-6">
                    Our mission is to prepare education leaders and innovators who will change the world by expanding opportunities and outcomes for learners everywhere.
                </p>

                <Link to='/About/about-vss'>
                    <button className="bg-gradient-to-br from-[#ffb703] to-[#ff9900] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                        View More
                    </button>
                </Link>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full md:block" data-aos="fade-left">
                <img
                    src={import.meta.env.VITE_SERVICE_URL + '/siteimages/entrance2.jpg'}
                    alt="Campus"
                    className="w-full h-auto object-contain rounded-md"
                />
            </div>
        </div>
    );
};

export default About;
