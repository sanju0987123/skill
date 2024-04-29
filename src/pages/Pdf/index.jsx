import React from 'react';

const Pdf = () => {
  const downloadContract = () => {
    alert('Downloading contract...');
    // Implement logic for downloading the contract
    // For example: window.open('path_to_contract_file.pdf', '_blank');
  };

  const returnToHomeScreen = () => {
    alert('Returning to home screen...');
    // Implement logic to navigate back to the home screen
    // For example: use react-router-dom's useHistory hook
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl mb-8">Contract Page</h1>
      <div className="bg-white dark:bg-gray-800 transition duration-500 ease-in-out hover:bg-gray-300 p-6 rounded-lg mb-4">
        {/* Placeholder Contract Content */}
        <p className="text-gray-900 dark:text-white">This is the contract content.</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={downloadContract}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out"
        >
          {/* Lucide PDF icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17l-5-5m5 5l5-5m-4.472-6a2 2 0 11-1.414-2.828A2 2 0 0112 5v4l3.472-3.472A2 2 0 0014.828 6A2 2 0 0012.656 9zM12 17a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          <span>Download Contract</span>
        </button>
        <button
          onClick={returnToHomeScreen}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded flex items-center space-x-2 transition duration-300 ease-in-out"
        >
          {/* Lucide Arrow Left icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Return to Home Screen</span>
        </button>
      </div>
    </div>
  );
};

export default Pdf;
