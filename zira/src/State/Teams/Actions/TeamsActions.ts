/*DEV DEPENDENCIES */
import { Dispatch } from 'redux';
import { Api } from '../../../Helpers/Api';
/*FILE DEPENDENCIES*/
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_LOADING, TEAMS_SUCCESS } from './TeamsActionTypes';

export const GetTeams = () => async (dispatch: Dispatch<TeamsDispatchTypes>) => {
    try {
        dispatch({ type: TEAMS_LOADING });

        const api = new Api();
        const payload = api.getTeams();
        dispatch({
            type: TEAMS_SUCCESS,
            payload: (await payload).data,
        });
    } catch (e) {
        dispatch({
            type: TEAMS_FAIL,
        });
    }
};
