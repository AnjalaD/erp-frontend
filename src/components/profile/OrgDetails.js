import React from 'react'
import { Typography, Grid, IconButton } from '@material-ui/core'
import UserProfileRow from '../profile/UserProfilerow';
import { Delete } from '@material-ui/icons';


function OrgDetails({ values, deleteHandler }) {
    return (
        <div style={{
            padding: 10
        }}>
            <Typography>Organization Details</Typography>
            {values.map(({ key, value }, i) => (
                <Grid container key={i} alignItems='center'>
                    <Grid item xs={11}>
                        <UserProfileRow name={key} value={value} />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={deleteHandler(key)}>
                            <Delete />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </div>
    )
}

export default OrgDetails
