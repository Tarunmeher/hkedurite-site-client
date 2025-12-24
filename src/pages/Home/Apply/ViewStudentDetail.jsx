import React, { useState, useEffect } from "react";
import axios from "axios";


export default function ViewStudentDetail() {
	const [student, setStudent] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");


	// Fetch student details from API
	const fetchStudentDetails = async () => {
		setLoading(true);
		setError("");

		try {
			const response = await axios.get("http://lambodargroupofinstitutions.in/get-students"); // Replace with actual API URL
			if(response.data.status=='success' && response.data.files){
                if(response.data.files.length>0){
                    setStudent(response.data.files);
                }                
            }else{
                setStudent(null);
            }
            
		} catch (err) {
			setError("Failed to load student details");
			console.error("API Error:", err);
		} finally {
			setLoading(false);
		}
	};

	// Fetch data when the component mounts
	useEffect(() => {
		fetchStudentDetails();
	}, []);

	return (
		<div className="container mx-auto p-5">
			<h2 className="text-2xl font-bold mb-4">Student Details</h2>

			{loading && <p>Loading...</p>}
			{error && <p className="text-red-500">{error}</p>}

			{student ? (
				<div className="border p-4 rounded shadow-md overflow-y-auto">
					<table className="min-w-full border-collapse border border-gray-300">
						<thead>
							<tr>
                            <td className="border px-4 py-2 font-bold">Student Name:</td>
							<td className="border px-4 py-2 font-bold">Father's Name:</td>
                            <td className="border px-4 py-2 font-bold">Father's Occupation:</td>
							<td className="border px-4 py-2 font-bold">Mother's Name:</td>
                            <td className="border px-4 py-2 font-bold">Mother's Occupation:</td>
							<td className="border px-4 py-2 font-bold">Gender:</td>
							<td className="border px-4 py-2 font-bold">Email:</td>
							<td className="border px-4 py-2 font-bold">Mobile:</td>
							<td className="border px-4 py-2 font-bold">Aadhaar:</td>
							<td className="border px-4 py-2 font-bold">Caste:</td>
							<td className="border px-4 py-2 font-bold">School Name:</td>
							<td className="border px-4 py-2 font-bold">Roll Number:</td>
							<td className="border px-4 py-2 font-bold">Present Address:</td>
							<td className="border px-4 py-2 font-bold">Permanent Address:</td>
							<td className="border px-4 py-2 font-bold">Transaction ID:</td>
							<td className="border px-4 py-2 font-bold">Photo:</td></tr>
						</thead>
						<tbody>
							{student.map((std, index) => (
							<tr>
								<td className="border px-4 py-2">{std.student_name}</td>
								<td className="border px-4 py-2">{std.fathers_name}</td>
								<td className="border px-4 py-2">{std.fathers_occupation}</td>
								<td className="border px-4 py-2">{std.mothers_name}</td>
								<td className="border px-4 py-2">{std.mothers_occupation}</td>
								<td className="border px-4 py-2">{std.gender}</td>
								<td className="border px-4 py-2">{std.email}</td>
								<td className="border px-4 py-2">{std.mobile}</td>
								<td className="border px-4 py-2">{std.adhaar}</td>
								<td className="border px-4 py-2">{std.caste}</td>
								<td className="border px-4 py-2">{std.school_name}</td>
								<td className="border px-4 py-2">{std.roll_number}</td>
								<td className="border px-4 py-2">{std.present_at}, {std.present_post}, {std.present_ps}, {std.present_dist}, {std.present_pincode}, {std.present_contactno}</td>
								<td className="border px-4 py-2">{std.permanent_at}, {std.permanent_post}, {std.permanent_ps}, {std.permanent_dist}, {std.permanent_pincode}, {std.permanent_contactno}</td>
								<td className="border px-4 py-2">{std.transaction_id}</td> 
								<td className="border px-4 py-2">
									{std.photo_path ? (
										<img src={`https://lambodargroupofinstitutions.in/files/${std.photo_path.split("/")[2]}`} alt="Student" className="w-32 h-32 object-cover" />
									) : (
										"No Photo"
									)}
								</td>
							</tr>
								))}
						</tbody>
					</table>
				</div>
			) : (
				!loading && <p>No student details available.</p>
			)}

			<button 
				onClick={fetchStudentDetails} 
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Refresh Data
			</button>
			</div>
	)
}
