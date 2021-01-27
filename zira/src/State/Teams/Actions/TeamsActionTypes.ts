import { Team } from '../../Models/TeamsModels';

export const TEAMS_LOADING = 'TEAMS_LOADING';
export const TEAMS_SUCCESS = 'TEAMS_SUCCESS';
export const TEAMS_FAIL = 'TEAMS_FAIL';

export interface TeamsLoading {
    type: typeof TEAMS_LOADING;
}

export interface TeamsSuccess {
    type: typeof TEAMS_SUCCESS;
    payload: Team[];
}

export interface TeamsFail {
    type: typeof TEAMS_FAIL;
}

export type TeamsDispatchTypes = TeamsLoading | TeamsFail | TeamsSuccess;
