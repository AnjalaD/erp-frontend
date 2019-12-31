import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../../redux/actions';
import { GET_USER } from '../../constants/api';
import { Container } from '@material-ui/core';
import { fetchData, makeOptions } from '../../util/helper';
import FullProfile from '../../components/profile/FullProfile';

function UserProfile() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchData(
            GET_USER,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setProfile(res))
        );
        dispatch(loading());
    }, [dispatch, token])

    return (
        <Container maxWidth='md'>
            {
                profile ?
                    <FullProfile profile={profile} />
                    :
                    'Error retriving data'
            }
        </Container>
    )
}

export default UserProfile
