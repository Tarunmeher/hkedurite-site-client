import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const EnquiryNow = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">

                {/* LEFT IMAGE */}
                <div
                    className="flex justify-center lg:justify-start"
                    data-aos="fade-right"
                >
                    <img
                        src="https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-people-2.svg"
                        alt="CTA Illustration"
                        className="w-64 md:w-80"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div data-aos="fade-left">
                    <h1 className="text-[64px] sm:text-[80px] md:text-[110px] font-extrabold text-[#0b2c33] leading-none mb-4">
                        Come
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-bold text-[#0b2c33] mb-5">
                        over and look around.
                    </h2>

                    <p className="text-[#35536b] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        We will explain everything you are intereste. Join our new session.
                        If you have any questions or enquiries please feel free to contact us
                        on the following details provided below or alternatively you can
                        complete our online enquiry form also located below and we will get
                        back to you as soon as possible...
                    </p>
                    <Link to="/contact">
                        <button
                            className={" bg-gradient-to-br from-[#ff9900] to-[#ffb703] text-black font-semibold px-6 py-2 rounded-lg shadow-[4px_4px_0px_#d97706] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"}
                            data-aos="zoom-in"
                        >
                            Enquiry Now !
                        </button>
                    </Link>

                </div>
            </div>

            {/* TOP DECORATION (desktop only) */}
            <img
                src="https://skole.vamtam.com/wp-content/uploads/2019/11/illustration-tree-2.svg"
                alt="Decoration"
                className="hidden lg:block absolute top-0 right-0 w-96 pointer-events-none"
                data-aos="fade-down"
            />

            {/* BOTTOM DECORATION (desktop only) */}
            <img
                src="https://skole.vamtam.com/wp-content/uploads/2019/11/leaf-1.svg"
                alt="Decoration"
                className="hidden lg:block absolute bottom-0 left-0 w-full pointer-events-none h-28 animate-bounce"
                data-aos="fade-up"
            />
        </section>
    );
};

export default EnquiryNow;
