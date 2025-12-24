import { useState, useEffect } from 'react';
import { Pen, Trash2, Plus, Search } from 'lucide-react';
import AddEditEventModal from './AddEventModal';
import { toast, ToastContainer } from 'react-toastify';
import Loader from "../../../components/common/loader";
const ManageEvent = () => {
  // Sample event data matching your image
  const [events, setEvents] = useState(null);
  const [uploading, setUploading] = useState(false);
  // State for modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const eventStatus = (dateString) => {
    if (new Date() == new Date(dateString)) {
      return 'Today';
    } else if (new Date() < new Date(dateString)) {
      return 'Upcoming';
    } else {
      return 'Completed';
    }
  };

  // Filter events based on search term
  const filteredEvents = events && events.filter(event => {
    const searchLower = searchTerm.toLowerCase();
    return (
      event.event_name.toLowerCase().includes(searchLower) ||
      event.description.toLowerCase().includes(searchLower)
    );
  });

  // Handle add new event
  const handleAdd = () => {
    setCurrentEvent({
      event_name: '',
      description: '',
      scheduled_date: ''
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Handle edit event
  const handleEdit = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Handle delete event
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/deleteEvent`, {
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
          getEvents();
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/updateEvent`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: currentEvent.id,
            event_name: currentEvent.event_name,
            description: currentEvent.description,
            scheduled_date: currentEvent.scheduled_date,
            time: currentEvent.time
          })
        });

        const data = await res.json();
        if (res.ok) {
          setUploading(false);
          getEvents();
          setIsModalOpen(false);
          toast.success(data.message);
        } else {
          setUploading(false);
          toast.error(data.message);
          // setIsModalOpen(false);
        }
      } else {
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes('https')) {
          url = url.replace('http', 'https')
        }
        setUploading(true);
        const res = await fetch(`${url}/createEvent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_name: currentEvent.event_name,
            description: currentEvent.description,
            scheduled_date: currentEvent.scheduled_date,
            time: currentEvent.time
          })
        });

        const data = await res.json();
        if (res.ok) {
          setUploading(false);
          getEvents();
          setIsModalOpen(false);
          toast.success(data.message);
        } else {
          setUploading(false);
          toast.error(data.message);
          // setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
      setUploading(false);
      // setIsModalOpen(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent({
      ...currentEvent,
      [name]: value
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getEvents = async () => {
    try {
      const currentUrl = window.location.href;
      let url = import.meta.env.VITE_SERVICE_URL;
      if (currentUrl.includes('https')) {
        url = url.replace('http', 'https')
      }
      setUploading(true);
      const res = await fetch(`${url}/getEvents`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({}),
      });

      const data = await res.json();
      if (res.ok) {
        setUploading(false);
        setEvents(data.results);
      } else {
        setUploading(false);
        setEvents(null);
      }
    } catch (err) {
      setUploading(false);
      console.error(err);
      setEvents(null);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Events</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheduled On</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheduled At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvents && filteredEvents.map((event, index) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.event_name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">{event.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(event.scheduled_date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${eventStatus(event.scheduled_date) === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                        eventStatus(event.scheduled_date) === 'Completed' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'}`}>
                      {eventStatus(event.scheduled_date)}

                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.time?event.time:'Timing not available'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:text-blue-900 mr-3 flex items-center gap-1"
                    >
                      <Pen className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 hover:text-red-900 flex items-center gap-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AddEditEventModal
        isOpen={isModalOpen}
        isEditing={isEditing}
        currentEvent={currentEvent}
        onClose={() => setIsModalOpen(false)}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />


      {/* ToastContainer added here */}
      <ToastContainer position="top-right" autoClose={3000} />

      {uploading && (
        <Loader></Loader>
      )}
    </div>
  );
};

export default ManageEvent;