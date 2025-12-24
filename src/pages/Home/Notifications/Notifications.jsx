import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pen, Trash2, Plus, Bell, Newspaper, Search } from 'lucide-react';


const Notification = () => {
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

    return (
        <div className="p-4 mt-10">
            <h1 className="text-2xl font-bold text-center mb-4" data-aos="fade-down">
                News & Notifications
            </h1>
            <div className="flex flex-col md:flex-row gap-4 h-[370px]">
                {/* Left Side - News Slider */}
                <div
                    className="w-full md:w-1/2 bg-white p-4 shadow-md h-[380px] overflow-hidden"
                    data-aos="fade-right"
                >
                    <h2 className="text-xl font-bold mb-2 flex"><Newspaper className="h-8 w-4 text-green-500 mr-2" />Latest News</h2>
                    <div>
                        {newsNotification && newsNotification.filter((item) => item.type == 'News').map((newsitem, index) => (
                            <div key={index} className="text-left p-1 text-sm font-semibold">
                                {index + 1}. {newsitem.notification}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Notification Links */}
                <div
                    className="w-full md:w-1/2 bg-white p-4 shadow-md h-[380px] overflow-hidden"
                    data-aos="fade-left"
                >
                    <h2 className="text-xl font-bold mb-2 flex"><Bell className="h-8 w-4 text-blue-500 mr-2" /> Notifications</h2>
                    <div className="relative h-[280px] overflow-auto pr-2">
                        <div className="flex flex-col space-y-2">
                            {newsNotification && newsNotification.filter((item) => item.type == 'Notification').map((newsitem, index) => (
                                <div>
                                    {(index+1)+". "} 
                                    {newsitem.notification}&nbsp;
                                    {newsitem.filename && (
                                        <a style={{color:"blue",textDecoration:"underline"}} href={`${import.meta.env.VITE_SERVICE_URL}/files/${newsitem.filename}`} target="_blank">View File</a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
