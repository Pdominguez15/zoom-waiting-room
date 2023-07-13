import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeProvider/ThemeProvider';
import { GetUser } from './GetUser/GetUser';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <GetUser />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
