/* istanbul ignore file */
/*DEV DEPENDENCIES */
import { combineReducers } from 'redux';

/*FILE DEPENDENCIES*/
import TeamsReducer from './Teams/teamsReducer';
import UserReducer from './User/userReducer';

const RootReducer = combineReducers({
    teams: TeamsReducer,
    user: UserReducer,
});

export default RootReducer;
