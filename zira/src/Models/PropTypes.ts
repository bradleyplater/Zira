/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITeamsState } from '../State/Teams/teamsReducer';

export type AuthProps = {
    loginWithRedirect: any;
    isAuthenticated: boolean;
    logout: any;
};

export type NavbarProps = {
    teamsState: ITeamsState;
    auth: AuthProps;
};
