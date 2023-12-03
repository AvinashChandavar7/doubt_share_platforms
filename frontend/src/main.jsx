import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './globals.css'

import { QueryProvider } from './lib/react-query/QueryProvider.jsx';
// import AuthProvider from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        {/* <AuthProvider> */}
        <App />
        {/* </AuthProvider> */}
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
