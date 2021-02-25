import React from 'react';
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import './CreateProfile.css';

export default function CreateProfile() {
    return (
        <div className="background-container">
            <div className="form-container">
                <h1 className="test">Create Profile</h1>
                <CreateProfileForm></CreateProfileForm>
            </div>
        </div>
    );
}
