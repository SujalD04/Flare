import { FaHome, FaCommentDots, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#B10244] py-4 px-6 flex justify-between items-center w-full rounded-b-lg">
      {/* Logo */}
      <div className="text-white font-bold text-xl">Flare</div>

      {/* Center Icons */}
      <div className="flex space-x-8">
        <FaHome className="text-white text-xl cursor-pointer" />
        <FaCommentDots className="text-white text-xl cursor-pointer" />
        <FaBell className="text-white text-xl cursor-pointer" />
        <FaCog className="text-white text-xl cursor-pointer" />
      </div>

      {/* Right Side: Profile and Logout */}
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" 
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <a>
          <FiLogOut className="text-white text-2xl cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
