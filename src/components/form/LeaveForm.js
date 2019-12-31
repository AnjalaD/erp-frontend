import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import TextInput from './TextInput';
import { COLOURS } from '../../constants/constants';
import SelectInput from './SelectInput';
import { fetchData, makeOptions, getLocalDate } from '../../util/helper';
import { APPLY_LEAVE } from '../../constants/api';

function LeaveForm(props) {
    const currentDate = getLocalDate(new Date());
    console.log(currentDate);
    const initState = {
        leave_type: '',
        date: currentDate,
        reason: ''
    };

    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [state, setState] = useState(initState);

    const onChange = key => value => {
        setState(state => ({
            ...state,
            [key]: value
        }))
    }

    const submit = () => {
        fetchData(
            APPLY_LEAVE,
            makeOptions(token, 'POST', state),
            dispatch,
            () => setState(initState)
        )
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Typography variant="h5" style={{ width: '100%', textAlign: 'center' }}>
                Apply Leave
            </Typography>

            <Grid container spacing={1} alignItems='center'>
                <SelectInput
                    xs={6}
                    label='Leave Type'
                    value={state.leave_type}
                    onChange={e => onChange('leave_type')(e.target.value)}
                    selection={props.leaveTypes}
                />
                <TextInput
                    label="Leave Date"
                    type="date"
                    value={state.date}
                    onChange={e => onChange('date')(e.target.value)}
                />
                <TextInput xs={12}
                    style={{ marginTop: 5 }}
                    label="Reason"
                    value={state.reason}
                    onChange={e => onChange('reason')(e.target.value)}
                    multiline
                    rows={3}
                />
                <Grid item xs={12} style={{ margin: 20, padding: 5 }} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={submit}
                    >Submit</Button>
                </Grid>


            </Grid>
        </Card>
    );
}

export default LeaveForm;