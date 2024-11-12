import { useContext } from 'react';
import { LibraryContext } from './LibraryContext';

export const LibraryChild1 = () => {
    // I'm a child of the library component
    // I'm already wrapped in a context provider
    // I can get value from the context
    // and can even change it in both contexts (in LibraryContext and in SkyMindContext)

    const { counter, incrementCounter } = useContext(LibraryContext);

    return (
        <div>
            <h4>LibraryChild1</h4>
            <button onClick={incrementCounter}>click to increment</button>
            <div>Count in LibraryChild1: {counter}</div>
        </div>
    );
};
