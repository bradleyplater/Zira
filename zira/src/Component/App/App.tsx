import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

const navItems = ['Teams', 'Login'];

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Navbar navItems={navItems}></Navbar>
                <Switch></Switch>
            </Router>
        </div>
    );
}

export default App;
