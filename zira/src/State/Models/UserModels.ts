export type User = {
    name: string;
    email: string;
};

export interface IUserState {
    loading: boolean;
    user?: User;
    redirectTo?: string;
}
