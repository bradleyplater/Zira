import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Switch></Switch>
            </Router>
        </div>
    );
}

export default App;
