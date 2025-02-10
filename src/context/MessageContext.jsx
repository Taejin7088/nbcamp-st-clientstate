import React, { createContext, useState } from "react";

const MessageContext = createContext(null);
export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  return (
    <MessageContext.Provider value={{ message, onMessageChange: setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
