import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const style = document.createElement('style');
style.textContent = `
  :root {
    --gradient-primary: linear-gradient(to right, #2563eb, #9333ea, #2563eb);
    --pattern-diagonal: repeating-linear-gradient(
      45deg,
      rgba(37, 99, 235, 0.05) 0px,
      rgba(37, 99, 235, 0.05) 2px,
      transparent 2px,
      transparent 10px
    );
  }

  ::selection {
    background: rgba(37, 99, 235, 0.2);
    color: #2563eb;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);