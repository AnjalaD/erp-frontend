import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { PrimaryTheme } from '../settings/Colours'

const ProfileRow = (props) => {
    return (
        <Grid item xs={props.xs || 12}>
            <Box component="span"
                style={{ backgroundColor: PrimaryTheme.shades.lighter, margin: 5 }}
                display="block"
                p={1}
            >
                <div style={{ fontSize: 14 }}>
                    <FontAwesomeIcon icon={props.icon || faDotCircle} /> {props.name}
                </div>
                <div style={{
                    fontSize: 18,
                    color: PrimaryTheme.shades.darker
                }}>
                    {props.value || '--'}
                </div>
            </Box>
        </Grid>
    );
}
export default ProfileRow;