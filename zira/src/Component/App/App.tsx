import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';
import { useSelector } from 'react-redux';
import { RootStore } from '../../State/Store';
import { AuthProps } from '../../Models/PropTypes';
import { useAuth0 } from '@auth0/auth0-react';

function App(): JSX.Element {
    const teamsState = useSelector((state: RootStore) => state.teams);

    const { isAuthenticated, user } = useAuth0();

    const auth: AuthProps = {
        isAuthenticated: isAuthenticated,
        user: user,
    };

    return (
        <div className="App">
            <Router>
                <Navbar teamsState={teamsState} auth={auth} />
                <Switch>
                    <Route path="/profile">
                        <Profile auth={auth}></Profile>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
