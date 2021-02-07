import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../State/Store';
import { GetUserByEmail } from '../../State/User/UserActions/UserActions';

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector((state: RootStore) => state.user);
    if (isAuthenticated && userState.user === undefined && userState.loading != true) {
        dispatch(GetUserByEmail(user.email));
    }
    if (userState.redirectTo != null) {
        history.push('/create-profile');
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
