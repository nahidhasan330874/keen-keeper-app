 "use client";

import { createContext, useState } from "react";

const FriendContext = createContext();

export const FriendsContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addTimeline = (type, friend) => {
    const newItem = {
      id: Date.now(),
      type,
      name: friend.name,
      time: new Date().toLocaleTimeString(),
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendContext;