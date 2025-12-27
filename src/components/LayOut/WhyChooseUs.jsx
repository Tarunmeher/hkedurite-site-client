import React, { useEffect } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import siteConfig from "../../config/siteConfig";
import { Link } from "react-router-dom";

const features = [
    { title: "Flexibility", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Quality", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Global", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Expertise", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Support", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
    { title: "Certified", description: "Interdum odio litora porttitor vestibulum si volutpat sociosqu. Ultrices consequat sed parturient mi vestibulum." },
];

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-4 lg:py-8 px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-start">
                <div>
                    <p className="text-[#242cc9] font-medium uppercase tracking-wide mb-3">
                        Why Study Here
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b1c2d] leading-tight mb-4">
                        Why <span className={`${siteConfig.text.primary}`} > choose </span>Our <br />
                        Hello kids Edurite

                    </h2>
                </div>

                <div className="flex lg:justify-end items-start">
                    <Link to='/About/about-vss'>
                        <button className="group flex items-center gap-2 text-[#35536b] font-medium
              border-b border-[#35536b] pb-1 hover:text-[#242cc9]
              hover:border-green-600 transition cursor-pointer">
                            Know More...
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </Link>

                </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#1F2E51] text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className={`${siteConfig.text.primary}`} />
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
