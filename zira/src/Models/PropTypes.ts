/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITeamsState } from '../State/Models/TeamsModels';
import { IUserState } from '../State/Models/UserModels';

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
    auth: AuthProps;
};
