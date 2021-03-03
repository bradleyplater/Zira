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
        <div id="intro" className="view">
            <div className="mask"></div>
        </div>
    );
}
