import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { useSelector } from 'react-redux';
import { RootStore } from '../../State/Store';
import { AuthProps } from '../../Models/PropTypes';
import { useAuth0 } from '@auth0/auth0-react';

const teamsState = useSelector((state: RootStore) => state.teams);

const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

const auth: AuthProps = {
    loginWithRedirect: loginWithRedirect(),
    isAuthenticated: isAuthenticated,
    logout: logout(),
};

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Navbar teamsState={teamsState} auth={auth} />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
