import { FaPhoneAlt, FaVideo, FaEllipsisV } from 'react-icons/fa';

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-sm p-4 rounded-t-lg">
      {/* Left: User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="https://avatarfiles.alphacoders.com/365/365720.png" 
          alt="Anil"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold">Anil</h2>
          <p className="text-gray-500 text-sm">Online - Last seen, 2:02pm</p>
        </div>
      </div>

      {/* Right: Action Icons */}
      <div className="flex space-x-4 text-red-600">
        <FaPhoneAlt className="cursor-pointer" />
        <FaVideo className="cursor-pointer" />
        <FaEllipsisV className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;
