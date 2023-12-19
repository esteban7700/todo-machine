import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GeneralProvider } from './contexts/GeneralContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GeneralProvider>
      <App />
    </GeneralProvider>
);