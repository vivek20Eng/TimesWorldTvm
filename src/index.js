// index.js --->
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './index.css';

AOS.init({ 
  duration: 1000, 
  once: true,    
  offset: 100    
}); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);