import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProfileProps } from '../../../Models/PropTypes';
import { View } from '../../../State/Models/ViewsModels';
import { RootStore } from '../../../State/Store';
import { GetUserByEmail } from '../../../State/User/UserActions/UserActions';
import { SetCurrentView } from '../../../State/Views/ViewsActions/ViewsActions';
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
            contentToRender = <div className="col-md-8">Content Personal Details</div>;
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
                        <div className="d-flex flex-column  justify-content-around h-50">
                            <h1 className="text--white">PROFILE</h1>
                            <button
                                className={
                                    buttonSelected == 'personal details' ? 'sidebar__button--active' : 'sidebar__button'
                                }
                                onClick={() => handleSidebarButtonClick('personal details')}
                            >
                                Personal Details
                            </button>
                            <button
                                className={buttonSelected == 'issues' ? 'sidebar__button--active' : 'sidebar__button'}
                                onClick={() => handleSidebarButtonClick('issues')}
                            >
                                Issue
                            </button>
                        </div>
                    </div>
                    {contentToRender}
                </div>
            )}
        </div>
    );
}
