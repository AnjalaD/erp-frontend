import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core/';
import Profile from '../profile/Profile';
import EmgContact from '../profile/EmgContact';
import { COLOURS } from '../../constants/constants';

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

                <Grid item xs={12} style={{ margin: 30, padding: 10 }} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.lighter, color: COLOURS.primary.darker }}
                        variant="contained"
                        onClick={props.prevStep}
                    >Back</Button>

                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={props.submit}
                    >Confirm & Continue</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Confirm;