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
import { TestCase, TestData } from './TestTypes';
import { uniqueNamesGenerator, names, Config } from 'unique-names-generator';
export default class TestHelper {
    private _numberOfCases: number;
    public get numberOfCases(): number {
        return this._numberOfCases;
    }
    public set numberOfCases(v: number) {
        this._numberOfCases = v;
    }
    constructor(numberOfCases = 3) {
        this._numberOfCases = numberOfCases;
    }
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

    getProfileTestCases(): TestCase[] {
        const testCases: TestCase[] = [];
        const config: Config = {
            dictionaries: [names],
        };
        for (let i = 0; i < this.numberOfCases; i++) {
            const name = uniqueNamesGenerator(config);
            const email = name + '@email.com';
            const testData: TestData = {
                data: { name: name, email: email },
                status: 200,
            };
            const testCase: TestCase = {
                iteration: i,
                data: testData,
            };
            testCases.push(testCase);
        }
        return testCases;
    }
}
