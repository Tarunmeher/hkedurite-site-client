import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // You can use any icon lib, like Lucide or FontAwesome
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddImageModal from "./AddImageModal";
import toast from "react-hot-toast";
import Loader from "../../../components/common/loader";
const ManageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [uploading, setUploading] = useState(false);
  async function fetchImages() {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/getAllPhotos`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (res.ok) {
        setUploading(false);
        setGallery(data.files);
      } else {
        setUploading(false);
        setGallery(null);
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      setGallery(null);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    fetchImages();
  }, [navigate]);

  const handleDelete = async (fid) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this image?");
      if (!confirmDelete) {
        return;
      }
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/deleteFile`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fid: fid })
      });

      const data = await res.json();
      if (data.status == 'success') {
        setUploading(false);
        toast.success(data.message);
        setGallery(gallery.filter((item) => item.fid !== fid));
      } else {
        setUploading(false);
        toast.error(data.message);
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      toast.error(data.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Gallery</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery && gallery.map((item) => (
          <div
            key={item.fid}
            className="relative bg-white shadow rounded overflow-hidden"
          >
            {/* Delete Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering preview
                handleDelete(item.fid);
              }}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100"
              title="Delete"
            >
              <Trash2 className="text-red-600 w-5 h-5" />
            </button>

            <div
              onClick={() => setPreviewImage(item)}
              className="cursor-pointer"
            >
              <img
                src={`${import.meta.env.VITE_SERVICE_URL}/files/${item.name}`}
                alt={item.filename}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{item.filename}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {AddImageModal && (
        <AddImageModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onAdd={() => {
            fetchImages();
            setShowModal(false);
          }}
        />
      )}

      {/* Fullscreen Image Preview */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
          <div className="relative bg-white p-4 rounded shadow-lg max-w-4xl w-full">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-600"
            >
              &times;
            </button>

            <img
              src={`${import.meta.env.VITE_SERVICE_URL}/files/${previewImage.name}`}
              alt={previewImage.filename}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <h2 className="text-center text-xl font-semibold mt-4">
              {previewImage.filename}
            </h2>
          </div>
        </div>
      )}

      {uploading && (
        <Loader></Loader>
      )}
    </div>
  );
};

export default ManageGallery;
