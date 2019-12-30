import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core/';
import Profile from '../profile/Profile';
import EmgContact from '../profile/EmgContact';
import ActionBar from './ActionBar';

function Confirm(props) {
    const { user, emg, dep } = props;
    console.info(user);

    return (
        <Card>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                        User Detailes
                    </Typography>
                    <Profile data={user} />
                </Grid>
                {dep ?
                    dep.map((user, i) => (
                        <Grid item xs={12} key={i}>
                            <Typography variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                                Dependent-{i + 1}
                            </Typography>
                            <Profile data={user} />
                        </Grid>
                    ))
                    :
                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                            User Detailes
                        </Typography>
                        <Typography variant="body1" style={{ width: '100%', textAlign: 'center' }}>
                            --no-data--
                        </Typography>
                    </Grid>
                }

                {emg ?
                    emg.map((user, i) => (
                        <Grid item xs={12} key={i}>
                            <Typography variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                                Emergency Contact-{i + 1}
                            </Typography>
                            <EmgContact data={user} />

                        </Grid>
                    ))
                    :
                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ width: '100%', textAlign: 'center' }}>
                            Emergency Contact
                        </Typography>
                        <Typography variant="body1" style={{ width: '100%', textAlign: 'center' }}>
                            --no-data--
                        </Typography>
                    </Grid>
                }
                <ActionBar
                    b1={props.prevStep}
                    label2='Confirm'
                    b2={props.submit}
                />
            </Grid>
        </Card>
    );
}

export default Confirm;