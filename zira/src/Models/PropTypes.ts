/* eslint-disable @typescript-eslint/no-explicit-any */
/* istanbul ignore file */
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
