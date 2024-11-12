import { LibraryChild1 } from './LibraryChild1';
import { LibraryChild2 } from './LibraryChild2';

export const LibraryComponent = () => {
    // I'm a main library component
    // I'm already wrapped in a context provider

    return (
        <div>
            <hr />
            <h2>LibraryComponent</h2>
            <LibraryChild1 />
            <LibraryChild2 />
            <hr />
        </div>
    );
};
