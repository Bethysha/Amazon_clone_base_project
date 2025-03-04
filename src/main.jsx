import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './Components/DataProvider/DataProvider.jsx';
import { initialState,reducer } from './Components/Utility/reducer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
