import React, { useState, useRef, useEffect } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaNewspaper,
  FaImages,
  FaCog,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { label: "DASHBOARD", icon: <FaTachometerAlt />, path: "/admin" },
  { label: "Manage Staff", icon: <FaUsers />, path: "/admin/staff" },
  { label: "Manage Event", icon: <FaCalendarAlt />, path: "/admin/events" },
  { label: "Manage News & Notification", icon: <FaNewspaper />, path: "/admin/notifications" },
  { label: "Manage Gallery", icon: <FaImages />, path: "/admin/gallery" },
  { label: "Admission Enquiry", icon: <FaImages />, path: "/admin/Enquiry" },
  { label: "Reqruitment", icon: <FaImages />, path: "/admin/Reqruitment" },
];


const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  // Close sidebar on outside click (only for small devices)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button - only visible on small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-[#2e2f40] p-2 rounded-md focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed md:static top-0 left-0 z-40 w-64 h-full bg-[#2e2f40] text-white flex flex-col justify-between transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-700">
            <img src={import.meta.env.VITE_SERVICE_URL + '/siteimages/logo.jpg'}
            style={{filter: "drop-shadow(0 0 1px white) drop-shadow(0 0 1px white) drop-shadow(0 0 5px white)" }}
            alt="Logo" className="w-14 h-14 rounded-full" />
            <h1 className="text-lg font-bold tracking-wider">VRINDAVAN SMART SCHOOL</h1>
          </div>

          {/* Menu Items */}
          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-3 transition ${isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on mobile
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="ml-4 font-semibold text-sm">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <Link to='/admin/help'>
            <div className="flex items-center px-6 py-4 hover:bg-gray-700 transition cursor-pointer">
              <FaQuestionCircle className="text-lg" />
              <span className="ml-4 font-semibold text-sm">Help</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
