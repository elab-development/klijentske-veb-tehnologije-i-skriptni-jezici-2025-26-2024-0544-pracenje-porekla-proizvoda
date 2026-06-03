// src/App.tsx
// 1. SVI import-i na vrhu
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Kontakt from './pages/Kontakt';
import Pregled from './pages/Pregled';
import ProductDetail from './pages/ProductDetail';
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
        <Route path="/register" element={<Register />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/pregled" element={<Pregled />} />
        <Route path="/pregled/:productId" element={<ProductDetail />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
