import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineSearch } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { MdEmojiPeople } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const SideNavber = () => {
  return (
    <>
    <div className="bg-gray-100 h-screen flex flex-col items-center p-4 w-full md:w-64 lg:w-80">
      {/* Search Bar */}
      <div className="mb-4 w-full">
        <div className="relative">
          <input type="text" placeholder="Search or start new chat" className="  rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"/>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdOutlineSearch className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="mb-6 w-full">
        <button className=" h-10 bg-teal-500 text-white ">
          New Chat <FaPlus />
        </button>
        <p>New Conversations </p>

      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col w-full space-y-2">
        <NavLink to='/ChatWeb' className={({ isActive }) => `flex items-center space-x-3 py-2 px-4 rounded-md${ isActive ? 'bg-teal-200 text-teal-700' : 'text-gray-700'}`}>
          <FaWhatsapp className="text-xl" />
          <span className="hidden md:block">New Chat App</span> 
        </NavLink>

        <NavLink to={'/Group'} className={({ isActive }) => `flex items-center space-x-3 py-2 px-4 rounded-md ${ isActive ? 'bg-teal-200 text-teal-700' : 'text-gray-700' }` }>
          <MdGroups2 className="text-xl" />
          <span className="hidden md:block">Group</span> 
        </NavLink>

        <NavLink to={'/People'}
          className={({ isActive }) => `flex items-center space-x-3 py-2 px-4 rounded-md${isActive ? 'bg-teal-200 text-teal-700' : 'text-gray-700'}`}>
          <MdEmojiPeople className="text-xl" />
          <span className="hidden md:block">People</span> 
        </NavLink>
       <div className=''>
        <NavLink to='/LogOut' className={({ isActive }) => `flex items-center space-x-3 pt-[200px] py-2 px-4 rounded-md ${ isActive ? 'bg-teal-200 text-teal-700' : 'text-gray-700'}`}>
        <CiLogout className="text-xl" />
        <span className="hidden md:block">Log Out</span> 
        </NavLink>

       </div>
      </nav>
    </div>
    
    </>
  );
};

export default SideNavber;