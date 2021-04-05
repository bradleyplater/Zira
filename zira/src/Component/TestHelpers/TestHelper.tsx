/* istanbul ignore file */
import { fireEvent, Matcher, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../../State/User/userReducer';
import Location from './Location';
import mockedAxios from '../../__mocks__/axios';
import teamsReducer from '../../State/Teams/teamsReducer';
import { createMemoryHistory } from 'history';
import viewsReducer from '../../State/Views/viewsReducer';
import { ToastProvider } from 'react-toast-notifications';
import issuesReducer from '../../State/Issues/issuesReducer';

export default class TestHelper {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    renderWithRedux(component: JSX.Element) {
        const store = this.setUpStore();
        const history = createMemoryHistory();
        return render(
            <ToastProvider>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/">{component}</Route>
                            <Route path="/:route">
                                <Location></Location>
                            </Route>
                        </Switch>
                    </Router>
                </Provider>
            </ToastProvider>,
        );
    }

    //USER ACTION

    getButtonAndClick(query: (text: Matcher) => HTMLElement, textToGet: string): void {
        const button = query(textToGet);
        fireEvent.click(button);
    }

    getInputAndEnterText(query: (text: Matcher) => HTMLElement, textToGet: string, textToInput: string): void {
        const input = query(textToGet);
        fireEvent.input(input, { target: { value: textToInput } });
    }

    //REDUX SET UP
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setUpStore() {
        return createStore(
            combineReducers({ user: userReducer, teams: teamsReducer, views: viewsReducer, issues: issuesReducer }),
            applyMiddleware(thunk),
        );
    }

    //MOCK SET UPS

    setUpMock(data: any): void {
        mockedAxios.get.mockResolvedValueOnce(data);
    }

    setUpPostMock(data: any): any {
        return mockedAxios.post.mockResolvedValueOnce(data);
    }

    setUpRejectedPostMock(): any {
        return mockedAxios.post.mockRejectedValueOnce(new Error('Api Error'));
    }
}
