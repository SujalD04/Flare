const PeopleSidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h3 className="font-bold mb-4 text-lg text-gray-800">People</h3>
      <div className="flex flex-col space-y-2">
        {/* Individual People Items */}
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://avatarfiles.alphacoders.com/365/365720.png" 
              alt="Anil"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Anil</span>
          </div>
          <span className="text-sm text-gray-500">Today, 9:52pm</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg" 
              alt="Karthik"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Karthik</span>
          </div>
          <span className="text-sm text-gray-500">Today, 12:11pm</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              alt="Mary ma'am"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">John</span>
          </div>
          <span className="text-sm text-gray-500">Today, 2:40pm</span>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:bg-gray-200 transition duration-200 cursor-pointer flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg" 
              alt="Bill Gates"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-800">Alice</span>
          </div>
          <span className="text-sm text-gray-500">Yesterday, 12:31pm</span>
        </div>
      </div>
    </div>
  );
};

export default PeopleSidebar;
