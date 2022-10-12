import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import './tablet.css'
import App from './App/index';


const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
    <App/>
);

