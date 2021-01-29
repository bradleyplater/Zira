/* DEV DEPENDENCIES*/
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* FILE DEPENDENCIES */
import RootReducer from './rootReducer';

//Fix dev tools
const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
