import React, { useState } from 'react';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import TextInput from './TextInput';
import { COLOURS } from '../../constants/constants';

function RegisterForm(props) {
    const initState = {
        employee_id: '',
        username: '',
        password: '',
        confirm_password: ''
    };

    const [state, setState] = useState(initState);

    const onChange = key => value => {
        setState(state => ({
            ...state,
            [key]: value
        }))
    }


    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Typography variant="h5" style={{ width: '100%', textAlign: 'center' }}>
                {props.label || 'Register User'}
            </Typography>

            <Grid container spacing={1} alignItems='center'>
                <TextInput xs={12}
                    label="Employee ID"
                    type="employee_id"
                    value={state.employee_id}
                    onChange={e => onChange('employee_id')(e.target.value)}
                />
                <TextInput xs={12}
                    label="Username"
                    value={state.username}
                    onChange={e => onChange('username')(e.target.value)}
                />
                <TextInput xs={12}
                    label="Password"
                    type="password"
                    value={state.password}
                    onChange={e => onChange('password')(e.target.value)}
                />
                <TextInput xs={12}
                    label="Confirm Password"
                    type="password"
                    value={state.confirm_password}
                    onChange={e => onChange('confirm_password')(e.target.value)}
                />
                <Grid item xs={12} style={{ margin: 20, padding: 5 }} align="right">
                    <Button style={{ margin: 5, padding: 10, backgroundColor: COLOURS.primary.darker, color: COLOURS.primary.lighter }}
                        variant="contained"
                        onClick={() => props.submit(state)}
                    >{props.button || 'Register'}</Button>
                </Grid>


            </Grid>
        </Card>
    )
}

export default RegisterForm
