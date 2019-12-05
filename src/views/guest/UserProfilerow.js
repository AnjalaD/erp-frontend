import { Box, Container } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import React from 'react';
import { COLOURS } from '../../constants/constants'
import 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileRow = (props) => {
    return (
        <Container style={{ backgroundColor: COLOURS.primary.lighter, marginTop: 10 }} maxWidth="sm">
            <FontAwesomeIcon icon={props.icon} />
            <Box component="span" display="block" p={1} bgcolor="dark">
                {props.name}
            </Box>
            <i class="fa fa-address-card" aria-hidden="true"></i>
        </Container>
    );
}
export default ProfileRow;