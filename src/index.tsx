import React from 'react';
import ReactDOM from 'react-dom';
import * as dotenv from 'dotenv';
import App from './App';
import reportWebVitals from './reportWebVitals';

dotenv.config();

console.log(process.env.API_KEY)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();