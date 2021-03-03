import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '../../State/Models/ViewsModels';
import { RootStore } from '../../State/Store';
import { SetCurrentView } from '../../State/Views/ViewsActions/ViewsActions';
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm';
import './CreateProfile.css';

export default function CreateProfile() {
    const { isAuthenticated, user } = useAuth0();

    const viewsState = useSelector((state: RootStore) => state.views);
    const dispatch = useDispatch();

    if (viewsState.currentView != View.CreateProfile) {
        dispatch(SetCurrentView(View.CreateProfile));
    }

    return (
        <div className="background-container">
            <div className="form-container">
                <h1 className="header">Create Profile</h1>
                <CreateProfileForm isAuthenticated={isAuthenticated} user={user}></CreateProfileForm>
            </div>
        </div>
    );
}
