import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { COLOURS } from '../../constants/constants';
import { } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const ProfileRow = (props) => {
    return (
        <Grid item xs={props.xs || 12}>
            <Box component="span"
                style={{ backgroundColor: COLOURS.primary.lighter, margin: 5 }}
                display="block"
                p={1}
            >
                <div style={{ fontSize: 14 }}>
                    <FontAwesomeIcon icon={props.icon || faDotCircle} /> {props.name}
                </div>
                <div style={{
                    fontSize: 18,
                    color: COLOURS.primary.dark
                }}>
                    {props.value || '--'}
                </div>
            </Box>
        </Grid>
    );
}
export default ProfileRow;