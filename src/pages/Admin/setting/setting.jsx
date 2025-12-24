// import { useState } from 'react';
// import { Settings, User, Lock, Bell, Mail, Database, Shield } from 'lucide-react';

// const Setting = () => {
//   const [activeTab, setActiveTab] = useState('account');
//   const [formData, setFormData] = useState({
//     name: 'Admin User',
//     email: 'admin@lcsgroup.edu',
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//     notifications: true,
//     emailAlerts: true,
//     backupFrequency: 'weekly',
//     twoFactorAuth: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle settings save logic here
//     console.log('Settings saved:', formData);
//     alert('Settings saved successfully!');
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-auto">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

//           {/* Tabs */}
//           <div className="flex border-b border-gray-200 mb-6">
//             <button
//               onClick={() => setActiveTab('account')}
//               className={`px-4 py-2 font-medium ${activeTab === 'account' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             >
//               <User className="inline mr-2 h-4 w-4" />
//               Account
//             </button>
//             <button
//               onClick={() => setActiveTab('security')}
//               className={`px-4 py-2 font-medium ${activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             >
//               <Lock className="inline mr-2 h-4 w-4" />
//               Security
//             </button>
//             <button
//               onClick={() => setActiveTab('notifications')}
//               className={`px-4 py-2 font-medium ${activeTab === 'notifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             >
//               <Bell className="inline mr-2 h-4 w-4" />
//               Notifications
//             </button>
//             <button
//               onClick={() => setActiveTab('data')}
//               className={`px-4 py-2 font-medium ${activeTab === 'data' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             >
//               <Database className="inline mr-2 h-4 w-4" />
//               Data Management
//             </button>
//           </div>

//           {/* Account Settings */}
//           {activeTab === 'account' && (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <User className="mr-2 h-5 w-5 text-blue-500" />
//                   Personal Information
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* Security Settings */}
//           {activeTab === 'security' && (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <Lock className="mr-2 h-5 w-5 text-blue-500" />
//                   Password
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
//                     <input
//                       type="password"
//                       id="currentPassword"
//                       name="currentPassword"
//                       value={formData.currentPassword}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
//                     <input
//                       type="password"
//                       id="newPassword"
//                       name="newPassword"
//                       value={formData.newPassword}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <Shield className="mr-2 h-5 w-5 text-blue-500" />
//                   Two-Factor Authentication
//                 </h2>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-800">Enable 2FA</h3>
//                     <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
//                   </div>
//                   <label className="inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       name="twoFactorAuth"
//                       checked={formData.twoFactorAuth}
//                       onChange={handleChange}
//                       className="sr-only peer"
//                     />
//                     <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                   </label>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* Notification Settings */}
//           {activeTab === 'notifications' && (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <Bell className="mr-2 h-5 w-5 text-blue-500" />
//                   Notification Preferences
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-sm font-medium text-gray-800">System Notifications</h3>
//                       <p className="text-sm text-gray-500">Receive alerts for system updates</p>
//                     </div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="notifications"
//                         checked={formData.notifications}
//                         onChange={handleChange}
//                         className="sr-only peer"
//                       />
//                       <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                     </label>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-sm font-medium text-gray-800">Email Alerts</h3>
//                       <p className="text-sm text-gray-500">Get important updates via email</p>
//                     </div>
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="emailAlerts"
//                         checked={formData.emailAlerts}
//                         onChange={handleChange}
//                         className="sr-only peer"
//                       />
//                       <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* Data Management Settings */}
//           {activeTab === 'data' && (
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <Database className="mr-2 h-5 w-5 text-blue-500" />
//                   Backup Settings
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label htmlFor="backupFrequency" className="block text-sm font-medium text-gray-700 mb-1">Backup Frequency</label>
//                     <select
//                       id="backupFrequency"
//                       name="backupFrequency"
//                       value={formData.backupFrequency}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     >
//                       <option value="daily">Daily</option>
//                       <option value="weekly">Weekly</option>
//                       <option value="monthly">Monthly</option>
//                     </select>
//                   </div>
//                   <div className="pt-4">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                     >
//                       Create Manual Backup
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//                 <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
//                   <Mail className="mr-2 h-5 w-5 text-blue-500" />
//                   Data Export
//                 </h2>
//                 <div className="space-y-4">
//                   <p className="text-sm text-gray-600">Export your institution's data for analysis or migration purposes.</p>
//                   <button
//                     type="button"
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Export All Data
//                   </button>
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;
import React from 'react'

const setting = () => {
    return (
        <div>setting</div>
    )
}

export default setting