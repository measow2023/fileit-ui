import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import NotFoundPage from './NotFoundPage';
import DashboardPage from './features/dashboard/DashboardPage';
import LogsPage from './features/logs/LogsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
