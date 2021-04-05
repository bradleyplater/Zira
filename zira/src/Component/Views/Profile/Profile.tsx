import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProfileProps } from '../../../Models/PropTypes';
import { View } from '../../../State/Models/ViewsModels';
import { RootStore } from '../../../State/Store';
import { GetUserByEmail } from '../../../State/User/UserActions/UserActions';
import { SetCurrentView } from '../../../State/Views/ViewsActions/ViewsActions';

export default function Profile({ auth }: ProfileProps): JSX.Element {
    const userState = useSelector((state: RootStore) => state.user);
    const viewsState = useSelector((state: RootStore) => state.views);

    const history = useHistory();

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
    return (
        <div>
            {userState.user && (
                <div>
                    <p>Name - {userState.user.name}</p>
                    <p>Email - {userState.user.email}</p>
                </div>
            )}
        </div>
    );
}
