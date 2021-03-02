/* istanbul ignore file */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';

import { AuthProps } from '../../Models/PropTypes';
import { useAuth0 } from '@auth0/auth0-react';
import CreateProfile from '../CreateProfile/CreateProfile';
import LandingPage from '../LandingPage/LandingPage';

function App(): JSX.Element {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    const auth: AuthProps = {
        loginWithRedirect: loginWithRedirect,
        logout: logout,
        isAuthenticated: isAuthenticated,
        user: user,
    };

    return (
        <div className="App">
            <Router>
                <Navbar auth={auth} />
                <Switch>
                    <Route exact path="/profile">
                        <Profile auth={auth}></Profile>
                    </Route>
                    <Route exact path="/create-profile">
                        <CreateProfile></CreateProfile>
                    </Route>
                    <Route exact path="/">
                        <LandingPage></LandingPage>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
