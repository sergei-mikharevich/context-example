import React from 'react';

// name LibraryComponent, but actually imported LibraryComponentWrapper
// because of the index.ts file, where LibraryComponentWrapper is exported as default
import LibraryComponent from './components/LibraryComponent';
import { CommonSkyMindComponent } from './components/CommonSkyMindComponent/CommonSkyMindComponent';
import { SkyMindContext } from './SkyMindContext';

export const Root = () => {
    return (
        <div>
            <CommonSkyMindComponent />
            <LibraryComponent context={SkyMindContext} />
        </div>
    );
};
