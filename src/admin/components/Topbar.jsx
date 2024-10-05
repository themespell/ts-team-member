import globalSettings from "../../common/utils/globalSettings";

function Topbar() {
    return (
        <div className="w-full bg-blue-900 text-white py-4 shadow-4xl flex items-center justify-between px-4">
            {/* Breadcrumb */}
            <div className="text-sm text-blue-600">
                <a href="#" className="hover:underline">Home</a> 
                <span className="text-gray-500 mx-2">/</span> 
                <span className="text-gray-700">Dashboard</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                        {/* Replace with appropriate icon */}
                        <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>
                <div className="relative">
                    <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                        {/* Replace with appropriate icon */}
                        <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    {/* Notification Badge */}
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">10</span>
                </div>
            </div>
        </div>
    );
}

export default Topbar;