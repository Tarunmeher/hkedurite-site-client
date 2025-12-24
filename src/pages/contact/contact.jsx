import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
                Vrindavan Smart School
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
                                Vrindavan Smart School (VSS)<br />
                                Bhawanipatna <br />
                                <a
                                    href="https://maps.google.com?q=Patia,Bhubaneswar,Odisha,India"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mangala mandir Gali, Near Satsang vihar, Sambhunagar Pada, Bhawanipatna, Odisha, India
                                </a>
                                <br />
                                Pin: 766002
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📧</span>
                            <p>
                                <a
                                    href="mailto:vrindavansmartschool@gmail.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    vrindavansmartschool@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>+91 95564 48444</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">📞</span>
                            <p>
                                Admission Contact:
                                <a href="tel:9556448444" className="text-blue-500 hover:underline">
                                    +91 95564 48444
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 text-lg mr-2">🌐</span>
                            <a
                                href="https://vrindavansmartschool.in"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.vrindavansmartschool.in
                            </a>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="w-full md:w-1/2">
                    <iframe
                        className="w-full h-80"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.423137399964!2d83.13726557339545!3d19.90656612537754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24e910e35fca97%3A0xf26d5b1d596f3e72!2sVRINDAVAN%20SMART%20SCHOOL!5e0!3m2!1sen!2sin!4v1745286252200!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Lambodar College Map"
                    ></iframe>
                </div>
            </div>
        </div>

    );
};

export default Contact;
