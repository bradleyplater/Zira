/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactChild } from 'react';

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

export type CreateProfileFormProps = {
    isAuthenticated: boolean;
    user: any;
};

export type LandingPageProps = {
    loginWithRedirect: any;
};

export type CreateIssueFormProps = {
    register: any;
    errors: any;
};

export type BaseModalProps = {
    children: {
        ModalContent: ReactChild;
    };
    ModalTitle: string;
    ModalId: string;
    ModalTitleId: string;
};

export type CreateItemModalProps = {
    children: {
        ModalContent: ReactChild;
    };
};
