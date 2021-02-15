/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { applyMiddleware, CombinedState, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import Profile from '../Profile';
import { User } from '../../../State/Models/UserModels';
import thunk from 'redux-thunk';
import { AuthProps } from '../../../Models/PropTypes';
import nock from 'nock';
import userReducer from '../../../State/User/userReducer';
import evenutally from 'mocha-eventually';

function renderWithRedux(component: JSX.Element) {
    const store = setUpStore();
    return render(<Provider store={store}>{component}</Provider>);
}
const email = 'test@email.com';
const auth: AuthProps = { isAuthenticated: true, user: { name: 'test', email: email } };
function setUpStore() {
    return createStore(combineReducers({ user: userReducer }), applyMiddleware(thunk));
}

describe('Redux Tests', () => {
    afterAll(() => nock.cleanAll());

    it('Renders with Redux', () => {
        renderWithRedux(<Profile auth={auth}></Profile>);
    });

    it('When user does not exist navigate to /create-profile', () => {
        const { getByText } = renderWithRedux(<Profile auth={auth}></Profile>);
        const user: User = { name: 'test', email: email };

        nock('https://localhost:44353')
            .defaultReplyHeaders({ 'access-control-allow-origin': '*', 'access-control-allow-credentials': 'true' })
            .persist()
            .get(`/api/v1/users?email=${email}`)
            .reply(200, user);

        return evenutally(() => {
            getByText('Name - test');
        });
    });
});
