/* istanbul ignore file */
export type User = {
    id: number;
    name: string;
    email: string;
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
