
import Page01 from './features/page01/page/Page01.tsx';
import Page02 from './features/page02/page/Page02.tsx';
import StateManagement from './features/StateManagement/page/Page.tsx';
import ReactHookForm from './features/Form/page/Page.tsx';
import ServerCommunication from './features/ServerCommunication/page/Page.tsx'
import ErrorHandling from './features/ErrorHandling/page/Page.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page01 />} />
            <Route path="/page01" element={<Page01 />} />
            <Route path="/page02" element={<Page02 />} />
            <Route path="/StateManagement" element={<StateManagement />} />
            <Route path="/Form" element={<ReactHookForm />} />
            <Route path="/ErrorHandling" element={<ErrorHandling />} />
            <Route path="/ServerCommunication" element={<ServerCommunication />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App
