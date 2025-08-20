import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 text-white">
      <FaBars size="20" color="white" />
      <h2 className="text-lg font-semibold">Let's find job</h2>
      <div className="flex gap-4 items-center">
        <FaBell size={18} />
        <a href="/profile">
          <FaUserCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default Header;
