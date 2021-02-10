/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthProps } from '../../../Models/PropTypes';
import { ITeamsState } from '../../../State/Models/TeamsModels';
import { Provider } from 'react-redux';

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
    teams: [{ name: 'team 1' }, { name: 'team 2' }, { name: 'team 2' }],
};

const teamsStateWithoutTeams: ITeamsState = {
    loading: false,
    teams: [{ name: 'team 1' }, { name: 'team 2' }, { name: 'team 2' }],
};

describe('Navbar Renders Correctly - ', () => {
    it('Renders Correctly when isAuthenticated is true', () => {
        render(
        <Provider store={}>
            <Router>
                <Navbar auth={authLoggedIn} teamsState={teamsStateWithTeams}></Navbar>);
            </Router>
        </Provider>,
    });
});