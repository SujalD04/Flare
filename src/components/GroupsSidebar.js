const GroupSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h3 className="font-bold mb-4 text-lg text-gray-800">Groups</h3>
      <div className="flex flex-col space-y-2">
        {/* Individual Group Items */}
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/b6/80/01/b68001ade4229082ceec8808bf6ed774.jpg" 
              alt="Friends Forever"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Friends Forever</span>
          </div>
          <span className="text-sm text-gray-500">Today, 9:52pm</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/d4/8c/2d/d48c2de0debd3bef102256f979862bbd.jpg" 
              alt="Mera Gang"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Mera Gang</span>
          </div>
          <span className="text-sm text-gray-500">Yesterday, 12:31pm</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg" 
              alt="Hiking"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Hiking</span>
          </div>
          <span className="text-sm text-gray-500">Wednesday, 9:12am</span>
        </div>
      </div>
    </div>
  );
};

export default GroupSidebar;
