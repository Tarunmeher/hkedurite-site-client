import React from "react";
import siteConfig from "../../config/siteConfig";

const Contact = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
            {`${siteConfig.branding.title}`}
            </h1>
            <div className="w-20 h-1 bg-blue-500 mt-2 mb-6"></div>

            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Contact Details */}
                <div className="w-full md:w-1/2 p-6 bg-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800">Contact Details</h2>
                    <div className="mt-4 space-y-3 text-gray-700">
                        <div className="flex items-start">
                            <span className="text-blue-500 text-lg mr-2">📍</span>
                            <p>
                                Hello Kids Edurite International School<br />
                                Dharmagarh <br />
                                <a
                                    href="https://www.google.com/maps/place/HELLO+KIDS+EDURITE+INTERNATIONAL+SCHOOL/@19.8659386,82.7722951,15z"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Location on Map
                                </a>

                                <br />
                                Pin: 766015
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📧</span>
                            <p>
                                <a
                                    href="mailto:hellokids.edurite@gmail.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    {`${siteConfig.contact.email}`}
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>{`${siteConfig.contact.phone}`}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>
                                Admission Contact:
                                <a href="tel:9556448444" className="text-blue-500 hover:underline">
                                  {`${siteConfig.contact.phone}`}
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">🌐</span>
                            <a
                                href="https://hkedurite.in"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.hkedurite.in
                            </a>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="w-full md:w-1/2">
                    <iframe
                        className="w-full h-80"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13582.853663562024!2d82.7722951!3d19.8659386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a251916242ed8a3%3A0x991ce954be8cac71!2sHELLO%20KIDS%20EDURITE%20INTERNATIONAL%20SCHOOL!5e1!3m2!1sen!2sin!4v1766574937921!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        title="Hello Kids Edurite International School Map"
                    ></iframe>

                </div>
            </div>
        </div>

    );
};

export default Contact;
