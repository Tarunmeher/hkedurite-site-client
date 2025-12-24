import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Loader from "../../components/common/loader";
export default function AdmissionForm() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    mobileNo: "",
    standard: "",
    package: "",
  });

  const handleChange = (e) => {
    const regex = /^[A-Za-z]+$/;
    if (e.target.name == 'mobileNo') {
      if (regex.test(e.target.value)) {
        let newValue = e.target.value;
        e.target.value = newValue.pop(newValue.length - 1);
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/createEnqury`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          std_name: formData.childName,
          mobile: formData.mobileNo,
          standard: formData.standard,
          package: formData.package
        })
      });

      const data = await res.json();
      console.log(data)
      if (data.status=='success') {
        setUploading(false);
        toast.success(data.message);
        setFormData({
          childName: "",
          mobileNo: "",
          standard: "",
          package: "",
        })
      } else {
        setUploading(false);
        toast.error(data.message);
        // setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
      setUploading(false);
    }
  };

  return (
    <>
      <div className="relative h-full flex items-center justify-center mt-10">
        <h2 className="text-black text-4xl font-bold">Admission Inquiry</h2>
      </div>

      <div className="flex flex-col lg:flex-row h-auto lg:h-screen p-4 lg:p-16">
        {/* Left side with header and video background */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="https://cdn.pixabay.com/video/2024/06/06/215470_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side with form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 bg-transparent lg:bg-none">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white p-6 rounded-2xl shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">Child Name</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
                maxLength={10}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Standard</label>
              <select
                name="standard"
                value={formData.standard}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              >
                <option value="">-- Select Standard --</option>
                <option value="Pre-Nursery">Pre-Nursery</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st Class">1st Class</option>
                <option value="2nd Class">2nd Class</option>
                <option value="3rd Class">3rd Class</option>
                <option value="4th Class">4th Class</option>
                <option value="5th Class">5th Class</option>
                <option value="6th Class">6th Class</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              >
                <option value="">-- Select Package --</option>
                <option value="Hostel">Hostel</option>
                <option value="Day Boarding">Day Boarding</option>
                <option value="Day Scholar">Day Scholar</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />

      {uploading && (
        <Loader></Loader>
      )}
    </>
  );
}
