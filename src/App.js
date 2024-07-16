import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LiveVideoPage from './pages/LiveVideoPage';
import GasMonitoringPage from './pages/GasMonitoringPage';
import AlertPage from './pages/AlertPage';
import ControlPage from './pages/ ControlPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/live-video" element={<LiveVideoPage />} />
        <Route path="/gas-monitoring" element={<GasMonitoringPage />} />
        <Route path="/alerts" element={<AlertPage />} />
        <Route path="/control" element={<ControlPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
