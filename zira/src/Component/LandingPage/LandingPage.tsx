import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LandingPageProps } from '../../Models/PropTypes';
import { View } from '../../State/Models/ViewsModels';
import { RootStore } from '../../State/Store';
import { SetCurrentView } from '../../State/Views/ViewsActions/ViewsActions';
import './LandingPage.css';

export default function LandingPage({ loginWithRedirect }: LandingPageProps) {
    const viewsState = useSelector((state: RootStore) => state.views);
    const dispatch = useDispatch();

    if (viewsState.currentView != View.LandingPage) {
        dispatch(SetCurrentView(View.LandingPage));
    }
    return (
        <div className="bg-container">
            <h1 className="header-white header-large">Zira</h1>
            <div className="btn-container">
                <div className="btn-group-color">
                    <div>
                        <h3 className="header-white">New to Zira?</h3>
                        <button
                            type="button"
                            className="btn btn-lg btn-outline-light"
                            onClick={() => loginWithRedirect()}
                        >
                            Get Started
                        </button>
                    </div>
                    <div>
                        <h3 className="header-white">Already have an Account?</h3>
                        <button
                            type="button"
                            className="btn btn-lg btn-outline-light"
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
