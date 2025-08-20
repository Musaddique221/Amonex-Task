import React from "react";
import { FaHome, FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center">
      <button className="bg-white/30 backdrop-blur-sm w-[90%] py-3 rounded-full text-white font-semibold">
        <div className="flex justify-between px-4">
          <FaHome size={40} color="#9999ff" />
          <IoIosMail size={40} />
          <MdMessage size={40} />
          <FaRegUser size={40} />
        </div>
      </button>
    </div>
  );
};

export default Footer;
