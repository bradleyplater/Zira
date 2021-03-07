/* istanbul ignore file */
/*DEV DEPENDENCIES */
import { combineReducers } from 'redux';

/*FILE DEPENDENCIES*/
import TeamsReducer from './Teams/teamsReducer';
import UserReducer from './User/userReducer';
import ViewsReducer from './Views/viewsReducer';

const RootReducer = combineReducers({
    teams: TeamsReducer,
    user: UserReducer,
    views: ViewsReducer,
});

export default RootReducer;
