import { Team } from '../Models/TeamsModels';
import { TeamsDispatchTypes } from './Actions/TeamsActionTypes';

export interface IDefaultState {
    loading: boolean;
    teams?: Team[];
}

const defaultState: IDefaultState = {
    loading: false,
    teams: [{ name: 'team 1' }, { name: 'team 2' }],
};

const teamsReducer = (state: IDefaultState = defaultState, action: TeamsDispatchTypes): IDefaultState => {
    //SET REDUCER
    console.log(action);
    return state;
};

export default teamsReducer;
