/*DEV DEPENDENCIES */
import { Dispatch } from 'redux';
/*FILE DEPENDENCIES*/
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_LOADING, TEAMS_SUCCESS } from './TeamsActionTypes';

export const GetTeams = () => async (dispatch: Dispatch<TeamsDispatchTypes>): Promise<void> => {
    try {
        dispatch({
            type: TEAMS_LOADING,
        });
        dispatch({
            type: TEAMS_SUCCESS,
            payload: [{ name: 'team 1' }, { name: 'team2' }],
        });
    } catch (e) {
        dispatch({
            type: TEAMS_FAIL,
        });
    }
};
