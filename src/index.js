import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './components/app/app.js';
import Splash from './components/splash/splash';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <Splash duration={3000} component={App} />
);