/* istanbul ignore file */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../../State/User/userReducer';
import Location from './Location';
import mockedAxios from '../../__mocks__/axios';
import teamsReducer from '../../State/Teams/teamsReducer';
import { createMemoryHistory } from 'history';

export default class TestHelper {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    renderWithRedux(component: JSX.Element) {
        const store = this.setUpStore();
        const history = createMemoryHistory();
        return render(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/">{component}</Route>
                        <Route path="/:route">
                            <Location></Location>
                        </Route>
                    </Switch>
                </Router>
            </Provider>,
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setUpStore() {
        return createStore(combineReducers({ user: userReducer, teams: teamsReducer }), applyMiddleware(thunk));
    }

    setUpMock(data: any): void {
        mockedAxios.get.mockResolvedValueOnce(data);
    }
}
