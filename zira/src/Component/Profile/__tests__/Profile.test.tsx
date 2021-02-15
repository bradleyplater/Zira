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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Location from '../../TestHelpers/Location';

function renderWithRedux(component: JSX.Element) {
    const store = setUpStore();
    return render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/">{component}</Route>
                    <Route path="/:route">
                        <Location></Location>
                    </Route>
                </Switch>
            </Router>
        </Provider>,
    );
}
const email = 'test@email.com';
const authLoggedIn: AuthProps = { isAuthenticated: true, user: { name: 'test', email: email } };
const authLoggedOut: AuthProps = { isAuthenticated: false, user: { name: 'test', email: email } };
function setUpStore() {
    return createStore(combineReducers({ user: userReducer }), applyMiddleware(thunk));
}

function setUpMock(user: User = { name: 'test', email: email }, status: number) {
    const data = { data: user, status: status };
    mockedAxios.get.mockResolvedValueOnce(data);
}

describe('Profile Can Render', () => {
    it('Renders with Redux when logged in', () => {
        setUpMock({ name: 'test', email: email }, 200);
        const { getByText } = renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        getByText('Name');
    });

    it('Renders empty with Redux when logged out', () => {
        setUpMock({ name: 'test', email: email }, 200);
        const { getByText } = renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        const name = getByText('Name');
        expect(name).toBeNull();
    });
});

describe('Profile Renders with correct text', () => {
    it('Correct Text is displayed when a ', async () => {
        const user: User = { name: 'test', email: email };
        const data = { data: user, status: 200 };
        mockedAxios.get.mockResolvedValueOnce(data);
        const { getByText } = renderWithRedux(<Profile auth={authLoggedIn}></Profile>);

        await waitFor(() => {
            getByText('Name - test');
            getByText('Email - test@email.com');
        });
    });

    it('When a User doesnt exist it redirects to /create-profile', async () => {
        const user: User = { name: 'test', email: email };
        const data = { data: {}, status: 400 };
        mockedAxios.get.mockResolvedValueOnce(data);
        const { getByText } = renderWithRedux(<Profile auth={authLoggedIn}></Profile>);

        await waitFor(() => {
            getByText('/create-profile');
        });
    });
});
