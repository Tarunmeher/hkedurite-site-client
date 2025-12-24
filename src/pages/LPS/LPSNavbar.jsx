import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import AdmissionBanner from "./banner/AdmissionBanner";

export default function LpsNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [orgDropdown, setOrgDropdown] = useState(false);
  const [acadDropdown, setAcadDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  const orgRef = useRef();
  const acadRef = useRef();
  const galleryRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        orgRef.current && !orgRef.current.contains(e.target) &&
        acadRef.current && !acadRef.current.contains(e.target) &&
        galleryRef.current && !galleryRef.current.contains(e.target)
      ) {
        setOrgDropdown(false);
        setAcadDropdown(false);
        setGalleryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md p-4 z-50 relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-black">LPS</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative z-50">
            <Link to="/lps-home"  className="hover:text-blue-500">Home</Link>
            <Link to="/lps-about" className="hover:text-blue-500">About Us</Link>

            <div className="relative z-50" ref={galleryRef}>
              <button
                onClick={() => {
                  setGalleryDropdown(!galleryDropdown);
                  setOrgDropdown(false);
                  setAcadDropdown(false);
                }}
                className="flex items-center hover:text-blue-500"
              >
                Gallery <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {galleryDropdown && (
                <div className="absolute bg-white shadow-md mt-2 py-2 w-44 rounded-md z-50">
                  <Link to="/gallery/photos" className="block px-4 py-2 hover:bg-gray-100">Photos</Link>
                  <Link to="/gallery/videos" className="block px-4 py-2 hover:bg-gray-100">Videos</Link>
                </div>
              )}
            </div>

            <div className="relative z-50" ref={orgRef}>
              <button
                onClick={() => {
                  setOrgDropdown(!orgDropdown);
                  setGalleryDropdown(false);
                  setAcadDropdown(false);
                }}
                className="flex items-center hover:text-blue-500"
              >
                Organisation <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {orgDropdown && (
                <div className="absolute bg-white shadow-md mt-2 py-2 w-44 rounded-md z-50">
                  <Link to="/organisation/vision" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
                  <Link to="/organisation/leadership" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
                  <Link to="/organisation/departments" className="block px-4 py-2 hover:bg-gray-100">Departments</Link>
                </div>
              )}
            </div>

            <div className="relative z-50" ref={acadRef}>
              <button
                onClick={() => {
                  setAcadDropdown(!acadDropdown);
                  setOrgDropdown(false);
                  setGalleryDropdown(false);
                }}
                className="flex items-center hover:text-blue-500"
              >
                Academics <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {acadDropdown && (
                <div className="absolute bg-white shadow-md mt-2 py-2 w-44 rounded-md z-50">
                  <Link to="/academics/programs" className="block px-4 py-2 hover:bg-gray-100">Programs</Link>
                  <Link to="/academics/curriculum" className="block px-4 py-2 hover:bg-gray-100">Curriculum</Link>
                  <Link to="/academics/examinations" className="block px-4 py-2 hover:bg-gray-100">Examinations</Link>
                </div>
              )}
            </div>

            <Link to="/lps-contact" className="hover:text-blue-500">Contact</Link>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded"
              onClick={() => setBannerVisible(true)}
            >
              Admission Open
            </button>
          </div>

          <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 p-4 bg-white shadow-md relative z-40">
            <Link to="/lps-home" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About Us</Link>

            <div>
              <button
                onClick={() => setGalleryDropdown(!galleryDropdown)}
                className="flex justify-between w-full hover:text-blue-500"
              >
                Gallery <ChevronDown className="w-4 h-4" />
              </button>
              {galleryDropdown && (
                <div className="ml-4 mt-1">
                  <Link to="/gallery/photos" className="block py-1 hover:text-blue-400">Photos</Link>
                  <Link to="/gallery/videos" className="block py-1 hover:text-blue-400">Videos</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOrgDropdown(!orgDropdown)}
                className="flex justify-between w-full hover:text-blue-500"
              >
                Organisation <ChevronDown className="w-4 h-4" />
              </button>
              {orgDropdown && (
                <div className="ml-4 mt-1">
                  <Link to="/organisation/vision" className="block py-1 hover:text-blue-400">Vision & Mission</Link>
                  <Link to="/organisation/leadership" className="block py-1 hover:text-blue-400">Leadership</Link>
                  <Link to="/organisation/departments" className="block py-1 hover:text-blue-400">Departments</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setAcadDropdown(!acadDropdown)}
                className="flex justify-between w-full hover:text-blue-500"
              >
                Academics <ChevronDown className="w-4 h-4" />
              </button>
              {acadDropdown && (
                <div className="ml-4 mt-1">
                  <Link to="/academics/programs" className="block py-1 hover:text-blue-400">Programs</Link>
                  <Link to="/academics/curriculum" className="block py-1 hover:text-blue-400">Curriculum</Link>
                  <Link to="/academics/examinations" className="block py-1 hover:text-blue-400">Examinations</Link>
                </div>
              )}
            </div>

            <Link to="/lps-contact" className="hover:text-blue-500">Contact</Link>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded"
              onClick={() => setBannerVisible(true)}
            >
              Admission Open
            </button>
          </div>
        )}
      </nav>

      <AdmissionBanner isVisible={bannerVisible} onClose={() => setBannerVisible(false)} />
    </>
  );
}
