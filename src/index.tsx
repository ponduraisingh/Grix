import React from 'react';
import ReactDOM from 'react-dom/client';

import "@fontsource/ubuntu";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/cabin";
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/500.css";

import { ThemeProvider } from 'context/theme/themeContext';
import App from 'App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider><App /></ThemeProvider>
  </React.StrictMode>
);

