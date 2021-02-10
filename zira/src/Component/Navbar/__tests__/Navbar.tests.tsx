/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthProps } from '../../../Models/PropTypes';
import { ITeamsState } from '../../../State/Models/TeamsModels';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from '../../../State/Store';

const authLoggedIn: AuthProps = {
    loginWithRedirect: () => {},
    isAuthenticated: true,
    logout: () => {},
    user: {},
};

const authLoggedOut: AuthProps = {
    loginWithRedirect: () => {},
    isAuthenticated: false,
    logout: () => {},
    user: {},
};

const teamsStateWithTeams: ITeamsState = {
    loading: false,
    teams: [{ name: 'team 1' }, { name: 'team 2' }, { name: 'team 3' }],
};

const teamsStateWithoutTeams: ITeamsState = {
    loading: false,
};

describe('Navbar Can Render - ', () => {
    it('Renders when isAuthenticated is true and teamsState has teams', () => {
        render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedIn} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );
    });

    it('Renders when isAuthenticated is false and teamsState has teams', () => {
        render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedOut} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );
    });

    it('Renders when isAuthenticated is false and teamsState has no teams', () => {
        render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedOut} teamsState={teamsStateWithoutTeams}></Navbar>);
                </Router>
            </Provider>,
        );
    });

    it('Renders when isAuthenticated is true and teamsState has no teams', () => {
        render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedOut} teamsState={teamsStateWithoutTeams}></Navbar>);
                </Router>
            </Provider>,
        );
    });
});

describe('Navbar Can Render with correct text - ', () => {
    it('When isAuthenticated is true "logout" should be on Navbar', () => {
        const { getByText } = render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedIn} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );

        getByText('logout');
    });

    it('When isAuthenticated is false "login" should be on Navbar', () => {
        const { getByText } = render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedOut} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );
        getByText('login');
    });

    it('When isAuthenticated is true "Teams" should be on Navbar', () => {
        const { getByText } = render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedOut} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );
        getByText('Teams');
    });
});

describe('Navbar - Teams dropdown populates correctly - ', () => {
    it('When isAuthenticated is true and teamsState has teams there should be all 3 teams in the dropdown', () => {
        const { getByText } = render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedIn} teamsState={teamsStateWithTeams}></Navbar>);
                </Router>
            </Provider>,
        );

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);
        getByText('team 1');
        getByText('team 2');
        getByText('team 3');
    });
    it('When isAuthenticated is true and teamsState has no teams there should be no teams in the dropdown', () => {
        const { getByText, queryByText } = render(
            <Provider store={Store}>
                <Router>
                    <Navbar auth={authLoggedIn} teamsState={teamsStateWithoutTeams}></Navbar>);
                </Router>
            </Provider>,
        );

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);
        const team1 = queryByText('team 1');
        const team2 = queryByText('team 2');
        const team3 = queryByText('team 3');

        expect(team1).toBeNull();
        expect(team2).toBeNull();
        expect(team3).toBeNull();
    });
});
