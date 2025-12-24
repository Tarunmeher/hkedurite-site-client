import { useState } from "react";

const data = {
  professors: [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "John Deo",
      date: "05-01-2017",
      status: "UNPAID",
      amount: "1200$",
      transactionId: "#7234486",
    },
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Eugine Turner",
      date: "04-01-2017",
      status: "PAID",
      amount: "1400$",
      transactionId: "#7234417",
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Jacqueline Howell",
      date: "03-01-2017",
      status: "PENDING",
      amount: "1100$",
      transactionId: "#7234454",
    },
  ],
  librarian: [],
  other: [],
};

const getStatusColor = (status) => {
  switch (status) {
    case "PAID":
      return "bg-green-400 text-white";
    case "UNPAID":
      return "bg-rose-400 text-white";
    case "PENDING":
      return "bg-yellow-400 text-black";
    default:
      return "bg-gray-300 text-black";
  }
};

const SalaryStatus = () => {
  const [activeTab, setActiveTab] = useState("professors");

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Salary Status</h2>
      <div className="flex justify-center space-x-10 border-b mb-4">
        {["professors", "librarian", "other"].map((tab) => (
          <button
            key={tab}
            className={`py-2 text-sm font-semibold capitalize border-b-2 ${
              activeTab === tab
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-3">Image</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab].length > 0 ? (
              data[activeTab].map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-md text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.transactionId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-white border rounded-md shadow text-indigo-600 hover:bg-indigo-50">
          Load More
        </button>
      </div>
    </div>
  );
};

export default SalaryStatus;
