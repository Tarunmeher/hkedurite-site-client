import React from 'react';
import { GraduationCap } from "lucide-react"; // Use any other icon if you prefer
import { Link } from 'react-router-dom';

const EnrollSection = () => {
    return (
        <div className="bg-[#0077b6] text-white px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Icon + Text Section */}
            <div className="flex items-center gap-4">
                {/* Circle Icon */}
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-red-500 w-10 h-10" />
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold">Want to enroll you child ?</h2>
                    <p className="text-sm mt-1 md:mt-2">
                        We provide the perfect education for your child every day
                    </p>
                </div>
            </div>

            {/* Contact Us Button */}
            <Link to='/admission'>
                <button className="border border-white text-white rounded-full px-5 py-1.5 hover:bg-yellow-500 hover:text-[#002B4E] transition">
                    Enquiry Now !
                </button>
            </Link>
        </div>
    );
};

export default EnrollSection;
