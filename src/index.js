import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages';

import reportWebVitals from './reportWebVitals';

import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
