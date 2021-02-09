import { IUserState } from '../Models/UserModels';
import { UserDispatchTypes, USER_FAILED, USER_LOADING, USER_SUCCESS } from './UserActions/UserActionTypes';

const defaultState: IUserState = {
    loading: false,
};

const userReducer = (state: IUserState = defaultState, action: UserDispatchTypes): IUserState => {
    switch (action.type) {
        case USER_FAILED:
            return {
                loading: false,
                user: state.user,
                redirectTo: '/create-profile',
            };
        case USER_LOADING:
            return {
                loading: true,
                user: state.user,
            };
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
