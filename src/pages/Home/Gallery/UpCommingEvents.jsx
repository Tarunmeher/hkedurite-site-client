import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function UpCommingEvents() {
  const [events, setEvents] = useState(null)
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const getEvents = async () => {
      try {
        const currentUrl = window.location.href;
        let url = import.meta.env.VITE_SERVICE_URL;
        if (currentUrl.includes("https")) {
          url = url.replace("http", "https");
        }

        const res = await fetch(`${url}/getEvents`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (res.ok) {
          setEvents(data.results);
        } else {
          setEvents(null);
        }
      } catch (err) {
        console.error(err);
        setEvents(null);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h3 className="text-lg text-orange-500 font-semibold">EVENTS</h3>
        <h2 className="text-4xl font-bold">
          Our Upcoming <span className="text-orange-500">Events</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
        {events && events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-2xl shadow-lg" data-aos="zoom-in"
          >
            <img
              src={import.meta.env.VITE_SERVICE_URL+'/siteimages/event.jpg'}
              alt={event.event_name}
              className="w-full rounded-lg h-48 object-cover"
            />
            <div className="mt-4">
              {/* <p className="text-gray-600 flex items-center gap-2">
                📍 {event.location}
              </p> */}
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                📅 {new Date(event.scheduled_date).toDateString()} | ⏰ {event.time?event.time:'Timing not available'}
              </p>
              <h3 className="text-xl font-bold mt-2">{event.event_name}</h3>
              <p className="text-gray-600 mt-1">{event.description}</p>
              {/* <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                JOIN EVENT →
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
