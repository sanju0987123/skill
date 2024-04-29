// InstagramChatLayout.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import MessageOne from "pages/MessageOne";
import MessageThree from "pages/MessageThree";

const InstagramChatLayout = () => {
  return (
    <div className="flex">
      {/* Chat List Section */}
      <div className="w-1/4 h-screen bg-gray-800">
        {/* Render your chat list component here */}
        <MessageOne />
      </div>
      {/* Message Display Section */}
      <div className="w-3/4 h-screen bg-gray-900">
        {/* Render the message display component here */}
        <MessageThree />
        
      </div>
    </div>
  );
};

export default InstagramChatLayout;
