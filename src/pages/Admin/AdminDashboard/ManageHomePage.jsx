import { useState, useEffect } from "react";
import { Pen } from 'lucide-react';
import ManageSliddingBanner from './ManageSliddingBanner';
import Loader from "../../../components/common/loader";
import { toast, ToastContainer } from 'react-toastify';

const ManageHomePage = () => {
  const [activeTab, setActiveTab] = useState("slidingBanner");
  const [slidingData, setSlidingData] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Handle edit item
  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    if (e.target.name == 'file') {
      setCurrentItem({
        ...currentItem,
        [e.target.name]: e.target.files[0]
      });
    } else {
      const { name, value } = e.target;
      setCurrentItem({
        ...currentItem,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var formdata = new FormData();
      formdata.append("file", currentItem.file);
      formdata.append("description", currentItem.description);
      formdata.append("title", currentItem.title);
      formdata.append("id", currentItem.id);
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/updateBannerImage`, {
        method: 'POST',
        headers: {},
        body: formdata,
      });

      const data = await res.json();
      if (res.ok) {        
        setUploading(false);
        setIsModalOpen(false);
        toast.success(data.message);        
        getBannerImage();
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

  const getBannerImage = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/getBannerImages`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (res.ok) {
        setUploading(false);
        setSlidingData(data.results);
      } else {
        setUploading(false);
        setSlidingData(null);
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      setSlidingData(null);
    }
  }

  useEffect(() => {
    getBannerImage();
  }, []);

  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-md border">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Manage Public Homepage</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto text-center" style={{width:'100%'}}>
            <thead>
              <tr className="text-gray-600 border-b">
                <th style={{width:'40%'}} className="py-3">Image</th>
                <th style={{width:'20%'}}>Title</th>
                <th style={{width:'20%'}}>Description</th>
                <th style={{width:'20%'}}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {slidingData && slidingData.length > 0 ? (
                slidingData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 p-2">
                      <img
                        src={import.meta.env.VITE_SERVICE_URL + '/files/' + item.profile_pic}
                        alt={item.title}
                        className="w-20 h-15"
                        style={{height:'100%',width:'100%'}}
                      />
                    </td>
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">{item.description}</td>
                    <td className="p-2"><button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:underline"
                      title="Edit Staff"
                    >
                      <Pen className="h-4 w-4" />
                    </button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-400">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ManageSliddingBanner
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        currentItem={currentItem}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
      />

      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />

      {uploading && (
        <Loader></Loader>
      )}
    </>
  );
};

export default ManageHomePage;
