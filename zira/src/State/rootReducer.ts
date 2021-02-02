/*DEV DEPENDENCIES */
import { combineReducers } from 'redux';

/*FILE DEPENDENCIES*/
import TeamsReducer from './Teams/teamsReducer';
import userReducer from './User/userReducer';

const RootReducer = combineReducers({
    teams: TeamsReducer,
    user: userReducer,
});

export default RootReducer;
