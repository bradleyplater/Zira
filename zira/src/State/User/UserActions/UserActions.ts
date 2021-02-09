/*DEV DEPENDENCIES */
import axios from 'axios';
import { Dispatch } from 'redux';
import { UserDispatchTypes, USER_FAILED, USER_LOADING, USER_SUCCESS } from './UserActionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetUserByEmail = (email: string) => async (dispatch: Dispatch<UserDispatchTypes>): Promise<any> => {
    try {
        dispatch({ type: USER_LOADING });

        axios.get(`https://localhost:44353/api/v1/users?email=${email}`).then((response) => {
            if (response.status == 200) {
                dispatch({ type: USER_SUCCESS, payload: response.data });
            } else {
                dispatch({ type: USER_FAILED });
            }
        });
    } catch (e) {
        dispatch({ type: USER_FAILED });
    }
};
