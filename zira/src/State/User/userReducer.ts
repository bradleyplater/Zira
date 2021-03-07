import { IUserState } from '../Models/UserModels';
import {
    API_CALL_STARTED,
    UserDispatchTypes,
    USER_CREATED,
    USER_CREATION_FAILED,
    USER_FAILED,
    USER_LOADING,
    USER_SUCCESS,
} from './UserActions/UserActionTypes';

const defaultState: IUserState = {
    loading: false,
    redirectTo: false,
    isApiBeingCalled: false,
    errors: [],
};

const userReducer = (state: IUserState = defaultState, action: UserDispatchTypes): IUserState => {
    switch (action.type) {
        case USER_FAILED:
            return {
                loading: false,
                user: state.user,
                redirectTo: true,
                isApiBeingCalled: false,
                errors: state.errors,
            };
        case USER_LOADING:
            return {
                loading: true,
                user: state.user,
                redirectTo: false,
                isApiBeingCalled: false,
                errors: state.errors,
            };
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                redirectTo: false,
                isApiBeingCalled: false,
                errors: state.errors,
            };
        case API_CALL_STARTED:
            return {
                loading: false,
                user: state.user,
                redirectTo: false,
                isApiBeingCalled: true,
                errors: state.errors,
            };
        case USER_CREATED:
            return {
                loading: false,
                user: state.user,
                redirectTo: false,
                isApiBeingCalled: false,
                isUserCreated: true,
                errors: state.errors,
            };
        case USER_CREATION_FAILED:
            return {
                loading: false,
                user: state.user,
                redirectTo: false,
                isApiBeingCalled: false,
                isUserCreated: false,
                errors: state.errors.concat({ Message: 'User Creation Failed. Please Try Again' }),
            };
        default:
            return state;
    }
};

export default userReducer;
