/* istanbul ignore file */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';

import { AuthProps } from '../../Models/PropTypes';
import { useAuth0 } from '@auth0/auth0-react';

function App(): JSX.Element {
    const { isAuthenticated, user } = useAuth0();

    const auth: AuthProps = {
        isAuthenticated: isAuthenticated,
        user: user,
    };

    return (
        <div className="App">
            <Router>
                <Navbar auth={auth} />
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
