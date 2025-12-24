import React, { useState, useRef } from "react";
import EditStaffModal from "./EditStaffModal";
import Loader from "../../../components/common/loader";
import { Pen, Trash2, Plus, Search, Image } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
const ManageStaff = () => {
  const [staffData, setStaffData] = useState([]);
  const [search, setSearch] = useState("");
  const [org, setOrg] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('add');
  const [sid, setSid] = useState('');
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchStaff();
  }, [navigate]);

  const fetchStaff = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/getStaff`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (data.status == 'success') {
        if (data.results.length) {
          setUploading(false);
          setStaffData(data.results);
        } else {
          setUploading(false);
          setStaffData([]);
          toast.error('No Staff Found');
        }
      } else {
        setUploading(false);
        setStaffData([]);
        toast.error(data.message || 'No Staff Found');
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      setStaffData([]);
      toast.error('Something Went Wrong');
    }
  };

  const handleAdd = () => {
    setIsModalOpen(true);
    setMode('add');
  };

  const handleEdit = (staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
    setMode('edit');
  };

  const handleDelete = async (sid) => {
    const confirmed = window.confirm("Are you sure you want to delete this staff?");
    if (confirmed) {
      try {
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/removeStaff`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ sid: sid }),
        });

        const data = await res.json();
        if (data.status == 'success') {
          setUploading(false);
          toast.success(data.message);
          fetchStaff();
        } else {
          setUploading(false);
          toast.error(data.message || 'Failed to Delete');
        }
      } catch (err) {
        setUploading(false);
        console.error(err);
        toast.error('Something went wrong');
      }
    }
  };

  const handleSave = (updatedStaff) => {
    setStaffData((prevData) =>
      prevData.map((s) => (s.id === updatedStaff.id ? updatedStaff : s))
    );
  };
  const closeModal = (status, data) => {
    setIsModalOpen(status);
    if (data) {
      if (data != 'cancelled') {
        setStaffData(data);
      }
    }

    if (mode == 'edit' && data != 'cancelled') {
      fetchStaff();
    }
  }

  const filteredStaff = staffData && staffData.filter((staff) => {
    return (
      staff.name.toLowerCase().includes(search.toLowerCase()) &&
      (designation ? staff.designation === designation : true) &&
      (department ? staff.department === department : true) &&
      (org ? staff.org === org : true)
    );
  });

  /**Profile Picture Updation */
  const selectFile = (sid) => {
    setSid(sid);
    fileInputRef.current.click()
  };
  const fileInputRef = useRef(null);
  const handleImageChange = async () => {
    const file = fileInputRef.current?.files[0];
    if (file) {
      try {
        var formdata = new FormData();
        console.log(file);
        formdata.append("file", file);
        formdata.append("directoryName", '');
        formdata.append("sid", sid);
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/uploadFile`, {
          method: 'POST',
          headers: {},
          body: formdata,
        });

        const data = await res.json();
        if (res.ok) {
          setUploading(false);
          toast.success(data.message);
          fetchStaff();
        } else {
          setUploading(false);
          toast.error(data.message);
        }
      } catch (err) {
        setUploading(false);
        console.error(err);
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Staff</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex justify-between items-center gap-2 mb-4 p-4 ">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-58 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-35 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Branch</option>
              <option value="LCS">LCS</option>
              <option value="LPS">LPS</option>
              <option value="Tilottama">Tilottama</option>
            </select>
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Designations</option>
              <option value="Chairman">Chairman</option>
              <option value="Secretary">Secretary</option>
              <option value="Principal">Principal</option>
              <option value="Teaching">Teaching</option>
              <option value="Non Teaching">Non Teaching</option>
              <option value="Other">Other</option>
            </select>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-48 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Subject</option>
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
            <button
              onClick={handleAdd}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add New
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="p-1">Total : <strong>{filteredStaff && filteredStaff.length}</strong></div>
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2 border-b">Name</th>
                  <th className="text-left px-4 py-2 border-b">Branch</th>
                  <th className="text-left px-4 py-2 border-b">Designation</th>
                  <th className="text-left px-4 py-2 border-b">Department</th>
                  <th className="text-left px-4 py-2 border-b">Phone</th>
                  <th className="text-left px-4 py-2 border-b">Email</th>
                  <th className="text-left px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredStaff && filteredStaff.map((staff) => (
                  <tr key={staff.sid} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b flex">
                      <img
                        src={`${import.meta.env.VITE_SERVICE_URL}/files/${staff.profile_pic || 'maleAvatar.jpg'}`}
                        alt={`Profile Picture`}
                        className="h-5 w-5"
                        style={{ borderRadius: "50%", border: "1px solid green" }}
                      />&nbsp;{staff.name}</td>
                    <td className="px-4 py-2 border-b">{staff.org}</td>
                    <td className="px-4 py-2 border-b">{staff.designation}</td>
                    <td className="px-4 py-2 border-b">{staff.department}</td>
                    <td className="px-4 py-2 border-b">{staff.phone}</td>
                    <td className="px-4 py-2 border-b">{staff.email}</td>
                    <td className="px-4 py-2 border-b space-x-3">
                      <button
                        onClick={() => handleEdit(staff)}
                        className="text-blue-600 hover:underline"
                        title="Edit Staff"
                      >
                        <Pen className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(staff.sid)}
                        className="text-red-600 hover:underline"
                        title="Delete Staff"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => selectFile(staff.sid)}
                        className="text-green-600 hover:underline"
                        title="Update Profile Picture"
                      >
                        <Image className="h-4 w-4" />
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={() => handleImageChange()}
                        accept="image/*"
                        className="hidden"
                      />
                    </td>
                  </tr>
                ))}
                {filteredStaff && filteredStaff.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No staff found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <EditStaffModal
          isOpen={isModalOpen}
          onClose={(data) => closeModal(false, data)}
          staffData={selectedStaff}
          onSave={handleSave}
          mode={mode}
        />
        {/* ToastContainer added here */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      {uploading && (
        <Loader></Loader>
      )}
    </>


  );
};

export default ManageStaff;
