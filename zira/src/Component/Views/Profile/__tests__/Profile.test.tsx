/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { findByRole, fireEvent, getByLabelText, waitFor } from '@testing-library/react';
import Profile from '../Profile';
import { AuthProps } from '../../../../Models/PropTypes';
import TestHelper from '../../../TestHelpers/TestHelper';
import { data } from 'jquery';

const email = 'test@email.com';
const authLoggedIn: AuthProps = { isAuthenticated: true, user: { name: 'test', email: email } };
const authLoggedOut: AuthProps = { isAuthenticated: false, user: { name: 'test', email: email } };
const dataWithUser = { data: { firstName: 'John', surname: 'Doe', email: email }, status: 200 };

const _testHelper: TestHelper = new TestHelper();

describe('Profile Can Render', () => {
    it('Renders with page when logged in', async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            getByText('Profile');
        });
    });

    it('Renders empty when logged out', () => {
        _testHelper.setUpMock(dataWithUser);
        const { queryByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedOut}></Profile>);
        const name = queryByText('Profile');
        expect(name).toBeNull();
    });
});

describe('Profile Renders with correct text', () => {
    it('Personal Details is the default view to be shown', async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getAllByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            const personalDetailText = getAllByText(`Personal Details`);
            expect(personalDetailText.length).toBe(2);
        });
    });
    it(`Correct Text is displayed when a user is found`, async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getByDisplayValue } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            const emailInput = getByDisplayValue('test@email.com');
            const firstNameInput = getByDisplayValue('John');
            const surnameInput = getByDisplayValue('Doe');

            expect(emailInput).toBeInTheDocument();
            expect(firstNameInput).toBeInTheDocument();
            expect(surnameInput).toBeInTheDocument();
        });
    });
});

describe('User interaction tests', () => {
    it('When user clicks Issues button it displays the Issue view', async () => {
        _testHelper.setUpMock(dataWithUser);
        const { getByText } = _testHelper.renderWithRedux(<Profile auth={authLoggedIn}></Profile>);
        await waitFor(() => {
            const issuesButton = getByText('Issues');
            fireEvent.click(issuesButton);
        });
        getByText('Content Issues');
    });
});
