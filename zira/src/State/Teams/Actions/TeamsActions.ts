/*DEV DEPENDENCIES */
import axios from 'axios';
import { Dispatch } from 'redux';
/*FILE DEPENDENCIES*/
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_LOADING, TEAMS_SUCCESS } from './TeamsActionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetTeams = () => async (dispatch: Dispatch<TeamsDispatchTypes>): Promise<any> => {
    try {
        dispatch({ type: TEAMS_LOADING });

        axios.get('https://localhost:44353/api/v1/teams').then((response) => {
            if (response.status == 200) {
                dispatch({
                    type: TEAMS_SUCCESS,
                    payload: response.data,
                });
            } else {
                dispatch({
                    type: TEAMS_FAIL,
                });
            }
        });
    } catch (e) {
        dispatch({
            type: TEAMS_FAIL,
        });
    }
};
