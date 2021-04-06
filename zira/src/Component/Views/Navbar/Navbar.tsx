import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { GetTeams } from '../../../State/Teams/Actions/TeamsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Team } from '../../../State/Models/TeamsModels';
import { NavbarProps } from '../../../Models/PropTypes';
import { RootStore } from '../../../State/Store';
import { View } from '../../../State/Models/ViewsModels';
import BaseModal from '../../Modals/BaseModal/BaseModal';
import CreateItemModalContent from '../../Modals/CreateItemModal/CreateItemModalContent';
import CreateItemModal from '../../Modals/CreateItemModal/CreateItemModal';
import { MdCreate } from 'react-icons/md';

export default function Navbar({ auth }: NavbarProps): JSX.Element {
    const teamsState = useSelector((state: RootStore) => state.teams);
    const viewsState = useSelector((state: RootStore) => state.views);
    const issuesState = useSelector((state: RootStore) => state.issues);

    const dispatch = useDispatch();

    if (viewsState.currentView == View.LandingPage) {
        return <div></div>;
    }

    if (teamsState.teams == undefined && teamsState.loading != true) {
        dispatch(GetTeams());
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/profile">
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
                    {auth.isAuthenticated && (
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink nav-link-override"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Teams
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <button className="dropdown-item">Add Team</button>
                                {teamsState.teams &&
                                    teamsState.teams.map((team: Team) => (
                                        <a className="dropdown-item" href={'/team/' + team.name} key={team.name}>
                                            {team.name}
                                        </a>
                                    ))}
                            </div>
                        </li>
                    )}
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-primary "
                            data-toggle="modal"
                            data-target="#createItemModal"
                        >
                            Create <MdCreate />
                        </button>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            id="nav-link-override"
                            className="nav-link"
                            to="#"
                            onClick={() => auth.logout({ returnTo: window.location.origin })}
                        >
                            logout
                        </NavLink>
                    </li>
                </ul>
            </div>
            <CreateItemModal>
                {{
                    ModalContent: <CreateItemModalContent></CreateItemModalContent>,
                }}
            </CreateItemModal>
        </nav>
    );
}
