"use client";
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([{user:"",text:""}]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [searchText, setSearchText] = useState('');
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark mode toggling logic here, e.g., by applying CSS classes.
  };
  const handleInput = (e:any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.trim() === '') return;

    // You need to implement the API integration here.
    // Use a library like Axios or fetch to send the user's input to ChatGPT.

    // After receiving a response, update the messages state with the conversation.
    // For example: setMessages([...messages, { text: input, user: 'user' }, { text: 'Response from GPT', user: 'gpt' }]);

    setInput('');
  };

  return (

    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
    {/* Sidebar */}
    <aside className="w-1/4 bg-gray-700 text-white rounded-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">Option 1</li>
        <li className="mb-2">Option 2</li>
        <li className="mb-2">Option 3</li>
      </ul>
    </aside>

    {/* Main Content */}
    <main className="w-3/4 p-4 relative rounded-md">
      {/* Header with Gradient Background */}
      <header className={`flex justify-between rounded-md bg-gradient-to-r from-transparent via-transparent to-white p-4 shadow-md ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h1 className="text-2xl font-semibold">Header</h1>
        <div className='flex'>
        <button
          onClick={toggleDarkMode}
          className={`ml-4 py-2 px-4 rounded-full ${
            isDarkMode
              ? 'bg-yellow-300 text-gray-900'
              : 'bg-indigo-500 text-white'
          }`}
        >
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className={`ml-4 p-2 rounded-full border ${
            isDarkMode ? 'border-gray-800' : 'border-gray-300'
          }`}
        />
        </div>
      </header>
   {/* Chat Box */}
        <div className="bg-white p-4 mt-4 shadow-md h-80 rounded-md">
          <h2 className="text-lg font-semibold">Chat Box</h2>
          <div className="container mx-auto mt-8">
      <div className="border p-4 rounded shadow">
        <div className="mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`text-${message.user === 'user' ? 'right' : 'left'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex rounded-md">
          <input
            type="text"
            value={input}
            onChange={(e)=>handleInput(e)}
            placeholder="Type a message..."
            className="w-full p-2"
          />
          <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 ml-2 rounded-3xl">
            Send
          </button>
        </div>
      </div>
    </div>
        </div>
      </main>
    </div>
      
  );
};

export default Chat;

