import React from 'react';
import { useSkyMindContext } from '../../SkyMindContext';

// I'm just a component from SkyMind
// I have access to the SkyMindContext
// and I can change value of SkyMindContext
export const CommonSkyMindComponent = () => {
    const { counter, incrementCounter } = useSkyMindContext();

    return (
        <div>
            <hr />
            <h2>CommonSkyMindComponent</h2>
            <button onClick={incrementCounter}>click to increment</button>
            <div>Count in CommonSkyMindComponent: {counter}</div>
            <hr />
        </div>
    );
};
