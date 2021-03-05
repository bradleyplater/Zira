import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '../../State/Models/ViewsModels';
import { RootStore } from '../../State/Store';
import { SetCurrentView } from '../../State/Views/ViewsActions/ViewsActions';
import './LandingPage.css';

export default function LandingPage() {
    const viewsState = useSelector((state: RootStore) => state.views);
    const dispatch = useDispatch();

    if (viewsState.currentView != View.LandingPage) {
        dispatch(SetCurrentView(View.LandingPage));
    }
    return (
        <div className="bg-container">
            <h1>Zira</h1>
            <div className="btn-container">
                <div className="btn-group-color">
                    <h3>New to Zira?</h3>
                    <button type="button" className="btn btn-outline-primary">
                        Get Started
                    </button>
                    <h3>Already have an Account?</h3>
                    <button type="button" className="btn btn-outline-primary">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
