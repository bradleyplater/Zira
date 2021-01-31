import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

import { RootStore } from '../../State/Store';
import { GetTeams } from '../../State/Teams/Actions/TeamsActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar(): JSX.Element {
    const dispatch = useDispatch();
    const teamsState = useSelector((state: RootStore) => state.teams);

    const handleOnClick = () => {
        dispatch(GetTeams());
    };

    if (teamsState.teams == undefined && teamsState.loading != true) {
        dispatch(GetTeams());
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
                Navbar
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Teams
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item" onClick={handleOnClick}>
                                Add Team
                            </button>
                            {teamsState.teams &&
                                teamsState.teams.map((team) => (
                                    <a className="dropdown-item" href={'/' + team.name} key={team.name}>
                                        {team.name}
                                    </a>
                                ))}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
