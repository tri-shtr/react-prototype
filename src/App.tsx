
import Page01 from './features/page01/page/Page01.tsx';
import Page02 from './features/page02/page/Page02.tsx';
import StateManagement from './features/StateManagement/page/Page.tsx';
import ReactHookForm from './features/Form/page/Page.tsx';
import ServerCommunication from './features/ServerCommunication/page/Page.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/StateManagement" element={<StateManagement />} />
        <Route path="/Form" element={<ReactHookForm />} />
        <Route path="/ServerCommunication" element={<ServerCommunication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
