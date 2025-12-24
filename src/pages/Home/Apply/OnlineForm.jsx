import React, { useState, useEffect } from "react";
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
const OnlineForm = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const [formData, setFormData] = useState({
        student_name: "",
        fathers_name: "",
        fathers_occupation: "",
        mothers_name: "",
        mothers_occupation: "",
        gender: "",
        email: "",
        mobile: "",
        adhaar: "",
        caste: "",
        school_name: "",
        roll_number: "",
        present_at: "",
        present_post: "",
        present_ps: "",
        present_dist: "",
        present_pincode: "",
        present_contactno: "",
        permanent_at: "",
        permanent_post: "",
        permanent_ps: "",
        permanent_dist: "",
        permanent_pincode: "",
        permanent_contactno: "",
        transaction_id: "",
        photo: null, // For file upload
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };
    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            photo: e.target.files[0], // Store the file
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.student_name.trim()) newErrors.student_name = "Student Name is required";
        if (!formData.fathers_name.trim()) newErrors.fathers_name = "Father's Name is required";
        if (!formData.fathers_occupation.trim()) newErrors.fathers_occupation = "Father's Occupation is required";
        if (!formData.mothers_name.trim()) newErrors.mothers_name = "Mother's Name is required";
        if (!formData.mothers_occupation.trim()) newErrors.mothers_occupation = "Mother's Occupation is required";
        if (!formData.gender) newErrors.gender = "Gender selection is required";

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile Number must be 10 digits";
        }

        if (!formData.adhaar) {
            newErrors.adhaar = "Aadhaar Number is required";
        } else if (!/^\d{12}$/.test(formData.adhaar)) {
            newErrors.adhaar = "Aadhaar Number must be 12 digits";
        }

        if (!formData.caste.trim()) newErrors.caste = "Caste is required";
        if (!formData.school_name.trim()) newErrors.school_name = "School Name is required";
        if (!formData.roll_number.trim()) newErrors.roll_number = "Roll Number is required";

        if (!formData.present_at.trim()) newErrors.present_at = "Present Address (AT) is required";
        if (!formData.present_post.trim()) newErrors.present_post = "Present Address (POST) is required";
        if (!formData.present_ps.trim()) newErrors.present_ps = "Present Police Station is required";
        if (!formData.present_dist.trim()) newErrors.present_dist = "Present District is required";

        if (!formData.present_pincode.trim()) {
            newErrors.present_pincode = "Present Pincode is required";
        } else if (!/^\d{6}$/.test(formData.present_pincode)) {
            newErrors.present_pincode = "Pincode must be 6 digits";
        }

        if (!formData.permanent_at.trim()) newErrors.permanent_at = "Permanent Address (AT) is required";
        if (!formData.permanent_post.trim()) newErrors.permanent_post = "Permanent Address (POST) is required";
        if (!formData.permanent_ps.trim()) newErrors.permanent_ps = "Permanent Police Station is required";
        if (!formData.permanent_dist.trim()) newErrors.permanent_dist = "Permanent District is required";

        if (!formData.permanent_pincode.trim()) {
            newErrors.permanent_pincode = "Permanent Pincode is required";
        } else if (!/^\d{6}$/.test(formData.permanent_pincode)) {
            newErrors.permanent_pincode = "Pincode must be 6 digits";
        }

        if (!formData.photo) newErrors.photo = "Photo upload is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const response = await axios.post("https://lambodargroupofinstitutions.in/add-student", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert(response.data.message);
            // Reset form
            setFormData({
                student_name: "",
                fathers_name: "",
                fathers_occupation: "",
                mothers_name: "",
                mothers_occupation: "",
                gender: "",
                email: "",
                mobile: "",
                adhaar: "",
                caste: "",
                school_name: "",
                roll_number: "",
                present_at: "",
                present_post: "",
                present_ps: "",
                present_dist: "",
                present_pincode: "",
                permanent_at: "",
                permanent_post: "",
                permanent_ps: "",
                permanent_dist: "",
                permanent_pincode: "",
                present_contactno: "",
                permanent_contactno: "",
                transaction_id: "",
                photo: ""
            });
            setErrors({});
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert(error.response.data.message)
        }
    };

    return (
        <div className="min-h-screen items-center justify-center bg-gradient-to-b from-blue-200 to-white p-8">
            <div
                className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full grid grid-cols-1 gap-8 p-10"
                data-aos="fade-up"
            >
                {/* Left Side: Form */}
                <div>
                    <div className="text-center">
                        <img src={''} alt="College Logo" className="h-20 mx-auto" />
                    </div>
                    <h2 className="text-3xl font-bold text-center text-red-800 mb-6" data-aos="fade-down">
                        Vrindavan Smart School
                    </h2>
                    <h3 className="text-2xl font-bold text-center">
                        CHICHAIGUDA KALAHANDI, ODISHA (766014)
                    </h3>
                    <h3 className="text-2xl text-center text-blue">
                        Summer Course Application Form 2025
                    </h3>
                    <br />
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <input type="text" name="student_name" value={formData.student_name} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.student_name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Student Name" data-aos="fade-right" />
                        {errors.student_name && <p className="text-red-500 text-sm">{errors.student_name}</p>}

                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="fathers_name" value={formData.fathers_name} onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.fathers_name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Fathers Name" data-aos="fade-right" />
                            <input type="text" name="fathers_occupation" value={formData.fathers_occupation} onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.fathers_occupation ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Fathers Occupation" data-aos="fade-left" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="mothers_name" value={formData.mothers_name} onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.mothers_name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Mothers Name" data-aos="fade-left" />
                            <input type="text" name="mothers_occupation" value={formData.mothers_occupation} onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.mothers_occupation ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Mothers Occupation" data-aos="fade-left" />
                        </div>
                        {errors.fathers_name && <p className="text-red-500 text-sm">{errors.fathers_name}</p>}
                        {errors.mothers_name && <p className="text-red-500 text-sm">{errors.mothers_name}</p>}
                        {errors.fathers_occupation && <p className="text-red-500 text-sm">{errors.fathers_occupation}</p>}
                        {errors.mothers_occupation && <p className="text-red-500 text-sm">{errors.mothers_occupation}</p>}

                        <select name="gender" value={formData.gender} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.gender ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            data-aos="fade-right">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Email" data-aos="fade-left" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.mobile ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Mobile Number" />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

                        <input type="text" name="adhaar" value={formData.adhaar} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.adhaarNumber ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Adhaar Number" />
                        {errors.adhaar && <p className="text-red-500 text-sm">{errors.adhaar}</p>}

                        <input type="text" name="caste" value={formData.caste} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.caste ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Caste" />
                        {errors.caste && <p className="text-red-500 text-sm">{errors.caste}</p>}

                        <input type="text" name="school_name" value={formData.school_name} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.school_name ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="School Name" />
                        {errors.school_name && <p className="text-red-500 text-sm">{errors.school_name}</p>}

                        <input type="text" name="roll_number" value={formData.roll_number} onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.roll_number ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                            placeholder="Roll Number (10th Board)" />
                        {errors.roll_number && <p className="text-red-500 text-sm">{errors.roll_number}</p>}

                        <h4>Present Address</h4>
                        <hr />
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="present_at" value={formData.present_at} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_at ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="AT" data-aos="fade-left" />
                                <input type="text" name="present_post" value={formData.present_post} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_post ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="POST" data-aos="fade-left" />
                            </div>
                            {errors.present_at && <p className="text-red-500 text-sm">{errors.present_at}</p>}
                            {errors.present_post && <p className="text-red-500 text-sm">{errors.present_post}</p>}
                            <br />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="present_ps" value={formData.present_ps} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_ps ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Police Station" data-aos="fade-left" />
                                <input type="text" name="present_dist" value={formData.present_dist} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_dist ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Current District" data-aos="fade-left" />
                            </div>
                            {errors.present_ps && <p className="text-red-500 text-sm">{errors.present_ps}</p>}
                            {errors.present_dist && <p className="text-red-500 text-sm">{errors.present_dist}</p>}
                            <br />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="present_pincode" value={formData.present_pincode} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_pincode ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Current Pincode" data-aos="fade-left" />
                                <input type="text" name="present_contactno" value={formData.present_contactno} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.present_contactno ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Current Contact No" data-aos="fade-left" />
                            </div>
                            {errors.present_pincode && <p className="text-red-500 text-sm">{errors.present_pincode}</p>}
                            {errors.present_contactno && <p className="text-red-500 text-sm">{errors.present_contactno}</p>}
                        </div>

                        <h4>Permanent Address</h4>
                        <hr />
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="permanent_at" value={formData.permanent_at} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_at ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="AT" data-aos="fade-left" />
                                <input type="text" name="permanent_post" value={formData.permanent_post} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_post ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="POST" data-aos="fade-left" />
                            </div>
                            {errors.permanent_at && <p className="text-red-500 text-sm">{errors.permanent_at}</p>}
                            {errors.permanent_post && <p className="text-red-500 text-sm">{errors.permanent_post}</p>}
                            <br />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="permanent_ps" value={formData.permanent_ps} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_ps ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Police Station" data-aos="fade-left" />
                                <input type="text" name="permanent_dist" value={formData.permanent_dist} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_dist ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Permanent District" data-aos="fade-left" />
                            </div>
                            {errors.permanent_ps && <p className="text-red-500 text-sm">{errors.permanent_ps}</p>}
                            {errors.permanent_dist && <p className="text-red-500 text-sm">{errors.permanent_dist}</p>}
                            <br />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="permanent_pincode" value={formData.permanent_pincode} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_pincode ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Permanent Pincode" data-aos="fade-left" />
                                <input type="text" name="permanent_contactno" value={formData.permanent_contactno} onChange={handleChange}
                                    className={`w-full px-4 py-3 border ${errors.permanent_contactno ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                    placeholder="Permanent Contact No" data-aos="fade-left" />
                            </div>
                            {errors.permanent_pincode && <p className="text-red-500 text-sm">{errors.permanent_pincode}</p>}
                            {errors.permanent_contactno && <p className="text-red-500 text-sm">{errors.permanent_contactno}</p>}
                        </div>

                        <div>
                            <input type="text" name="transaction_id" value={formData.transaction_id} onChange={handleChange}
                                className={`w-full px-4 py-3 border ${errors.transaction_id ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Transaction ID" />
                            {errors.transaction_id && <p className="text-red-500 text-sm">{errors.transaction_id}</p>}
                        </div>
                        <div>
                            <label htmlFor="photo" >Select Student Photo</label>
                            <br /><br />
                            <input type="file" name="photo" id="photo" onChange={handleFileChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Photo" />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition" data-aos="zoom-in">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OnlineForm;
