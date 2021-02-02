import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './State/Store';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="zira.eu.auth0.com"
        clientId="Qq8I6QBs0vY0Se143gJbiHL4b1TGfrIi"
        redirectUri="http://localhost:3000/profile"
    >
        <Provider store={Store}>
            <App />
        </Provider>
    </Auth0Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
