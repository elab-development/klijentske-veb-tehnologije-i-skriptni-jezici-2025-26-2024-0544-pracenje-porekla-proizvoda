// src/App.tsx
// 1. SVI import-i na vrhu
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import Kontakt from './pages/Kontakt';
import Pregled from './pages/Pregled';
import Logout from './pages/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/pregled" element={<Pregled />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
