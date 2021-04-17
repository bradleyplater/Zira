import { IIssue } from './IssuesModels';

/* istanbul ignore file */
export type User = {
    id: number;
    firstName: string;
    surname: string;
    email: string;
    issues: IIssue[];
};

export type CreateUserFormData = {
    firstName: string;
    surname: string;
};

export interface IUserState {
    loading: boolean;
    user?: User;
    redirectTo: boolean;
    isApiBeingCalled: boolean;
    isUserCreated?: boolean;
    errors: Error[];
}

export type Error = {
    Message: string;
};
