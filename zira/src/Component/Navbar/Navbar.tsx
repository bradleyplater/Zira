import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

interface Props {
    navItems: string[];
}

export default function Navbar({ navItems }: Props): JSX.Element {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Zira
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {navItems.map((navItem) => {
                            //CHECK THE BOOTSTAP DOCKS TO GET THE CORRECT NAV SHIT

                            <li className="nav-item dropdown">
                                <NavLink
                                    key={navItem}
                                    to={'/' + navItem}
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    {navItem}
                                </NavLink>
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
