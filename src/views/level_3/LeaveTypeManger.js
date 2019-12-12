import React, { useEffect, useState } from 'react'
import { Card, Grid, IconButton, Container } from '@material-ui/core';
import ProfileRow from '../../components/profile/UserProfilerow';
import { Delete } from '@material-ui/icons';
import MultiTextInput from '../../components/form/MultiTextInput';

function LeaveTypeManger() {
    const [leaveTypes, setLeaveTypes] = useState(['']);
    const [dbLeaveTypes, setDbLeaveTypes] = useState([]);

    //fetch leaveTypes from db
    useEffect(() => { }, []);

    const del = (index) => () => { };

    const insert = (value) => () => { };

    const onMultiChange = (value, setter) => (e, i) => {
        const newMulti = value.slice(0)
        newMulti[i] = e.target.value;
        setter(newMulti);
    }
    const multiAdd = (value, setter) => () => setter([...value, '']);

    const multiRemove = (value, setter) => (i) => {
        const newVal = value.slice(0);
        newVal.splice(i, 1);
        setter(newVal);
    }

    return (
        <Container maxWidth='md'>
            <Card
                elevation={4}
                style={{ padding: 10, margin: 10 }}
            >
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12}>
                        {
                            dbLeaveTypes.map((field, i) => (
                                <Grid container direction='row'>
                                    <Grid item xs={11}>
                                        <ProfileRow value={field} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton onClick={del(field)}><Delete /></IconButton>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <MultiTextInput
                            label='New Leave Type'
                            value={leaveTypes}
                            onChange={onMultiChange(leaveTypes, setLeaveTypes)}
                            add={multiAdd(leaveTypes, setLeaveTypes)}
                            remove={multiRemove(leaveTypes, setLeaveTypes)}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default LeaveTypeManger
