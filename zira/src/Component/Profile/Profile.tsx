import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ProfileProps } from '../../Models/PropTypes';
import { RootStore } from '../../State/Store';
import { GetUserByEmail } from '../../State/User/UserActions/UserActions';

export default function Profile({ auth }: ProfileProps): JSX.Element {
    const userState = useSelector((state: RootStore) => state.user);

    const history = useHistory();

    const dispatch = useDispatch();
    if (userState.redirectTo) {
        history.push('/create-profile');
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
