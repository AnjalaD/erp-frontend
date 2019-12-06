import React from 'react'
import { Card, Typography, Grid, IconButton } from '@material-ui/core'
import UserProfileRow from '../profile/UserProfilerow';
import { Delete } from '@material-ui/icons';


function OrgDetails({ values, deleteHandler }) {
    return (
        <Card style={{ padding: 10 }}>
            <Typography>Organization Details</Typography>
            {values.map(({ key, value }, i) => (
                <Grid container key={i}>
                    <Grid item xs={10}>
                        <UserProfileRow name={key} value={value} />
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={deleteHandler(key)}>
                            <Delete />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </Card>
    )
}

export default OrgDetails
