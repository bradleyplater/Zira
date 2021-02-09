import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
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
