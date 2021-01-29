/*DEV DEPENDENCIES */
import { Dispatch } from 'redux';
import { Team } from '../../Models/TeamsModels';
/*FILE DEPENDENCIES*/
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_SUCCESS } from './TeamsActionTypes';

export const GetTeams = () => (dispatch: Dispatch<TeamsDispatchTypes>) => {
    try {
        const newPayload: Team[] = [{ name: 'Team 1' }, { name: 'Team 2' }];

        dispatch({
            type: TEAMS_SUCCESS,
            payload: newPayload,
        });
    } catch (e) {
        dispatch({
            type: TEAMS_FAIL,
        });
    }
};
