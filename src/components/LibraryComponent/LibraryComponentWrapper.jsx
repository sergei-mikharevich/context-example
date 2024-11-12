import { useContext } from 'react';
import { LibraryContext } from './LibraryContext';
import { LibraryComponent } from './LibraryComponent';

const LibraryComponentWrapper = ({ context }) => {
    // I'm a context wrapper
    // I got the SkyMind context as a prop
    // get value from the context
    // create a new context with the value
    // and then use my own context in children
    // I do that to avoid passing the context as a prop to all children

    const value = useContext(context);

    return (
        <LibraryContext.Provider value={value}>
            <LibraryComponent />
        </LibraryContext.Provider>
    );
};

export default LibraryComponentWrapper;
