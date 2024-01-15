import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';

// Use createRoot to create a root
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

