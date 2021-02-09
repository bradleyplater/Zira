import { useDispatch } from 'react-redux';
import { ProfileProps } from '../../Models/PropTypes';
import { GetUserByEmail } from '../../State/User/UserActions/UserActions';

export default function Profile({ userState, auth, history }: ProfileProps) {
    const dispatch = useDispatch();
    if (auth.isAuthenticated && userState.user === undefined && userState.loading != true) {
        dispatch(GetUserByEmail(auth.user.email));
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
