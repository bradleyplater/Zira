/* eslint-disable @typescript-eslint/no-explicit-any */
/* istanbul ignore file */
import { ITeamsState } from '../State/Models/TeamsModels';
import { IUserState } from '../State/Models/UserModels';

export type AuthProps = {
    loginWithRedirect?: any;
    isAuthenticated?: boolean;
    logout?: any;
    user?: any;
};

export type NavbarProps = {
    auth: AuthProps;
};

export type ProfileProps = {
    auth: AuthProps;
};
