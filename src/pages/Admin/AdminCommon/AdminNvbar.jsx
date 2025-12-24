import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate()
  const logOut = () => {
    sessionStorage.clear();
    navigate('/admin/login');
  };

  const user = JSON.parse(sessionStorage.getItem('userData')).results;
  if (!user) return null; // Prevent render before redirect

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Mail & Notification */}
      <div className="flex items-center gap-6">
        
      </div>

      {/* Right: User Info */}
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={import.meta.env.VITE_SERVICE_URL+'/files/'+user.profile_pic}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Hi, {user.name}</span>
          <FaChevronDown className="text-xs text-gray-500" />
        </div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10">
            <Link to='/admin/my-profile'>
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <FaUser className="text-gray-600" />
                <span className="text-sm">Profile</span>
              </div>
            </Link>
            {/* <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaCog className="text-gray-600" />
              <span className="text-sm">Account</span>
            </div> */}
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              <FaSignOutAlt />
              <span className="text-sm" onClick={logOut}>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
