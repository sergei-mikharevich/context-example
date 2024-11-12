import { SkyMindContextProvider } from './SkyMindContext';
import { Root } from './Root';

function App() {
    return (
        <SkyMindContextProvider>
            <Root />
        </SkyMindContextProvider>
    );
}

export default App;
