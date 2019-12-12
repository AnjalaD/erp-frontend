import { Typography, Grid,Button, Select, MenuItem, } from '@material-ui/core';
import React from 'react';
import {COLOURS} from '../../../constants/constants'

const LeaveCheck = (props) => {
    return (
        <Grid container spacing={1} variant='outlined'>
            <Typography variant="h6" component ='p'>
                Select Leave Type
            </Typography>
            <Select   displayEmpty >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                variant="contained"
            >Continue</Button>
        </Grid>
    )
}

export default LeaveCheck;