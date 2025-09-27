// src/App.js --->
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { store } from './redux/store';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

// AppContent
const AppContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/home" />} />
      <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;