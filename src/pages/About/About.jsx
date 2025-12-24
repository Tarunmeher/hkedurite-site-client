import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Facilities from './Facilities'


const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="py-10 px-6 md:px-24 items-center bg-transparent">
                {/* Left Content */}
                <div className="text-white z-10" data-aos="fade-right">
                    <span className="bg-[#0077b6] text-white font-semibold text-sm px-4 py-1 inline-block mb-4 tracking-wide">
                        ABOUT VRINDAVAN
                    </span>
                    <h1 className="text-4xl text-black md:text-3xl font-bold leading-tight mb-4">
                        Welcome To <span className="text-[#ffb703]">Vrindavan</span> Smart School
                    </h1>
                    <p className="text-lg text-gray-700 border-l-4 border-red-600 pl-4 mb-6">
                        Our mission is to prepare education leaders and innovators who will change the world by expanding opportunities and outcomes for learners everywhere.
                    </p>
                    <p className="text-black">
                        The School was founded on 1<sup>st</sup> of April 2019, by the <strong className="text-[#000000]">SRI ANTARYAMI PANIGRAHI MEMORIAL FOUNDATION </strong>
                        and named as <strong className="text-[#ffb703]">VRINDAVAN SMART SCHOOL</strong> Bhawanipatna, Kalahandi.
                    </p>

                    <br />
                    <br />
                    <br />
                    <span className="bg-[#0077b6] text-white font-semibold text-sm px-4 py-1 inline-block mb-4 tracking-wide">
                        SCHOOL QUALITY POLICY
                    </span>
                    <p className="text-black">
                        ✔️ We at The Vrindavan Smart School are committed to.
                        <ol type="1">
                            <li className="px-5 py-2">✅ Impact holistic education for higher academic and social standard.</li>
                            <li className="px-5 py-2">✅ Provide conducive learning environment and opportunities for all round development.</li>
                            <li className="px-5 py-2">✅ Instill positive values, self-decipline, self-confidence, altruism and compassion.</li>
                        </ol>
                    </p>
                    <br />
                    <p className="text-black">
                        ✔️ We strive for continue improvement in our quality management system by systematically applying the principles of quality assurance.   
                    </p>        
                    <br />            
                    <p className="text-black">
                        ✔️ To make the VRINDAVAN SMART SCHOOL, a leading, learning community of motivated staff and students engaged in realizing and exploring the
                         limits of their full and human potential to graciously contribute to the socity.   
                    </p>
                    <br />
                    <p className="text-black">
                        ✔️ To provide and educational environment in which students feel safe, secured, empowered, energized and unlimited in pursing learning experiences to 
                        their maximum potential. The VRINDAVAN SMART SCHOOL provides holistic education that emphasizes high aademic and social standards, promotes healthy life style,
                        cultivates critics thinking, fosters scientific temper, instills desires for lifelong learning.   
                    </p>
                </div>
                <div className="z-10 py-5" data-aos="fade-right">
                    <br />
                    <br />
                    <span className="bg-[#0077b6] text-white font-semibold text-sm px-4 py-1 inline-block mb-4 tracking-wide">
                        FACILITIES
                    </span>
                    <Facilities />
                </div>


            </div>
        </>
    );
};

export default About;
