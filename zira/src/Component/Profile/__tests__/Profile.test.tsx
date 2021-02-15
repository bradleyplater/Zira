/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, waitFor } from '@testing-library/react';
import Profile from '../Profile';
import { User } from '../../../State/Models/UserModels';
import thunk from 'redux-thunk';
import { AuthProps } from '../../../Models/PropTypes';
import userReducer from '../../../State/User/userReducer';
import mockedAxios from '../../../__mocks__/axios';
import TestComponent from '../../TestHelpers/TestComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function renderWithRedux(component: JSX.Element) {
    const store = setUpStore();
    return render(
        <Provider store={store}>
            <Router>{component}</Router>
        </Provider>,
    );
}
const email = 'test@email.com';
const auth: AuthProps = { isAuthenticated: true, user: { name: 'test', email: email } };
function setUpStore() {
    return createStore(combineReducers({ user: userReducer }), applyMiddleware(thunk));
}

describe('Redux Tests', () => {
    jest.mock('react-router-dom', () => {
        useHistory: () => ({
            push: jest.fn(),
        });
    });
    it('Renders with Redux', () => {
        const user: User = { name: 'test', email: email };
        const data = { data: user, status: 200 };
        mockedAxios.get.mockResolvedValueOnce(data);
        renderWithRedux(<Profile auth={auth}></Profile>);
    });

    it('When user does not exist navigate to /create-profile', async () => {
        const user: User = { name: 'test', email: email };
        const data = { data: user, status: 200 };
        mockedAxios.get.mockResolvedValueOnce(data);
        const { getByText } = renderWithRedux(<Profile auth={auth}></Profile>);

        await waitFor(() => {
            getByText('Name - test');
        });
    });
});
