import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import TextInput from './TextInput';
import { COLOURS } from '../../constants/constants';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
import { fetchData, makeOptions } from '../../util/helper';

function toISOStringLocal(d) {
    function z(n) { return (n < 10 ? '0' : '') + n }
    return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' +
        z(d.getDate()) + 'T12:00:00';

}

function LeaveForm(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const currentDate = toISOStringLocal(new Date());
    const [state, setState] = useState({
        leave_type: '',
        start: currentDate,
        num_of_days: '',
        reason: ''
    });

    const onChange = key => value => {
        setState(state => ({
            ...state,
            [key]: value
        }))
    }

    const submit = () => {
        fetchData(
            '',
            makeOptions(token),
            dispatch
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
            <SelectInput
                xs={12}
                label='Leave Type'
                value={state.leave_type}
                onChange={e => onChange('leave_type')(e.target.value)}
                selection={[props.leaveTypes]}
            />
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <DateInput
                            label="Starting Date"
                            value={state.start}
                            onChange={val => onChange('start')(toISOStringLocal(new Date(val)))}
                        />
                        <TextInput
                            style={{ marginBottom: 0 }}
                            label="Num of Days"
                            value={state.num_of_days}
                            onChange={e => onChange('num_of_days')(e.target.value)}
                            type='number'
                        />
                    </Grid>
                </Grid>
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