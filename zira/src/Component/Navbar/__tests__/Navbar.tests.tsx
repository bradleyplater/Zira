/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthProps } from '../../../Models/PropTypes';
import { ITeamsState } from '../../../State/Models/TeamsModels';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import Store from '../../../State/Store';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import Location from '../../TestHelpers/Location';

function renderLogin(auth: AuthProps, teamsState: ITeamsState) {
    const history = createMemoryHistory();
    return render(
        <Provider store={Store}>
            <Router history={history}>
                <Navbar auth={auth} teamsState={teamsState}></Navbar>);
                <Switch>
                    <Route path="/team/:team">
                        <Location></Location>
                    </Route>
                </Switch>
            </Router>
        </Provider>,
    );
}

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
        renderLogin(authLoggedIn, teamsStateWithTeams);
    });

    it('Renders when isAuthenticated is false and teamsState has teams', () => {
        renderLogin(authLoggedOut, teamsStateWithTeams);
    });

    it('Renders when isAuthenticated is false and teamsState has no teams', () => {
        renderLogin(authLoggedOut, teamsStateWithoutTeams);
    });

    it('Renders when isAuthenticated is true and teamsState has no teams', () => {
        renderLogin(authLoggedIn, teamsStateWithoutTeams);
    });
});

describe('Navbar Can Render with correct text - ', () => {
    it('When isAuthenticated is true "logout" should be on Navbar', () => {
        const { getByText } = renderLogin(authLoggedIn, teamsStateWithTeams);

        getByText('logout');
    });

    it('When isAuthenticated is false "login" should be on Navbar', () => {
        const { getByText } = renderLogin(authLoggedOut, teamsStateWithTeams);

        getByText('login');
    });

    it('When isAuthenticated is true "Teams" should be on Navbar', () => {
        const { getByText } = renderLogin(authLoggedIn, teamsStateWithTeams);

        getByText('Teams');
    });
});

describe('Navbar - Teams dropdown populates correctly - ', () => {
    it('When isAuthenticated is true and teamsState has teams there should be all 3 teams in the dropdown', () => {
        const { getByText } = renderLogin(authLoggedIn, teamsStateWithTeams);

        const teamsButton = getByText('Teams');

        fireEvent.click(teamsButton);
        getByText('team 1');
        getByText('team 2');
        getByText('team 3');
    });
    it('When isAuthenticated is true and teamsState has no teams there should be no teams in the dropdown', () => {
        const { getByText, queryByText } = renderLogin(authLoggedIn, teamsStateWithoutTeams);

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
