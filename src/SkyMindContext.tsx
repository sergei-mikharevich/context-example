import React, { createContext, useState, useContext } from 'react';

export const SkyMindContext = createContext(null);

export const SkyMindContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => setCounter((prevCounter) => prevCounter + 1);

    return (
        <SkyMindContext.Provider value={{ counter, incrementCounter }}>
            {children}
        </SkyMindContext.Provider>
    );
};

export const useSkyMindContext = () => useContext(SkyMindContext);
