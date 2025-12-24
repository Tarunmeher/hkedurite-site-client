import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/mobile.css';

const NewsInfoComponent = () => {
    const [newsNotification, setNewsandNotification] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const fetchNewsOrNotification = async () => {
            try {
                const currentUrl = window.location.href;
                let url = import.meta.env.VITE_SERVICE_URL;
                if (currentUrl.includes("https")) {
                    url = url.replace("http", "https");
                }

                const res = await fetch(`${url}/getNewsOrNotification`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                const data = await res.json();

                if (res.ok) {
                    setNewsandNotification(data.results);
                    console.log(res)
                    console.log(data)
                } else {
                    setNewsandNotification(null);
                }
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
        <div className="p-4 mt-10">
            <h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8"
                data-aos='fade-down'
            >
                News & Notifications
            </h1>

            <div
                className="flex flex-col md:flex-row gap-4 h-[300px] homenewnotificationbox"
                style={{ perspective: '1000px' }}
            >
                {/* Left Side - News Slider */}
                <div
                    className="w-full md:w-1/2 bg-white p-4 shadow-lg rounded-2xl h-[280px] overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:rotate-[0.3deg]"
                    data-aos="fade-right"
                >
                    <h2 className="text-xl font-bold mb-2">Latest News</h2>
                    <Slider {...sliderSettings}>
                        {newsNotification &&
                            newsNotification
                                .filter((item) => item.type === 'News')
                                .map((newsitem, index) => (
                                    <div key={index} className="text-left p-1 text-sm font-semibold">
                                        {index + 1}. {newsitem.notification}
                                    </div>
                                ))}
                    </Slider>
                </div>

                {/* Right Side - Notification Links */}
                <div
                    className="w-full md:w-1/2 bg-white p-4 shadow-lg rounded-2xl h-[280px] overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:-rotate-[0.3deg]"
                    data-aos="fade-left"
                >
                    <h2 className="text-xl font-bold mb-2">Notifications</h2>
                    <div className="relative h-[220px] overflow-hidden">
                        <motion.div
                            className="flex flex-col space-y-2 absolute top-0 left-0 w-full"
                            animate={{ y: [0, -(newsNotification ? newsNotification.length : 1) * 40] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >
                            {newsNotification &&
                                newsNotification
                                    .filter((item) => item.type === 'Notification')
                                    .map((newsitem, index) => (
                                        <div key={index}>
                                            {(index + 1) + ". "}
                                            {newsitem.notification}&nbsp;
                                            {newsitem.filename && (
                                                <a
                                                    style={{ color: "blue", textDecoration: "underline" }}
                                                    href={`${import.meta.env.VITE_SERVICE_URL}/files/${newsitem.filename}`}
                                                    target="_blank"
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
    );
};

export default NewsInfoComponent;
