import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
