import React from 'react'
import { Grid, Typography, Card } from '@material-ui/core'
import Profile from './Profile'
import EmgContact from './EmgContact'

function FullProfile({ profile }) {
    return (
        <Card style={{ marginTop: 24, padding: 8 }}>
            <Grid container direction='column' alignItems='center'>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        User Details
                            </Typography>
                </Grid>
                < Grid item xs={12} >
                    <Profile data={{
                        ...profile.employee,
                        email: profile.email,
                        contact_no: profile.contact_no,
                        custom: profile.custom
                    }} />
                </ Grid>
                <Grid item xs={12}>
                    <Typography variant='h6' style={{ marginTop: 32 }}>
                        Dependents Info
                            </Typography>
                </Grid>
                {
                    profile.dependents.map((dep, i) => (
                        <Grid item xs={12} key={i}>
                            <Profile data={dep} />
                        </Grid>
                    ))
                }
                <Grid item xs={12} >
                    <Typography variant='h6' style={{ marginTop: 32 }}>
                        Emergency Contacts
                </Typography>
                </Grid>
                {
                    profile.emergency_contacts.map((emg, i) => (
                        <Grid item xs={12} key={i}>
                            <EmgContact data={emg} />
                        </Grid>
                    ))
                }
            </Grid >
        </Card>
    )
}

export default FullProfile
