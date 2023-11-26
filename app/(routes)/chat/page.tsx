"use client";
import {
  faBolt,
  faClockRotateLeft,
  faMeteor,
  faMoon,
  faPlusCircle,
  faSun,
  faWandMagic,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcLength } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation'

const Chat = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "left", text: "Hello!" },
    { user: "left", text: "How are you?" },
    // Add more messages as needed
  ]);
  const pathname = usePathname()
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark mode toggling logic here, e.g., by applying CSS classes.
  };
  const handleInput = (e: any) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    // Add logic to send the new message
    // For now, let's just append the message to the array
    e.preventDefault();
    console.log("newMessage", newMessage);
    let array = [...messages, { user: "right", text: newMessage }];
    setMessages(array);
    setNewMessage("");
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log("jeff");
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-[#0b1437] text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={` ${
          isDarkMode ? "bg-[#111c44] text-white" : "bg-white text-black"
        }  w-1/6 rounded-md p-4 m-4 drop-shadow-2xl`}
      >
        <h2 className="text-3xl font-bold mt-4 mb-4 text-center">CHAT GPT</h2>
        <hr />
        <ul className="mt-5">
          <li className={`${isDarkMode?"text-white":"text-[#718096]"} mb-3`}>
            <FontAwesomeIcon icon={faPlusCircle} style={{
                marginRight: "10px",
                fontSize: "18px",
                color: "#718096",
              }} /> New
          </li>
          <li className={`${isDarkMode?"text-white":"text-[#718096]"} mb-3`}>
            {" "}
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{
                marginRight: "10px",
                fontSize: "18px",
                color: "#718096",
              }}  /> Chat
          </li>
          <li className={`${isDarkMode?"text-white":"text-[#718096]"} mb-3`}>
            <FontAwesomeIcon icon={faClockRotateLeft} style={{
                marginRight: "10px",
                fontSize: "18px",
                color: "#718096",
              }} /> History
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-5/6 p-4 relative rounded-md">
        {/* Header with Gradient Background */}
        <header
          className={`sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl p-5 ${
            !isDarkMode && "bg-gray-200/10"
          }`}
        >
           <div>
          <p>Pages / {pathname.replace(/^./, "")}</p>
          <h1 className="text-2xl font-semibold">CHAT</h1>
          </div>
          <div
            className={`flex drop-shadow-2xl rounded-full ${
              isDarkMode
                ? "backdrop-blur-xl bg-white/10  dark:bg-[#0b14374d]"
                : "bg-white"
            } p-2 border`}
          >
            <FontAwesomeIcon
              onClick={toggleDarkMode}
              icon={isDarkMode ? faMoon : faSun}
              style={{ fontSize: "28px", cursor: "pointer" }}
              className="ml-4 mt-2"
            />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
              className={`ml-4 p-2 rounded-full border ${
                isDarkMode ? "bg-[#0b1437]" : "bg-gray-100"
              }`}
            />
          </div>
        </header>
        {/* Chat Box */}
        <div
          className={`${
            isDarkMode ? "bg-[#0b1437]" : "bg-white"
          } p-4 mt-4 rounded-md min-h-[85vh] relative`}
        >
          <h2 className="text-lg font-semibold">Chat Box</h2>
          <div className="container mx-auto mt-8 ">
            <div className="p-4 rounded h-100">
              <div className="mb-4 p-3 overflow-y-auto h-[35rem] scrollbar-thin scrollbar-thumb-gray-400">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${
                      message.user === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <FontAwesomeIcon
              icon={faBolt}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "auto",
                fontSize: "475px",
                opacity: "0.03",
              }}
            />
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex space-between-1 ms-5 rounded-md h-[54px] absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[60vw]"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => handleInput(e)}
              placeholder="Type a message..."
              className="w-3/5 p-4 mx-2 rounded-full text-black border"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 ml-2 rounded-full w-[180px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Chat;
