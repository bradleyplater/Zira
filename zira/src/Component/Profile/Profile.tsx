import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../State/Store';
import { GetUserByEmail } from '../../State/User/Actions/UserActions';

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const userState = useSelector((state: RootStore) => state.user);
    if (isAuthenticated && userState.user === undefined && userState.loading != true) {
        dispatch(GetUserByEmail(user.email));
    }
    return <></>;
}
