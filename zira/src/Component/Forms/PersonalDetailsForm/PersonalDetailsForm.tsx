import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../State/Store';
import './PersonalDetailsForm.css';

export default function PersonalDetailsForm() {
    const userState = useSelector((state: RootStore) => state.user);

    const user = userState.user;

    return (
        <form className="h-75 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-around align-items-center h-75">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text--grey">Personal Details</h2>
                    <div className="header__hr bg--grey"></div>
                </div>
                <div className="form-group w-30 text-left ">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        value={user?.email}
                        disabled
                    ></input>
                    <small>This information was given to us from your authentication provider!</small>
                </div>
                <div className="form-group w-30 text-left">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className="form-control"
                        id="first-name"
                        value={user?.firstName}
                        disabled
                    ></input>
                </div>
                <div className="form-group w-30 text-left">
                    <label htmlFor="surname">Surname</label>
                    <input
                        name="surname"
                        type="text"
                        className="form-control"
                        id="surname"
                        value={user?.surname}
                        disabled
                    ></input>
                </div>
            </div>
        </form>
    );
}
