import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProfileProps } from '../../../Models/PropTypes';
import { View } from '../../../State/Models/ViewsModels';
import { RootStore } from '../../../State/Store';
import { GetUserByEmail } from '../../../State/User/UserActions/UserActions';
import { SetCurrentView } from '../../../State/Views/ViewsActions/ViewsActions';
import PersonalDetailsForm from '../../Forms/PersonalDetailsForm/PersonalDetailsForm';
import './Profile.css';

export default function Profile({ auth }: ProfileProps): JSX.Element {
    const userState = useSelector((state: RootStore) => state.user);
    const viewsState = useSelector((state: RootStore) => state.views);
    const [buttonSelected, setButtonSelected] = useState('personal details');
    const history = useHistory();
    let contentToRender;
    const dispatch = useDispatch();
    if (userState.redirectTo) {
        history.push('/create-profile');
    }

    if (viewsState.currentView != View.Profile) {
        dispatch(SetCurrentView(View.Profile));
    }

    if (auth.isAuthenticated && userState.user === undefined && userState.loading != true) {
        dispatch(GetUserByEmail(auth.user.email));
    }

    function handleSidebarButtonClick(button: string) {
        setButtonSelected(button);
    }

    switch (buttonSelected) {
        case 'personal details':
            contentToRender = <PersonalDetailsForm></PersonalDetailsForm>;
            break;
        case 'issues':
            contentToRender = <div className="col-md-8">Content Issues</div>;
            break;
    }

    return (
        <div className="containter-fluid h-100">
            {userState.user && (
                <div className="row h-100">
                    <div className="col-md-4 sidebar d-flex align-items-end flex-column justify-content-center">
                        <div className="d-flex flex-column  justify-content-around h-50 ">
                            <div className="text-left">
                                <h1 className="text--white header--lg">Profile</h1>
                                <img src={auth.user.picture} className="rounded-circle"></img>
                                <button className="btn btn-lg btn-outline-light profile__button">Edit Profile</button>
                            </div>
                            <button
                                className={
                                    buttonSelected == 'personal details'
                                        ? 'sidebar__button--active text-left'
                                        : 'sidebar__button text-left'
                                }
                                onClick={() => handleSidebarButtonClick('personal details')}
                            >
                                <h4 className="header--md">Personal Details</h4>
                                <span className="text--sm text--grey">Your personal details: Email etc.</span>
                            </button>
                            <button
                                className={
                                    buttonSelected == 'issues'
                                        ? 'sidebar__button--active text-left'
                                        : 'sidebar__button text-left'
                                }
                                onClick={() => handleSidebarButtonClick('issues')}
                            >
                                <h4 className="header--md">Issues</h4>
                                <span className="text--sm text--grey">Issues which are assigned/created by you</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8">{contentToRender}</div>
                </div>
            )}
        </div>
    );
}
