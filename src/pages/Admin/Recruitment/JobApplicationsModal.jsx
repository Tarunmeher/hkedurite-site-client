import React, { useState, useEffect } from 'react';
const JobApplicationsModal = ({ isOpen, onClose, postname }) => {
    if (!isOpen) return null;
    const [jobApplication, setJobApplication] = useState(null);

    useEffect(() => {
        getAvailableApplications();
    }, []);

    const getAvailableApplications = async () => {
        try {
            const currentUrl = window.location.href;
            let url = import.meta.env.VITE_SERVICE_URL;
            if (currentUrl.includes('https')) {
                url = url.replace('http', 'https')
            }
            const res = await fetch(`${url}/getApplications`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({}),
            });

            const data = await res.json();
            if (res.ok) {
                setJobApplication(data.results);
            } else {
                setJobApplication(null);
            }
        } catch (err) {
            console.error(err);
            setJobApplication(null);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Job Applications for <strong>{postname}</strong></h2>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    &times;
                </button>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 border">SL</th>
                                <th className="px-4 py-2 border">Applicant Name</th>
                                <th className="px-4 py-2 border">Applied On</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">File</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobApplication && jobApplication.map((app, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{app.applicant_name}</td>
                                    <td className="px-4 py-2 border">{new Date(app.applied_at).toLocaleDateString()}</td>
                                    <td className="px-4 py-2 border">{app.email}</td>
                                    <td className="px-4 py-2 border text-blue-600">
                                        <a
                                            href={`${import.meta.env.VITE_SERVICE_URL}/files/${app.filename}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >
                                            View File
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationsModal;