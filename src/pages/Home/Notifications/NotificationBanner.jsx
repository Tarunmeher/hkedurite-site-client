import React from "react";
import { Link } from "react-router-dom";

const NotificationBanner = () => {
    return (
        <div className="relative w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url('${import.meta.env.VITE_SERVICE_URL + '/siteimages/collegebnr.jpg'}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-bold">News & Notifications</h1>
                <p className="text-white mt-2">
                    <Link to='/'> <span className="text-gray-300">Home</span></Link> <span className="text-yellow-400">&raquo;News & Notifications</span>
                </p>
            </div>
        </div>
    );
};

export default NotificationBanner;
