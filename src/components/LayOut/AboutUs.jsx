import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import siteConfig from "../../config/siteConfig";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [, restTitle] = siteConfig.branding.title.split("Hello Kids ");

    return (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* LEFT IMAGE + FLOATING CARDS */}
                <div className="relative flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">

                    {/* MAIN IMAGE (SRC SAME) */}
                    <div
                        data-aos="fade-right"
                        className="rounded-3xl overflow-hidden w-full sm:w-[320px] md:w-[360px]"
                    >
                        <img
                            src={import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance2.jpg"}
                            alt="Campus"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* FLOATING INFO CARDS */}
                    <div className="flex flex-col gap-5 sm:gap-6 justify-center">

                        {/* ABOUT CARD */}
                        <div
                            data-aos="fade-up"
                            className="bg-[#fff1e6] rounded-2xl p-5 sm:p-6 shadow-lg w-full sm:w-64"
                        >
                            <span className={`text-sm font-semibold ${siteConfig.text.secondary}`}>
                                ABOUT CAMPUS
                            </span>
                            <h3 className="text-lg sm:text-xl font-semibold mt-2">
                                Hello Kids
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                Learning Environment
                            </p>
                        </div>

                        {/* EXPERIENCE CARD */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl w-full sm:w-64"
                        >
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#ffb703]">
                                10+
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                Years of Excellence
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div data-aos="fade-left" className="text-center lg:text-left">
                    <p className={` ${siteConfig.text.secondary} font-semibold mb-3 sm:mb-4`}>
                        About Us
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-5 sm:mb-6">
                        Welcome To{" "}
                        <span className="text-[#ffb703]">Hello Kids</span>{" "}
                        {restTitle}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base border-l-4 border-red-600 pl-4">
                        Our mission is to prepare education leaders and innovators who will
                        change the world by expanding opportunities and outcomes for learners
                        everywhere.
                    </p>

                    <Link to="/About/about-vss">
                        <button
                            data-aos="zoom-in"
                            className="bg-gradient-to-br from-[#ff9900] to-[#ffb703] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                        >
                            View More
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default About;
