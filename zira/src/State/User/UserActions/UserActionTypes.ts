import { User } from '../../Models/UserModels';

//user types
export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';

export interface UserLoading {
    type: typeof USER_LOADING;
}

export interface UserSuccess {
    type: typeof USER_SUCCESS;
    payload: User;
}

export interface UserFail {
    type: typeof USER_FAILED;
}

export type UserDispatchTypes = UserLoading | UserSuccess | UserFail;
