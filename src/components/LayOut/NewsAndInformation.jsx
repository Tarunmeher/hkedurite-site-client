import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import siteConfig from "../../config/siteConfig";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsInfoComponent = () => {
    const [newsNotification, setNewsandNotification] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const fetchNewsOrNotification = async () => {
            try {
                const currentUrl = window.location.href;
                let url = import.meta.env.VITE_SERVICE_URL;
                if (currentUrl.includes("https")) {
                    url = url.replace("http", "https");
                }

                const res = await fetch(`${url}/getNewsOrNotification`);
                const data = await res.json();

                if (res.ok) setNewsandNotification(data.results);
                else setNewsandNotification(null);
            } catch (err) {
                console.error(err);
                setNewsandNotification(null);
            }
        };

        fetchNewsOrNotification();
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <section className="w-full px-4 lg:px-8 py-14 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* HEADER (same style as Gallery / Notifications) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div data-aos="fade-right">
                        <p className="text-blue-900 font-medium uppercase tracking-wide mb-3">
                            News & Notifications
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Latest <span className={`${siteConfig.text.primary}`}>News</span> &{" "}
                            <span className={`${siteConfig.text.primary}`}>Notifications</span>
                        </h2>

                        <p className="text-gray-600 max-w-xl">
                            Stay updated with the latest news, notices, and important
                            announcements from our campus.
                        </p>
                    </div>
                    <div className="flex lg:justify-end items-start" data-aos="fade-left">
                        <Link
                            to="/Notification"
                            className="group flex items-center gap-2 text-gray-700 font-medium
                                  border-b border-gray-400 pb-1 hover:text-blue-900
                                  hover:border-blue-900 transition"
                        >
                            View More
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* NEWS SLIDER */}
                    <div
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                        data-aos="fade-right"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                            Latest News
                        </h3>

                        <Slider {...sliderSettings}>
                            {newsNotification &&
                                newsNotification
                                    .filter((item) => item.type === "News")
                                    .map((newsitem, index) => (
                                        <div
                                            key={index}
                                            className="text-gray-700 text-sm md:text-base font-medium py-2"
                                        >
                                            {index + 1}. {newsitem.notification}
                                        </div>
                                    ))}
                        </Slider>
                    </div>

                    {/* NOTIFICATIONS */}
                    <div
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                        data-aos="fade-left"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                            Notifications
                        </h3>

                        <div className="relative h-[220px] overflow-hidden">
                            <motion.div
                                className="flex flex-col gap-3 absolute top-0 left-0 w-full"
                                animate={{
                                    y: [
                                        0,
                                        -(newsNotification ? newsNotification.length : 1) * 42,
                                    ],
                                }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            >
                                {newsNotification &&
                                    newsNotification
                                        .filter((item) => item.type === "Notification")
                                        .map((newsitem, index) => (
                                            <div
                                                key={index}
                                                className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg"
                                            >
                                                {index + 1}. {newsitem.notification}{" "}
                                                {newsitem.filename && (
                                                    <a
                                                        href={`${import.meta.env.VITE_SERVICE_URL}/files/${newsitem.filename}`}
                                                        target="_blank"
                                                        className="text-blue-900 underline ml-1"
                                                    >
                                                        View File
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewsInfoComponent;
