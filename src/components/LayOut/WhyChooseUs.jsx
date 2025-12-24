import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const data = [
    {
        icon: "❓",
        title: "Why Choose Us",
        description:
            "Impact holistic education for higher academic and social standard. We strive for continue improvement in our quality management system by systematically applying the principle of quality assurance",
        bgColor: "bg-gradient-to-r from-blue-400 to-purple-500",
        shadowColor: "shadow-[6px_6px_0px_#7c3aed]",
    },
    {
        icon: "📈",
        title: "Career Growth",
        description:
            "Provide conducive learning environment and oppertunities for all round development.",
        bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
        shadowColor: "shadow-[6px_6px_0px_#0d9488]",
    },
    {
        icon: "₹",
        title: "Most Affordable in India",
        description:
            "Vrindavan programs are most affordable in market to help everyone pursue their desired course without worrying about cost.",
        bgColor: "bg-gradient-to-r from-yellow-400 to-red-500",
        shadowColor: "shadow-[6px_6px_0px_#d97706]",
    },
];

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="w-full px-2 sm:px-4 md:px-6 py-12 bg-gradient-to-br from-[#f0f8ff] to-[#e0f2fe]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2">
                    <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-full w-full bg-blue-600"></span>
                    </span>
                    Why <span className="text-blue-600 inline-block" data-aos="fade-up">Vrindavan</span>
                </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <div
                            className={`whycard w-full sm:w-[90%] md:w-full p-5 sm:p-6 rounded-xl text-center cursor-pointer text-white transition-all duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 ${item.bgColor} ${item.shadowColor}`}
                        >
                            <div className="bg-white p-3 w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-3xl sm:text-4xl text-gray-800">{item.icon}</span>
                            </div>
                            <h3 className="mt-4 font-semibold text-base sm:text-lg">{item.title}</h3>
                            <p className="mt-2 text-white text-xs sm:text-sm">{item.description}</p>
                            <a href="#" className="mt-3 text-white font-medium inline-block underline text-sm">
                                Show More...
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
