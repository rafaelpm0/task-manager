'use client';

import React, { useContext, useState, createContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({children})=>{
    const [selectTheme, setselectTheme] = useState(0);
    const theme = themes[selectTheme];

    return(
        <GlobalContext.Provider value={{theme}}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
};

export const useGlobalState = ()=> useContext(GlobalContext);
export const useGlobalUpdate = ()=> useContext(GlobalUpdateContext);