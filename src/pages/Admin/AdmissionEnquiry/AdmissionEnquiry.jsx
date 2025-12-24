import { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, Phone, Calendar, BookOpen, Package } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InquiryModal from './InquiryModal';
import Loader from "../../../components/common/loader";

const AdmissionInquiry = () => {
    // Sample inquiry data
    const [inquiries, setInquiries] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentInquiry, setCurrentInquiry] = useState({
        id: '',
        name: '',
        mobile: '',
        standard: '',
        package: 'Silver',
        enquiryDate: new Date().toISOString().split('T')[0],
        status: 'Pending'
    });
    const [isEditing, setIsEditing] = useState(false);

    // Filter inquiries based on search term
    const filteredInquiries = inquiries.length && inquiries.filter(inquiry => {
        const searchLower = searchTerm.toLowerCase();
        return (
            inquiry.std_name.toLowerCase().includes(searchLower) ||
            inquiry.mobile.includes(searchTerm) ||
            inquiry.standard.toLowerCase().includes(searchLower) ||
            inquiry.package.toLowerCase().includes(searchLower)
        );
    });

    // Format date for display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };


    // Handle delete inquiry
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this enquiry?')) {
            try {
                const currentUrl = window.location.href;
                let url = import.meta.env.VITE_SERVICE_URL;
                if (currentUrl.includes('https')) {
                    url = url.replace('http', 'https')
                }
                setUploading(true);
                const res = await fetch(`${url}/deleteEnquiry`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: id }),
                });

                const data = await res.json();
                if (data.status == 'success') {
                    setUploading(false);
                    toast.success(data.message);
                    getEnquiry();
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


    const getEnquiry = async () => {
        try {
            const currentUrl = window.location.href;
            let url = import.meta.env.VITE_SERVICE_URL;
            if (currentUrl.includes('https')) {
                url = url.replace('http', 'https')
            }

            const res = await fetch(`${url}/getEnquires`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({}),
            });

            const data = await res.json();
            if (res.ok) {
                setInquiries(data.results);
            } else {
                setInquiries([]);
            }
        } catch (err) {
            console.error(err);
            setInquiries([]);
        }
    }

    useEffect(() => {
        getEnquiry();
    }, []);


    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentInquiry({
            ...currentInquiry,
            [name]: value
        });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Admission Inquiries</h1>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
                    <div className="relative w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search inquiries..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    {/* <button
                        onClick={handleAdd}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
                    >
                        <Plus className="h-4 w-4" />
                        Add Inquiry
                    </button> */}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enquiry Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredInquiries.length && filteredInquiries.map((inquiry, index) => (
                                <tr key={inquiry.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inquiry.std_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Phone className="h-4 w-4 text-gray-500 mr-1" />
                                            {inquiry.mobile}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <BookOpen className="h-4 w-4 text-gray-500 mr-1" />
                                            {inquiry.standard}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Package className="h-4 w-4 text-gray-500 mr-1" />
                                            {inquiry.package}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                                            {formatDate(inquiry.created_at)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => handleDelete(inquiry.id)}
                                            className="text-red-600 hover:text-red-900 flex items-center gap-1"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <InquiryModal
                    isEditing={isEditing}
                    currentInquiry={currentInquiry}
                    onClose={() => setIsModalOpen(false)}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            )}

            {/* ToastContainer added here */}
            <ToastContainer position="top-right" autoClose={3000} />

            {uploading && (
                <Loader></Loader>
            )}

        </div>
    );
};

export default AdmissionInquiry;