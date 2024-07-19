import React, { createContext, useState } from "react";

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  const [workData, setWorkData] = useState([]);
  const [privateData, setPrivateData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  const value = {
    workData,
    setWorkData,
    privateData,
    setPrivateData,
    socialData,
    setSocialData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
