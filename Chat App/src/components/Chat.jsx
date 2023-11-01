import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./ChatFeed";


import "../App.css";

export const Chat = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="a37eb189-2b03-4a35-8c8a-2769881f545d"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // Render custom components
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}