import React from 'react';

const LpsAbout = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">ABOUT CAMPUS</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Edupreme University School of Education
            </h3>
            <p className="text-gray-600 mb-4">
              Sem feugiat nam diam eu quis placerat amet mollis. Himenaeos blandit montes massa ad luctus.
            </p>
            <p className="text-gray-600">
              Aliquet aptent neque scelerisque mollis euismod contuba. Diam pretium scelerisque posuere iaculis curae ligula fusce dictumst etem fringilla litora. Massa ad magna et suspendisse arcu letius id sed orci.
            </p>
          </div>

          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors">
            DISCOVER MORE
          </button>
        </div>

        {/* Right column - Stats */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <span className="text-4xl font-bold text-blue-600">#32</span>
            <p className="text-gray-600 mt-2">Worlds Best Education Program</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <span className="text-4xl font-bold text-blue-600">99%</span>
            <p className="text-gray-600 mt-2">Receive Multiyear Fellowships</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <span className="text-4xl font-bold text-blue-600">87%</span>
            <p className="text-gray-600 mt-2">Freshman Graduation Rate</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <span className="text-4xl font-bold text-blue-600">1.5M</span>
            <p className="text-gray-600 mt-2">Undergrads from the State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpsAbout;