import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './layout/TopBar';
import NotFoundPage from './NotFoundPage';
import DashboardPage from './features/dashboard/DashboardPage';
import LogsPage from './features/logs/LogsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Routes>
          <Route path="" element={<LogsPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
