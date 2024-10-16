"use client";

import React, { useContext, useState, createContext, useEffect } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectTheme, setselectTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const theme = themes[selectTheme];

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <GlobalContext.Provider value={{ theme }}>
          <GlobalUpdateContext.Provider value={{}}>
            {children}
          </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
      ) : (
       <></>
      )}
    </>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
