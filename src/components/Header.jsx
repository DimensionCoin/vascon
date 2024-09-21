import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <div className="relative flex items-center justify-between py-6">
      <Sidebar />
      <div className="mt-8 mb-5 max-w-[1300px] mx-auto flex items-center justify-between w-full px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex gap-4 text-xl ml-auto"
        >
          <a
            href="https://www.instagram.com/vassallotyler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href={`#Contact`}>
            <FaPhone />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
