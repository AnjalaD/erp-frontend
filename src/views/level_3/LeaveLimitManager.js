import React, { useEffect, useState } from 'react'
import { Card, Grid, IconButton, Container } from '@material-ui/core';
import ProfileRow from '../../components/profile/UserProfilerow';
import { Delete } from '@material-ui/icons';
import MultiTriTextInput from '../../components/form/MultiTriTextInput';

function LeaveLimitManager() {
    const initState = {
        pay_grade: '',
        leave_type: '',
        limit: 0
    }
    const [leaveLimits, setLeaveLimits] = useState([initState]);
    const [dbLeaveLimits, setDbLeaveLimits] = useState([]);

    //fetch leaveLimit from db
    useEffect(() => { }, []);

    const del = (index) => () => { };

    const insert = (value) => () => { };

    const onMultiChange = (value, setter) => (e, i, key) => {
        const newMulti = value.slice(0)
        newMulti[i][key] = e.target.value;
        setter(newMulti);
    }
    const multiAdd = (value, setter) => () => setter([...value, initState]);

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
                            dbLeaveLimits.map((field, i) => (
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
                        <MultiTriTextInput
                            value={leaveLimits}
                            onChange={onMultiChange(leaveLimits, setLeaveLimits)}
                            selection1={[]}
                            selection2={[]}
                            add={multiAdd(leaveLimits, setLeaveLimits)}
                            remove={multiRemove(leaveLimits, setLeaveLimits)}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default LeaveLimitManager
