/*DEV DEPENDENCIES */
import axios from 'axios';
import { Dispatch } from 'redux';
import { CreateUserFormData } from '../../Models/UserModels';
import {
    API_CALL_STARTED,
    UserDispatchTypes,
    USER_CREATED,
    USER_CREATION_FAILED,
    USER_FAILED,
    USER_LOADING,
    USER_SUCCESS,
} from './UserActionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetUserByEmail = (email: string) => async (dispatch: Dispatch<UserDispatchTypes>): Promise<any> => {
    dispatch({ type: USER_LOADING });

    axios
        .get(`https://localhost:44353/api/v1/users?email=${email}`)
        .then((response) => {
            if (response.status == 200) {
                dispatch({ type: USER_SUCCESS, payload: response.data });
            } else {
                dispatch({ type: USER_FAILED });
            }
        })
        .catch(() => {
            dispatch({ type: USER_FAILED });
        });
};

export const CreateUser = (formData: CreateUserFormData, email: string) => async (
    dispatch: Dispatch<UserDispatchTypes>,
): Promise<void> => {
    dispatch({ type: API_CALL_STARTED });

    axios
        .post('https://localhost:44353/api/v1/users', {
            Email: email,
            FirstName: formData.firstName,
            Surname: formData.surname,
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch({ type: USER_CREATED });
            } else {
                dispatch({ type: USER_CREATION_FAILED });
            }
        });
};
