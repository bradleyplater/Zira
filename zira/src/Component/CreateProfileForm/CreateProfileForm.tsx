import React from 'react';
import './CreateProfileForm.css';
import { useForm } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from 'react-loader-spinner';
import { RootStore } from '../../State/Store';
import { useDispatch, useSelector } from 'react-redux';
import { CreateUser } from '../../State/User/UserActions/UserActions';
import { useHistory } from 'react-router-dom';

export default function CreateProfileForm() {
    const userState = useSelector((state: RootStore) => state.user);

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useAuth0();
    const history = useHistory();

    const onSubmit = (data: any) => {
        dispatch(CreateUser(data, user.email));
    };

    if (userState.isUserCreated) {
        history.push('/profile');
    }

    if (isAuthenticated) {
        return (
            <div>
                {userState.isApiBeingCalled ? (
                    <Loader type="Oval" color="black"></Loader>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                value={user.email}
                                disabled
                            ></input>
                            <small>This information was given to us from your authentication provider!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                className="form-control"
                                id="first-name"
                                ref={register({ required: 'First Name cannot be empty' })}
                            ></input>
                            {errors.firstName && <small className="form-error-text">{errors.firstName.message}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname</label>
                            <input
                                name="surname"
                                type="text"
                                className="form-control"
                                id="surname"
                                ref={register({ required: 'Surname cannot be empty' })}
                            ></input>
                            {errors.surname && <small className="form-error-text">{errors.surname.message}</small>}
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        );
    } else {
        return <div></div>;
    }
}
