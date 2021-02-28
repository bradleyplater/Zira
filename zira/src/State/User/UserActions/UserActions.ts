/*DEV DEPENDENCIES */
import axios from 'axios';
import { Dispatch } from 'redux';
import {
    API_CALL_STARTED,
    UserDispatchTypes,
    USER_CREATED,
    USER_FAILED,
    USER_LOADING,
    USER_SUCCESS,
} from './UserActionTypes';

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

export const CreateUser = (formData: any, email: string) => async (
    dispatch: Dispatch<UserDispatchTypes>,
): Promise<any> => {
    dispatch({ type: API_CALL_STARTED });

    axios
        .post('https://localhost:44353/api/v1/users', {
            Email: email,
            Name: formData.firstName + ' ' + formData.surname,
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch({ type: USER_CREATED });
            } else {
                console.log('error');
            }
        });
};
