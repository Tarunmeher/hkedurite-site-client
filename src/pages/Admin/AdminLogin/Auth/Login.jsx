import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loader from "../../../../components/common/loader";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const currentUrl = window.location.href;
            let url = import.meta.env.VITE_SERVICE_URL;
            if (currentUrl.includes('https')) {
                url = url.replace('http', 'https')
            }

            setUploading(true);
            const res = await fetch(`${url}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            });

            const data = await res.json();
            console.log()
            if (data.status == 'success' && Object.keys(data.results).length) {
                // Redirect to profile page with data
                setUploading(false);
                toast.success('Redirecting to profile......');
                setTimeout(() => {
                    data.results.logged_at = new Date().toLocaleTimeString()
                    sessionStorage.setItem('userData', JSON.stringify(data));
                    navigate('/admin'); // send data to profile page
                }, 1000);
            } else {
                setUploading(false);
                toast.error(data.message || 'Login failed. Invalid Credential');
            }
        } catch (err) {
            setUploading(false);
            console.error(err);
            toast.error('Something went wrong ! Please Try again');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f1b] relative overflow-hidden">
            {/* Background gradient circles */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 to-blue-800 rounded-full blur-2xl opacity-70 z-0" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-70 z-0" />

            {/* Glass Card */}
            <div className="z-10 w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-md border border-white/10 text-white">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login Here</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-3 rounded bg-white/10 text-white placeholder-white/60 outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className="text-sm text-blue-400 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-white text-black font-bold py-2 rounded hover:bg-gray-200 transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
            {/* ToastContainer added here */}
            <ToastContainer position="top-right" autoClose={3000} />

            {uploading && (
                <Loader></Loader>
            )}
        </div>
    );
};

export default Login;
