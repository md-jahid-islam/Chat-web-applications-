import React from 'react';
import {
  FaSearch,
  FaPlus,
  FaUserCircle,
  FaPhoneAlt,
  FaVideo,
  FaPaperclip,
  FaSmile,
  FaMicrophone,
  FaImage,
} from 'react-icons/fa';

const ChatWebComponents = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar (People List) */}
      <aside className="bg-white w-full md:w-80 border-r border-gray-200 p-4 flex flex-col">
        {/* Chat Search */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search chats or people" className=" pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Add New Chat Button */}
        <div className=''>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4 flex items-center justify-center ">  <FaPlus className="mr-2" /> New Chat</button>
        </div>

        {/* People List */}
        <div className="overflow-y-auto flex-grow">
          <ul>
            {/* Sample Person */}
            <li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer rounded-md">
              <FaUserCircle className="text-3xl text-gray-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">John Doe</h3>
                <p className="text-sm text-gray-500">Last message preview...</p>
                <p className="text-xs text-gray-400">john.doe@example.com</p> {/* Added Email */}
              </div>
            </li>
            <li className="flex items-center p-3 hover:bg-gray-100 cursor-pointer rounded-md">
              <FaUserCircle className="text-3xl text-green-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-sm text-green-500">Online</p>
                <p className="text-xs text-gray-400">jane.smith@example.com</p> {/* Added Email */}
              </div>
            </li>
            {/* Add more people list items here */}
            {Array.from({ length: 10 }, (_, i) => (
              <li
                key={i}
                className="flex items-center p-3 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                <FaUserCircle className="text-3xl text-purple-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">User {i + 3}</h3>
                  <p className="text-sm text-gray-500">Some status...</p>
                  <p className="text-xs text-gray-400">user{i + 3}@example.com</p> {/* Added Email */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 bg-gray-50 flex flex-col justify-between">
        {/* Chat Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <FaUserCircle className="text-4xl text-blue-500 mr-3" />
            <div>
              <h2 className="font-semibold text-gray-800">Selected User</h2>
              <p className="text-sm text-green-500">Online</p>
              <p className="text-xs text-gray-400">selected.user@example.com</p> {/* Added Email */}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FaPhoneAlt />
            </button>
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FaVideo />
            </button>
          </div>
        </header>

        {/* Message Conversations */}
        <div className="p-4 overflow-y-auto flex-grow">
          <div className="space-y-3">
            {/* Incoming Message */}
            <div className="flex items-start space-x-2 max-w-xs">
              <FaUserCircle className="text-3xl text-blue-500" />
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                <p className="text-sm">Hello!</p>
              </div>
            </div>
            {/* Outgoing Message */}
            <div className="flex items-end space-x-2 justify-end max-w-xs self-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <p className="text-sm">Hi there!</p>
              </div>
              <FaUserCircle className="text-3xl text-green-500" />
            </div>
            {/* Image Message */}
            <div className="flex items-start space-x-2 max-w-md">
              <FaUserCircle className="text-3xl text-blue-500" />
            
            </div>
            {/* File Upload Message */}
            <div className="flex items-end space-x-2 justify-end max-w-xs self-end">
              <div className="bg-blue-500 text-white p-3 rounded-md">
                <p className="text-sm">document.pdf</p>
                <p className="text-xs opacity-70">1.2 MB</p>
              </div>
              <FaUserCircle className="text-3xl text-green-500" />
            </div>
            {/* Add more message items here */}
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={`incoming-${i}`}
                className="flex items-start space-x-2 max-w-xs"
              >
                <FaUserCircle className="text-3xl text-blue-500" />
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                  <p className="text-sm">Another message {i + 1}</p>
                </div>
              </div>
            ))}
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={`outgoing-${i}`}
                className="flex items-end space-x-2 justify-end max-w-xs self-end"
              >
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <p className="text-sm">Reply {i + 1}</p>
                </div>
                <FaUserCircle className="text-3xl text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Message Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FaPaperclip />
            </button>
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <FaImage />
            </button>
            <button className="p-2 rounded-full text-yellow-500 hover:bg-yellow-100">
              <FaSmile />
            </button>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <FaMicrophone className="mr-2" /> Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatWebComponents;
