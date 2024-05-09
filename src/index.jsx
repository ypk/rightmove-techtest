import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { AppDataProvider } from './AppContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <AppDataProvider>
        <App />
    </AppDataProvider>
);
