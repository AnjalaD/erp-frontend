import React, { useEffect, useState } from 'react'
import { Card, Grid, IconButton, Container } from '@material-ui/core';
import ProfileRow from '../../components/profile/UserProfilerow';
import { Delete } from '@material-ui/icons';
import MultiTextInput from '../../components/form/MultiTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import { PAY_GRADES } from '../../constants/api';

function PayGradeManager() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const [payGrades, setPayGrades] = useState(['']);
    const [dbPayGrades, setDbPayGrades] = useState([]);

    //fetch payGrades from db
    useEffect(() => {
        fetchData(
            PAY_GRADES,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setDbPayGrades(res))
        );
    }, [dispatch, token]);

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
                            dbPayGrades.map((field, i) => (
                                <Grid container direction='row'>
                                    <Grid item xs={11}>
                                        <ProfileRow value={field} />
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton onClick={del(field)}><Delete color='error' /></IconButton>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <MultiTextInput
                            label='New Leave Type'
                            value={payGrades}
                            onChange={onMultiChange(payGrades, setPayGrades)}
                            add={multiAdd(payGrades, setPayGrades)}
                            remove={multiRemove(payGrades, setPayGrades)}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )

}

export default PayGradeManager
