import { IUserState } from '../Models/UserModels';
import { UserDispatchTypes, USER_FAILED, USER_LOADING, USER_SUCCESS } from './UserActions/UserActionTypes';

const defaultState: IUserState = {
    loading: false,
    redirectTo: false,
};

const userReducer = (state: IUserState = defaultState, action: UserDispatchTypes): IUserState => {
    switch (action.type) {
        case USER_FAILED:
            return {
                loading: false,
                user: state.user,
                redirectTo: true,
            };
        case USER_LOADING:
            return {
                loading: true,
                user: state.user,
                redirectTo: false,
            };
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                redirectTo: false,
            };
        default:
            return state;
    }
};

export default userReducer;
