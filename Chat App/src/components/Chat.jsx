import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./ChatFeed";
import CustomChatSettings from "./CustomChatSettings";


import "../App.css";

export const Chat = () => {
    const projectId = import.meta.env.VITE_PROJECT_ID;
    return (
        <ChatEngine 
        height="100vh"
        projectID={projectId}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // Render custom components
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        renderChatSettings={(chatAppProps) => <CustomChatSettings {...chatAppProps} />}
        />
    )
}