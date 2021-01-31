/*DEV DEPENDENCIES */
import axios from 'axios';
import { Dispatch } from 'redux';
/*FILE DEPENDENCIES*/
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_LOADING, TEAMS_SUCCESS } from './TeamsActionTypes';

export const GetTeams = () => async (dispatch: Dispatch<TeamsDispatchTypes>) => {
    try {
        dispatch({ type: TEAMS_LOADING });

        axios.get('https://localhost:44353/api/v1/teams').then((response) =>
            dispatch({
                type: TEAMS_SUCCESS,
                payload: response.data,
            }),
        );
    } catch (e) {
        dispatch({
            type: TEAMS_FAIL,
        });
    }
};
