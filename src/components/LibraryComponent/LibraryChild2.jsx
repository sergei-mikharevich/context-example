import { useContext } from 'react';
import { LibraryContext } from './LibraryContext';

export const LibraryChild2 = () => {
    const { counter, incrementCounter } = useContext(LibraryContext);

    return (
        <div>
            <h4>LibraryChild2</h4>
            <button onClick={incrementCounter}>click to increment</button>
            <div>Count in LibraryChild2: {counter}</div>
        </div>
    );
};
