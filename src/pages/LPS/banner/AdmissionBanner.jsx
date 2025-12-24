export default function AdmissionBanner({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-50">
        <img src="https://cdn.pixabay.com/photo/2024/01/30/12/59/women-8541959_1280.jpg" alt="Admission Open" className="w-full rounded" />
        <h2 className="text-xl font-bold my-4">Admissions Open Now!</h2>
        <p className="text-gray-600">Enroll today to start your journey with us.</p>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">
            Close
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
