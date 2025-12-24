import React from "react";
import { Link } from "react-router-dom";

const WeHave = () => {
    return (
        <div className="flex">
            <Link to='/' className="flex-1 text-center p-2 hover:scale-105 duration-500 transition-all bg-gray-900 text-white cursor-pointer">LCS</Link>
            
            <a href='/lps-home' target="_blank" rel="noopener noreferrer" className="flex-1 text-center p-2 bg-blue-500 hover:scale-105 duration-500 transition-all text-white cursor-pointer">LPS</a>
            
            <a href='/tillotamma-home' target="_blank" rel="noopener noreferrer" className="flex-1 text-center p-2 bg-green-500 hover:scale-105 duration-500 transition-all text-white cursor-pointer">TILLOTAMMA</a>
        </div>
    );
};

export default WeHave;
