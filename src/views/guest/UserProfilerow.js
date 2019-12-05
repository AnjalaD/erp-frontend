import { Box, Grid } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import React from 'react';
import { COLOURS } from '../../constants/constants';

const ProfileRow = (props) => {
    return (
        <Grid item xs={props.xs || 12}>
            <Box component="span"
                style={{ backgroundColor: COLOURS.primary.lighter, margin: 5 }}
                display="block"
                p={1}
                bgcolor="dark"
            >
                <div><Person />{props.name}</div>
                <div style={{
                    fontSize: 20,
                    color: COLOURS.primary.dark
                }}>
                    {props.value || '--'}
                </div>
            </Box>
        </Grid>
    );
}
export default ProfileRow;