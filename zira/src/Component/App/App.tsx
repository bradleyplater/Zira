import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
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
