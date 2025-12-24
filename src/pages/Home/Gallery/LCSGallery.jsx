import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

export default function LCSGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState(null);


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const fetchImages = async () => {
        try {
            const currentUrl = window.location.href;
            let url = import.meta.env.VITE_SERVICE_URL;
            if (currentUrl.includes('https')) {
                url = url.replace('http', 'https')
            }
            const res = await fetch(`${url}/getAllPhotos`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({}),
            });

            const data = await res.json();
            if (res.ok) {
                setImages(data.files);
            } else {
                setImages(null);
            }
        } catch (err) {
            console.error(err);
            setImages(null);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchImages();
    }, []);

    return (
        <section className="py-10 bg-yellow-20">
            <div className="container mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4">
                    {images && images.map((img, index) => (
                        <div key={index} className="relative cursor-pointer" onClick={() => setSelectedImage(`${import.meta.env.VITE_SERVICE_URL}/files/${img.name}`)} data-aos="zoom-in">
                            <img
                                src={`${import.meta.env.VITE_SERVICE_URL}/files/${img.name}`}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover shadow-md transition-all hover:scale-105 duration-1000"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && (
                <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative max-w-3xl w-full mt-8" data-aos="fade-in">
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 text-gray-800" />
                        </button>
                        <img src={selectedImage} alt="Selected" className="w-full rounded-lg" />
                    </div>
                </Dialog>
            )}
        </section>
    );
}