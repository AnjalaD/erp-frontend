import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import TextInput from '../../../components/form/TextInput';
import LeaveCheck from './LeaveCheck';
import { COLOURS } from '../../../constants/constants';

function LeaveForm(props) {

    return (
        <Card style={{ width: '60%'}}
            elevation={4}
            style={{ padding: 10, margin: 10, marginLeft: 30}}
        >
            <Typography variant="h4" style={{ width: '100%', textAlign: 'center' }}>
                Apply Leave
            </Typography>
            <LeaveCheck/>
            <Grid container spacing={1} alignItems='center'>
                <TextInput
                    label="Reason"
                />
                <Grid item xs={12} style={{ margin: 20, padding: 5 }} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.lighter, color: COLOURS.primary.darker }}
                        variant="contained"
                        onClick={props.prevStep}
                    >Cancel</Button>

                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={props.nextStep}
                    >Submit</Button>
                </Grid>
                
                
            </Grid>
        </Card>);
}

export default LeaveForm;