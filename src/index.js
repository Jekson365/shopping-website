import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BrowserRouter from 'react-router-dom'


// components 

import { Headphones } from './headphones/Headphones';
import { Speakers } from './speakers/Speakers';
import { Earphones } from './earphones/Earphones';
import { Navbar } from './components/Navbar';
import { Headercontent } from './components/Headercontent';




// user context



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

