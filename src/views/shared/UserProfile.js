import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_user, loading } from '../../redux/actions';
import Profile from '../../components/profile/Profile';
import { GET_USER } from '../../constants/api';
import { Grid, Container } from '@material-ui/core';
import EmgContact from '../../components/profile/EmgContact';
import { fetchData, makeOptions } from '../../util/helper';

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
                    <Grid container direction='column' alignItems='center'>

                        < Grid item xs={12} >
                            <Profile data={profile} />
                        </Grid >
                        {
                            profile.dependents.map((dep, i) => (
                                <Grid itme xs={12} key={i}>
                                    <Profile data={dep} />
                                </Grid>
                            ))
                        }
                        {
                            profile.emergency_contacts.map((emg, i) => (
                                <Grid itme xs={12} key={i}>
                                    <EmgContact data={emg} />
                                </Grid>
                            ))
                        }
                    </Grid >
                    :
                    'Error retriving data'
            }
        </Container>
    )
}

export default UserProfile
