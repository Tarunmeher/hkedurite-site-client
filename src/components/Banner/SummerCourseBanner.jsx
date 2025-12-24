import React from "react";
import { useNavigate } from "react-router-dom";


const SummerCourseBanner = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

    if (!isVisible) return null;

    const handleApplyClick = () => {
        onClose();
        navigate("/apply/applysummercourse");
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-blue-500 to-green-400 p-4 rounded-xl shadow-2xl w-[320px] text-center relative border-4 border-white">
                <img
                    src={''}
                    alt="Summer Course Logo"
                    className="w-14 mx-auto mb-2"
                />
                <h2 className="text-xl font-extrabold text-white mb-1">Summer Course for +2 Science</h2>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFpD4geIXk9q52vEQlYQS7M2kaE_K9B37Lw&s"
                    alt="Summer Course"
                    className="w-full rounded-lg mb-2 shadow-lg"
                />
                <p className="text-white text-sm leading-relaxed">
                    Boost your knowledge in Physics, Chemistry, Biology, and Mathematics with our interactive summer program. Get hands-on experience, expert guidance, and a head start on your academic journey!
                </p>

                <div className="flex justify-center space-x-3 mt-3">
                    <button
                        onClick={onClose}
                        className="px-3 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                    >
                        Close
                    </button>

                    <button
                        onClick={handleApplyClick}
                        className="px-3 py-2 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummerCourseBanner;