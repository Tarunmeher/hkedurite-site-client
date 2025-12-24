import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaBehance, FaPinterest, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import TeacherBanner from "./TeacherBanner";
import TeacherSkill from "./TeacherSkill";
import { Link } from "react-router-dom";

const ProfileCard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location.pathname]);
        

    return (
        <>
            <TeacherBanner />
            <div 
                className="flex flex-col sm:flex-row container gap-10 mx-auto p-8 sm:p-16 items-center bg-gray-100 rounded-2xl shadow-lg" 
                data-aos="fade-up"
            >
                <img
                    src="https://images.pexels.com/photos/6256127/pexels-photo-6256127.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                    className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-lg"
                />
                <div className="text-center sm:text-left sm:ml-6">
                    <h2 className="text-xl sm:text-2xl font-bold">Frank A. Mitchell</h2>
                    <p className="text-orange-500 font-semibold">Associate Professor</p>
                    <p className="text-gray-600 mt-2 max-w-md mx-auto sm:mx-0">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. 
                    </p>
                    <div className="mt-4 text-gray-700">
                        <p className="flex justify-center sm:justify-start items-center gap-2"><FaMapMarkerAlt /> 25/B Milford Road, New York</p>
                        <p className="flex justify-center sm:justify-start items-center gap-2"><FaEnvelope /> carson@example.com</p>
                        <p className="flex justify-center sm:justify-start items-center gap-2"><FaPhoneAlt /> +2 123 456 7892</p>
                    </div>
                    <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-orange-500 text-xl">
                        <FaFacebook />
                        <FaBehance />
                        <FaPinterest />
                        <FaLinkedin />
                    </div>
                    <Link to='/About/about-lcs'>
                        <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
                            Back to Teachers
                        </button>
                    </Link>
                </div>
            </div>
            <TeacherSkill />
        </>
    );
};

export default ProfileCard;
