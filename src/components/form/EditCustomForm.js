import React, { useState, Fragment } from 'react'
import { Card, Grid, Typography } from '@material-ui/core'
import ActionBar from './ActionBar'
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_EMP_CUSTOM } from '../../constants/api';
import TextInput from './TextInput';

function EditCustomForm({ id, value, prevStep, nexStep }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const [state, setState] = useState(value.map(item => ({
        ...item,
        isEdit: false,
    })))

    const onChange = (e, i) => {
        const newVal = [...state];
        newVal[i].isEdit = true;
        newVal[i].value = e.target.value;
        setState(newVal);
    }


    const save = () => {
        const data = state.filter(item => item.isEdit === true);

        fetchData(
            EDIT_EMP_CUSTOM,
            makeOptions(token, 'PATCH', {
                attributes: data.map(item => ({
                    attribute: item.attribute,
                    value: item.value,
                    employee_id: id
                })
                )
            }),
            dispatch,
            prevStep,
        )
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '100%' }}
        >
            <Typography variant="h4" style={{ width: '100%', textAlign: 'center' }}>
                User Custom Detailes
            </Typography>
            <Grid container spacing={1} >
                {
                    state.map((item, key) => (
                        <Fragment key={key}>
                            <TextInput
                                label={item.attribute}
                                value={item.value}
                                onChange={e => onChange(e, key)}
                            />
                        </Fragment>
                    ))
                }
                <ActionBar
                    b1={prevStep}
                    b2={save}
                />
            </Grid >
        </Card>
    )
}

export default EditCustomForm
