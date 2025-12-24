import { useState, useRef } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../../assets/css/mobile.css';

const ProfileDropdown = ({ user, onTabChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                        onClick={() => { onTabChange('profile'); setIsOpen(false); }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        <User className="w-4 h-4 mr-2" />
                        Profile
                    </button>
                    <button
                        onClick={() => console.log('Logging out...')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

const MyProfile = () => {
    const fileInputRef = useRef(null);
    const [activeTab, setActiveTab] = useState('profile');
    const navigate = useNavigate();

    useEffect(() => {
        const userData = sessionStorage.getItem('userData');

        if (!userData) {
            navigate('/admin/login'); // Redirect if not logged in
        } else {

        }
    }, [navigate]);

    const user = JSON.parse(sessionStorage.getItem('userData')).results;
    if (!user) return null; // Prevent render before redirect


    /**Profile Updation */
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleProfileSubmit = async (e) => {
        e.preventDefault();        
        try {
            const isAllEmpty = Object.values(formData).every(val => val.trim() === '');
            if(isAllEmpty){
                return;
            }
            const currentUrl = window.location.href;
            let url = import.meta.env.VITE_SERVICE_URL;
            if (currentUrl.includes('https')) {
                url = url.replace('http', 'https')
            }
            const res = await fetch(`${url}/updateProfile`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uname:JSON.parse(sessionStorage.getItem('userData')).results.uname,
                    name:formData.name,
                    email:formData.email,
                    mobile:formData.mobile
                }),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success(data.message);
                sessionStorage.setItem('userData', JSON.stringify(data));
                window.location.reload();
            } else {
                toast.error(data.message || 'Failed to Update');
            }
        } catch (err) {
            console.error(err);
            toast.error('Something went wrong');
        }
    };


    /*Change Password*/
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error('New passwords do not match!');
            return;
        }
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
        console.log(passwordData)
    };

    /**Profile Picture Updation */
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setUser(prev => ({
    //                 ...prev,
    //                 avatar: reader.result
    //             }));
    //             toast.success('Profile picture updated successfully!');
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    return (
        <>
            <div className="flex h-screen bg-gray-50">
                <div className="flex-1 p-8 overflow-auto profilepagemobile">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {activeTab === 'profile' ? 'Profile' : 'Security Settings'}
                        </h1>
                        <ProfileDropdown user={user} onTabChange={setActiveTab} />
                    </div>

                    {activeTab === 'profile' ? (
                        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <img
                                            src={import.meta.env.VITE_SERVICE_URL + '/files/' + user.profile_pic}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full border-4 border-blue-100"
                                        />
                                        {/* <button
                                            onClick={() => fileInputRef.current.click()}
                                            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </button>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                        /> */}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                                        <p className="text-gray-600">{user.desgn}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500">Email</label>
                                            <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500">Phone</label>
                                            <p className="mt-1 text-sm text-gray-900">{user.mobile}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500">Joined</label>
                                            <p className="mt-1 text-sm text-gray-900">{user.created_at.split("T")[0]}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500">Last Login</label>
                                            <p className="mt-1 text-sm text-gray-900">{user.logged_at}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-medium text-gray-800 mb-4">Update Profile</h3>
                                <form onSubmit={handleProfileSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                placeholder={user.name}
                                                onChange={handleProfileChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder={user.email}
                                                onChange={handleProfileChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Phone</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                placeholder={user.mobile}
                                                onChange={handleProfileChange}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Change Password</h2>
                            <form onSubmit={handlePasswordSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        name="currentPassword"
                                        value={user.password}
                                        onChange={handlePasswordChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        value={passwordData.newPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        minLength="8"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={passwordData.confirmPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        minLength="8"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {/* ToastContainer added here */}
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default MyProfile;
