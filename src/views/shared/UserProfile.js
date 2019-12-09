import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add_user, loading } from '../../redux/actions';
import Profile from '../../components/profile/Profile';
import { GET_USER } from '../../constants/api';

function UserProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loading());

        const options = {
            method: 'POST',
        }

        fetch(GET_USER, options)
            .then(res => {
                if (res.status === 200) {
                    res.json().then((user) => {
                        console.log(user);
                        dispatch(add_user(user));
                    });
                } else {

                }
            })
            .catch(err => console.log(err))
            .finally(_ => dispatch(loading(false)));
    }, [dispatch])

    return (
        <div>
            <Profile />
        </div>
    )
}

export default UserProfile
