import { Link } from "react-router-dom";

const TillotammaNavbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/tillotamma-logo.jpg" alt="Tillotamma Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li><Link to="/tillotamma-home" className="hover:underline">Home</Link></li>
        <li><Link to="/tillotamma-admissions" className="hover:underline">Admissions</Link></li>
        <li><Link to="/tillotamma-departments" className="hover:underline">Departments</Link></li>
        <li><Link to="/tillotamma-contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default TillotammaNavbar;
