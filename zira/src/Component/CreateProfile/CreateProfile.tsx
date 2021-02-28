import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import './CreateProfile.css';

export default function CreateProfile() {
    const { isAuthenticated, user } = useAuth0();
    return (
        <div className="background-container">
            <div className="form-container">
                <h1 className="header">Create Profile</h1>
                <CreateProfileForm isAuthenticated={isAuthenticated} user={user}></CreateProfileForm>
            </div>
        </div>
    );
}
