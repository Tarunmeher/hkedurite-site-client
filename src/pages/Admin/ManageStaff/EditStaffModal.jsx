import React from "react";
import { toast, ToastContainer } from 'react-toastify';

const EditStaffModal = ({ isOpen, onClose, staffData, onSave, mode }) => {
  if (!isOpen) return null;
  const [uploading, setUploading] = React.useState(false);
  const [formData, setFormData] = React.useState(staffData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode == 'add') {
      try {
        const isAllEmpty = Object.values(formData).every(val => val.trim() === '');
        if (isAllEmpty) {
          return;
        }
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/addStaff`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.status == 'success') {
          setUploading(false);
          toast.success(data.message);
          onClose(data.results);
        } else {
          setUploading(false);
          toast.error(data.message || 'Failed to Add');
          onClose(data.results);
        }
      } catch (err) {
        setUploading(false);
        console.error(err);
        toast.error('Something went wrong');
      }
    } else {
      try {
        const isAllEmpty = Object.values(formData).every(val => {
          return val == null || val.toString().trim() === '';
        });
        if (isAllEmpty) {
          return;
        }
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/updateStaff/${staffData.sid}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.status == 'success') {
          setUploading(false);
          toast.success(data.message);
          onClose('');
        } else {
          setUploading(false);
          toast.error(data.message || 'Failed to Update');
          onClose('');
        }
      } catch (err) {
        setUploading(false);
        console.error(err);
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-4">
        <h2 className="text-xl font-semibold mb-4">Edit Staff</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Branch</label>
            <select
              name="org"
              value={formData.org || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Branch</option>
              <option value="LCS">LCS</option>
              <option value="LPS">LPS</option>
              <option value="Tilottama">Tilottama</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <select
              name="designation"
              value={formData.designation || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select Designation--</option>
              <option value="Chairman">Chairman</option>
              <option value="Secretary">Secretary</option>
              <option value="Principal">Principal</option>
              <option value="Teaching">Teaching</option>
              <option value="Non Teaching">Non Teaching</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <select
              name="department"
              value={formData.department || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select Department--</option>
              <option value="Multiple Subjects">Multiple Subjects</option>
              <option value="Odia">Odia</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Botany">Botany</option>
              <option value="Zoology">Zoology</option>
              <option value="IT">IT</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => onClose(false, 'cancelled')}
              className="mr-2 px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />

      {uploading && (
        <div style={{ marginTop: '20px', textAlign: 'center', position: 'absolute', zIndex: 9 }}>
          {/* Spinner loader */}
          <div style={{
            width: '100px',
            height: '100px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <div>uploading....</div>
        </div>
      )}

      {/* Add keyframes animation inline */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default EditStaffModal;
