/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITeamsState } from '../State/Teams/teamsReducer';
import { IUserState } from '../State/User/userReducer';

export type AuthProps = {
    loginWithRedirect?: any;
    isAuthenticated?: boolean;
    logout?: any;
    user?: any;
};

export type NavbarProps = {
    teamsState: ITeamsState;
    auth: AuthProps;
};

export type ProfileProps = {
    userState: IUserState;
    auth: AuthProps;
    history: any;
};
