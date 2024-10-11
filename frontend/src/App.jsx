import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
