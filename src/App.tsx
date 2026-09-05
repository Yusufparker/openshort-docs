
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';

// Context
import { AppProvider } from './context/AppContext';

// Docs Routing
import DocsLayout from './pages/docs/DocsLayout';
import GettingStarted from './pages/docs/GettingStarted';
import CreateLink from './pages/docs/CreateLink';
import Analytics from './pages/docs/Analytics';
import UTM from './pages/docs/UTM';
import Pixels from './pages/docs/Pixels';
import Domains from './pages/docs/Domains';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="docs" element={<DocsLayout />}>
              <Route index element={<GettingStarted />} />
              <Route path="create" element={<CreateLink />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="utm-builder" element={<UTM />} />
              <Route path="pixels" element={<Pixels />} />
              <Route path="domains" element={<Domains />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
