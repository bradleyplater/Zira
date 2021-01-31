import { Team } from '../Models/TeamsModels';
import { TeamsDispatchTypes, TEAMS_FAIL, TEAMS_LOADING, TEAMS_SUCCESS } from './Actions/TeamsActionTypes';

export interface IDefaultState {
    loading: boolean;
    teams?: Team[];
}

const defaultState: IDefaultState = {
    loading: false,
};

const teamsReducer = (state: IDefaultState = defaultState, action: TeamsDispatchTypes): IDefaultState => {
    switch (action.type) {
        case TEAMS_FAIL:
            return {
                loading: false,
                teams: state.teams,
            };
        case TEAMS_LOADING:
            return {
                loading: true,
                teams: state.teams,
            };
        case TEAMS_SUCCESS:
            return {
                loading: false,
                teams: action.payload,
            };
        default:
            return state;
    }
};

export default teamsReducer;
