import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ApplicationModal from './ApplicationModal';
import Loader from "../../components/common/loader";

const Recruitments = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);


  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleSubmitApplication = async (formData) => {
    try {
      var formdata = new FormData();
      formdata.append("id", selectedJob.id);
      formdata.append("applicant_name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("file", formData.file);
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/applyJob`, {
        method: 'POST',
        headers: {},
        body: formdata,
      });

      const data = await res.json();
      if (res.ok) {
        setUploading(false);
        setIsModalOpen(false);
        toast.success(data.message);
      } else {
        setUploading(false);
        toast.error(data.message);
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      toast.error('Something went wrong');
    }
  };


  const fetchJobs = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes("https")) {
        url = url.replace("http", "https");
      }

      const res = await fetch(`${url}/getJobs`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setJobs(data.results);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error(err);
      setNewsandNotification([]);
    }
  };

  return (
    <div className="container mx-auto px-2 py-8 max-w-6xl">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Job Openings</h2>
      <div className="overflow-x-auto">
        <table className="table-auto mx-auto border border-gray-300 rounded-lg shadow-md w-full max-w-4xl">
          <thead className="bg-indigo-100 text-gray-700">
            <tr>
              <th className="border border-gray-300 px-2 py-1 text-sm font-semibold text-left">ID</th>
              <th className="border border-gray-300 px-2 py-1 text-sm font-semibold text-left">Post Name</th>
              <th className="border border-gray-300 px-2 py-1 text-sm font-semibold text-left">Description</th>
              <th className="border border-gray-300 px-2 py-1 text-sm font-semibold text-left">Last Date</th>
              <th className="border border-gray-300 px-2 py-1 text-sm font-semibold text-left">Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length && jobs.map((job, index) => (
              <tr
                key={job.id}
                className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
              >
                <td className="border border-gray-300 px-2 py-2 text-sm text-gray-600">{index+1}</td>
                <td className="border border-gray-300 px-2 py-2 text-sm font-medium text-gray-800">{job.post_name}</td>
                <td className="border border-gray-300 px-2 py-2 text-sm text-gray-600">{job.description}</td>
                <td className="border border-gray-300 px-2 py-2 text-sm text-gray-600">{new Date(job.last_date_of_application).toLocaleDateString()}</td>
                <td className="border border-gray-300 px-2 py-2 text-sm">
                  <button
                    onClick={() => handleApply(job)}
                    className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
                  >
                    APPLY
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {isModalOpen && (
        <ApplicationModal
          job={selectedJob}
          onSubmit={handleSubmitApplication}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {uploading && (
        <Loader></Loader>
      )}
    </div>
  );
};

export default Recruitments;
