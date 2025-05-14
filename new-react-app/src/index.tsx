import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/App.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found. Make sure 'index.html' has a <div id='root'></div>.");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);