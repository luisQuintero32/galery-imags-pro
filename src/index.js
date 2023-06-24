import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import galery from './data/galery.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App galery={galery} />
  </React.StrictMode>
);
