import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Hello = () =>{
    return <div>hello!</div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);