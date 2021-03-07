/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { waitFor } from '@testing-library/react';
import Profile from '../Profile';
import { AuthProps } from '../../../Models/PropTypes';
import TestHelper from '../../TestHelpers/TestHelper';

const email = 'test@email.com';
const authLoggedIn: AuthProps = { isAuthenticated: true, user: { name: 'test', email: email } };
const authLoggedOut: AuthProps = { isAuthenticated: false, user: { name: 'test', email: email } };
const dataWithUser = { data: { name: 'test', email: email }, status: 200 };

const _testHelper: TestHelper = new TestHelper();

describe('Profile Can Render', () => {
    it('Renders with Redux when logged in', async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            getByText('Name - test');
        });
    });

    it('Renders empty with Redux when logged out', () => {
        _testHelper.setUpMock(dataWithUser);
        const { queryByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedOut}></Profile>);
        const name = queryByText('Name');
        expect(name).toBeNull();
    });
});

describe('Profile Renders with correct text', () => {
    it(` Correct Text is displayed when a user is found.`, async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            getByText(`Name - test`);
            getByText(`Email - test@email.com`);
        });
    });
});
