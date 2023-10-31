import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      width="100vw"
      projectID="a37eb189-2b03-4a35-8c8a-2769881f545d"
      userName="peterparker"
      userSecret="1234"
    />
  )
}

export default App;