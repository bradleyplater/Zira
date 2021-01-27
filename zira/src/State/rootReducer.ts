/*DEV DEPENDENCIES */
import { combineReducers } from 'redux';

/*FILE DEPENDENCIES*/
import TeamsReducer from './Teams/teamsReducer';

const RootReducer = combineReducers({
    teams: TeamsReducer,
});

export default RootReducer;
