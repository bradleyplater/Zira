/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import { Provider } from 'react-redux';
import Store from './State/Store';
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastProvider } from 'react-toast-notifications';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
const AUTH0_CLIENTID = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const AUTH0_REDIRECT_URI = process.env.REACT_APP_AUTH0_REDIRECT_URI!;

ReactDOM.render(
    <ToastProvider>
        <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={AUTH0_REDIRECT_URI}>
            <Provider store={Store}>
                <App />
            </Provider>
        </Auth0Provider>
    </ToastProvider>,

    document.getElementById('root'),
);
