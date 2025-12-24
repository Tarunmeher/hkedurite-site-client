import React from "react"; // Update with the correct path
import logo from '../../assets/images/logoo.jpg'

const ContactForm = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="bg-white rounded-lg drop-shadow-lg shadow-2xl p-8 w-full max-w-4xl">
                <img src={logo} alt="Logo" className="w-32 mb-6 mx-auto" />
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Ask how we can help you:
                </h1>
                <div className="w-20 h-1 bg-blue-500 mt-2 mb-6 mx-auto"></div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name (required)</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-3 mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Your Email (required)</label>
                        <input
                            type="email"
                            className="w-full border rounded-md p-3 mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Your Mobile Number (required)</label>
                        <input
                            type="tel"
                            className="w-full border rounded-md p-3 mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Department (required)</label>
                        <select className="w-full border rounded-md p-3 mt-1" required>
                            <option value="">-- Please choose an option --</option>
                            <option value="admissions">Admissions</option>
                            <option value="support">Support</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Subject (required)</label>
                        <input
                            type="text"
                            className="w-full border rounded-md p-3 mt-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Your Message/Query (required)</label>
                        <textarea
                            className="w-full border rounded-md p-3 mt-1 h-32"
                            maxLength="600"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;