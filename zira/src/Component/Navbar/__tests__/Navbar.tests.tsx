/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthProps } from '../../../Models/PropTypes';
import '@testing-library/jest-dom';
import TestHelper from '../../TestHelpers/TestHelper';

const _testHelper: TestHelper = new TestHelper();

const dataWithTeams = { data: [{ name: 'team 1' }, { name: 'team 2' }, { name: 'team 3' }], status: 200 };
const dataWithoutTeams = { data: [], status: 404 };
const dataApiError = { data: [], status: 500 };

const loginWithRedirect = jest.fn();
const logout = jest.fn();

const authLoggedIn: AuthProps = {
    loginWithRedirect: loginWithRedirect,
    isAuthenticated: true,
    logout: logout,
    user: {},
};
const authLoggedOut: AuthProps = {
    loginWithRedirect: loginWithRedirect,
    isAuthenticated: false,
    logout: logout,
    user: {},
};

describe('Navbar Can Render - ', () => {
    it('Renders when isAuthenticated is true', () => {
        _testHelper.setUpMock(dataWithTeams);
        _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);
    });

    it('Renders when isAuthenticated is false', () => {
        _testHelper.setUpMock(dataWithTeams);
        _testHelper.renderWithRedux(<Navbar auth={authLoggedOut}></Navbar>);
    });
});

describe('Navbar Can Render with correct text - ', () => {
    it('When isAuthenticated is true "logout" should be on Navbar', () => {
        _testHelper.setUpMock(dataWithTeams);
        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);

        getByText('logout');
    });

    it('When isAuthenticated is false "login" should be on Navbar', () => {
        _testHelper.setUpMock(dataWithTeams);
        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedOut}></Navbar>);

        getByText('login');
    });

    it('When isAuthenticated is true "Teams" should be on Navbar', () => {
        _testHelper.setUpMock(dataWithTeams);
        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);

        getByText('Teams');
    });
});

describe('Navbar - Teams dropdown populates correctly - ', () => {
    it('When isAuthenticated is true and teamsState has teams there should be all 3 teams in the dropdown', async () => {
        _testHelper.setUpMock(dataWithTeams);

        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);
        await waitFor(() => {
            getByText('team 1');
            getByText('team 2');
            getByText('team 3');
        });
    });
    it('When isAuthenticated is true and teamsState has no teams there should be no teams in the dropdown', async () => {
        _testHelper.setUpMock(dataWithoutTeams);

        const { getByText, queryByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedOut}></Navbar>);

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);

        await waitFor(() => {
            const team1 = queryByText('team 1');
            const team2 = queryByText('team 2');
            const team3 = queryByText('team 3');

            expect(team1).toBeNull();
            expect(team2).toBeNull();
            expect(team3).toBeNull();
        });
    });
    it('When isAuthenticated is true but api returns a 500 no errors occur', async () => {
        _testHelper.setUpMock(dataApiError);

        const { getByText, queryByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);

        await waitFor(() => {
            const team1 = queryByText('team 1');
            const team2 = queryByText('team 2');
            const team3 = queryByText('team 3');

            expect(team1).toBeNull();
            expect(team2).toBeNull();
            expect(team3).toBeNull();
        });
    });
});

describe('Navbar User Interaction tests', () => {
    it('When user clicks login, loginWithRedirect is called', async () => {
        _testHelper.setUpMock(dataWithTeams);
        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedOut}></Navbar>);

        await waitFor(() => {
            const button = getByText('login');
            fireEvent.click(button);

            expect(loginWithRedirect).toBeCalled();
        });
    });

    it('When user clicks logout, logout is called', async () => {
        _testHelper.setUpMock(dataWithTeams);
        const { getByText } = _testHelper.renderWithRedux(<Navbar auth={authLoggedIn}></Navbar>);

        await waitFor(() => {
            const button = getByText('logout');
            fireEvent.click(button);

            expect(logout).toBeCalled();
        });
    });
});

/*
Will handle this when completing the test case work
describe('Navbar - Teams links send to the correct route - ', () => {
    teamsStateWithTeams.teams?.forEach((team) => {
        it(`When clicking on '${team.name}' from the dropdown it should send you to '/team/${team.name}'`, () => {
            const { getByText } = renderLogin(authLoggedIn, teamsStateWithTeams);

            const teamsButton = getByText('Teams');

            fireEvent.click(teamsButton);
            const teamButton = getByText(team.name);
            fireEvent.click(teamButton);

            getByText(team.name);
        });
    });
});
*/
