import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const StafDetail = () => {
    const [staffs, setStaff] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const fetchStaff = async () => {
            try {
                const currentUrl = window.location.href;
                let url = import.meta.env.VITE_SERVICE_URL;
                if (currentUrl.includes('https')) {
                    url = url.replace('http', 'https');
                }

                const res = await fetch(`${url}/getStaff`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                const data = await res.json();
                if (res.ok) {
                    setStaff(data.results);
                } else {
                    setStaff(null);
                }
            } catch (err) {
                console.error(err);
                setStaff(null);
            }
        };

        fetchStaff();
    }, []);


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Meet Our Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {staffs && staffs.map((staff) => (
                    <div
                        key={staff.sid}
                        className="bg-white p-4 rounded-2xl shadow-xl transform transition-transform duration-300 hover:rotate-3 hover:scale-105"
                        data-aos="fade-up"
                    >
                        <img
                            src={staff.profile_pic?import.meta.env.VITE_SERVICE_URL+'/files/'+staff.profile_pic:import.meta.env.VITE_SERVICE_URL+'/files/maleAvatar.jpg'}
                            alt={staff.name}
                            className="w-full h-40 object-cover rounded-xl mb-4 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{staff.designation=='Teaching'?'Lecture':staff.designation}</p>
                        <p className="text-sm text-gray-400">{staff.department}</p>
                        <p className="text-sm text-gray-400">{staff.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StafDetail;
