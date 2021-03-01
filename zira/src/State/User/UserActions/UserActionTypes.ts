import { User } from '../../Models/UserModels';

//user types
export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILED = 'USER_FAILED';

export const API_CALL_STARTED = 'API_CALL_STARTED';
export const USER_CREATED = 'USER_CREATED';
export const USER_CREATION_FAILED = 'USER_CREATION_FAILED';

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

export interface ApiCallStarted {
    type: typeof API_CALL_STARTED;
}

export interface UserCreated {
    type: typeof USER_CREATED;
}

export interface UserCreationFailed {
    type: typeof USER_CREATION_FAILED;
}

export type UserDispatchTypes =
    | UserLoading
    | UserSuccess
    | UserFail
    | ApiCallStarted
    | UserCreated
    | UserCreationFailed;
