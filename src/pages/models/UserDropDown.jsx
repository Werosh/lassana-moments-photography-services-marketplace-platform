import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbMessageStar } from "react-icons/tb";
import { AiFillSignal } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const UserDropDown = ({ isOpen, onClose, userType = "normal", userDetails }) => {
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200"
        >
          <div className="relative p-4">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <RiCloseFill className="w-6 h-6" />
            </button>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={userDetails?.profileImage || "https://placehold.co/48x48/png"}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {userDetails?.name || "Maal Gamage"}
                </h3>
                <p className="text-sm text-gray-600">
                  @{userDetails?.username || "maalgamage"}
                </p>
              </div>
            </div>

            {/* Action Button */}
            {userType === "photographer" ? (
              <button className="w-full mb-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Edit Profile
              </button>
            ) : null}

            {/* Menu Items */}
            <div className="space-y-2">
              {userType === "photographer" && (
                <>
                  <MenuItem icon={<FaRegUserCircle />} text="Profile" />
                  <MenuItem icon={<BiSolidShoppingBags />} text="Work" />
                  <MenuItem icon={<TbMessageStar />} text="Reviews" />
                  <MenuItem icon={<AiFillSignal />} text="State" />
                  <div className="my-2 border-t border-gray-200" />
                </>
              )}
              
              {/* Common Items */}
              <MenuItem 
                icon={<TbLogout />} 
                text="Logout" 
                className="text-red-500 hover:bg-red-50"
              />
              <MenuItem icon={<FaUserPlus />} text="Add account" />
              
              {/* Switch User Button */}
              <button className="w-full mt-2 py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                Switch User
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper component for menu items
const MenuItem = ({ icon, text, className = "" }) => (
  <button className={`w-full flex items-center gap-3 py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors ${className}`}>
    <span className="text-lg">{icon}</span>
    <span>{text}</span>
  </button>
);

export default UserDropDown;