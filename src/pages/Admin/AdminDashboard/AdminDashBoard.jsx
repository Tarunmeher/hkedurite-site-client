import { FaChalkboardTeacher, FaUserGraduate, FaUserTie, FaUserShield } from "react-icons/fa";
// import SalaryStatus from "./SalaryStatus";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
    {
        title: "Professor",
        value: "45",
        icon: <FaChalkboardTeacher className="text-white text-2xl" />,
        color: "bg-blue-600",
    },
    {
        title: "Students",
        value: "1200",
        icon: <FaUserGraduate className="text-white text-2xl" />,
        color: "bg-sky-400",
    },
    {
        title: "Staff",
        value: "98",
        icon: <FaUserTie className="text-white text-2xl" />,
        color: "bg-green-500",
    },
    {
        title: "Guest Faculty",
        value: "1",
        icon: <FaUserShield className="text-white text-2xl" />,
        color: "bg-purple-500",
    },
];

const AdminDashBoard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const userData = sessionStorage.getItem('userData');

      if (!userData) {
        navigate('/admin/login'); // Redirect if not logged in
      }
    }, [navigate]);

    return (
        <>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                    >
                        <div className={`p-4 rounded-lg ${item.color}`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-gray-500">{item.title}</p>
                            <p className="text-xl font-bold text-gray-800">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="mt-10">
                <SalaryStatus />
            </div> */}

        </>
    );
};

export default AdminDashBoard;
