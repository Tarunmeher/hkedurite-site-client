import { useState } from 'react';
import EditProfileModal from './EditModal';
import AddProfileModal from './AddProfileModal';

const ManageProfile = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Dusmant Meher',
      email: 'bijumeher033@gmail.com',
      role: 'Admin',
      department: 'Computer Science',
      status: 'Active',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // 🆕 search term state

  // edit modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);

  // add modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProfile, setNewProfile] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    status: 'Active',
  });

  const handleEdit = (profile) => {
    setCurrentProfile(profile);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      setProfiles(profiles.filter(profile => profile.id !== id));
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProfile({
      ...currentProfile,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedProfiles = profiles.map(profile =>
      profile.id === currentProfile.id ? currentProfile : profile
    );
    setProfiles(updatedProfiles);
    setIsEditModalOpen(false);
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newId = profiles.length ? profiles[profiles.length - 1].id + 1 : 1;
    const profileToAdd = { ...newProfile, id: newId };
    setProfiles([...profiles, profileToAdd]);
    setNewProfile({ name: '', email: '', role: '', department: '', status: 'Active' });
    setIsAddModalOpen(false);
  };

  // 🔍 Filter profiles based on search
  const filteredProfiles = profiles.filter((profile) =>
    Object.values(profile).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Profiles</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className='flex gap-6'>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Add New Profile
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['ID', 'Name', 'Email', 'Role', 'Department', 'Status', 'Actions'].map((heading, i) => (
                  <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProfiles.length > 0 ? (
                filteredProfiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-500">{profile.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{profile.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{profile.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{profile.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{profile.department}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${profile.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button onClick={() => handleEdit(profile)} className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button onClick={() => handleDelete(profile.id)} className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">No profiles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        profile={currentProfile}
        onClose={() => setIsEditModalOpen(false)}
        onChange={handleEditInputChange}
        onSubmit={handleEditSubmit}
      />

      <AddProfileModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onChange={handleAddInputChange}
        onSubmit={handleAddSubmit}
        newProfile={newProfile}
      />
    </div>
  );
};

export default ManageProfile;
