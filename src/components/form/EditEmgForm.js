import React, { useState, Fragment } from 'react';
import { Grid, Card, IconButton, Box } from '@material-ui/core';
import TextInput from './TextInput';
import { AddCircleOutline, RemoveCircleOutline, SaveOutlined, DeleteOutlined, EditOutlined } from '@material-ui/icons';
import ActionBar from './ActionBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import { EDIT_EMP_EMG_CONTACTS } from '../../constants/api';

function EditEmgForm({ emg, prevStep, nextStep, id }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const initEmg = {
        nic: "",
        name: "",
        contact_no: "",
        old: {},
        isNew: true,
        isEdit: true,
    };

    const [state, setState] = useState(emg.map(item => ({
        ...item,
        old: { ...item },
        isNew: false,
        isEdit: false
    })))

    const add = () => {
        setState([...state, initEmg]);
    }

    const remove = (i) => {
        const newVal = [...state];
        newVal.splice(i, 1);
        setState(newVal);
    }

    const onChange = (key, i) => (e) => {
        const newArr = state.slice(0);
        newArr[i][key] = e.target.value;
        setState(newArr);
    }

    const onSave = (i) => {
        const newVal = [...state];
        newVal[i].isNew = false;
        newVal[i].isEdit = false;
        setState(newVal);
    }

    const edit = (i) => {
        const newVal = [...state];
        newVal[i].isEdit = true;
        setState(newVal);
    }

    const save = (i) => {
        if (state[i].isNew) {
            fetchData(
                EDIT_EMP_EMG_CONTACTS,
                makeOptions(token, 'POST', {
                    ...state[i],
                    employee_id: id
                }),
                dispatch,
                () => onSave(i)
            )
        } else {
            fetchData(
                EDIT_EMP_EMG_CONTACTS,
                makeOptions(token, 'PATCH', {
                    new: {
                        ...state[i],
                        employee_id: id
                    },
                    old: {
                        ...state[i].old,
                        employee_id: id
                    }
                }),
                dispatch,
                () => onSave(i)
            )
        }
    }

    const del = (i) => { }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '100%' }}
        >
            <Grid container spacing={1} >
                <Grid container direction='row' alignItems='center'>
                    Emergency Detailes
                    <IconButton onClick={add}>
                        <AddCircleOutline color='primary' />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    {state.map((obj, key) => (
                        <Card key={key}
                            style={{
                                position: 'relative',
                                margin: 8,
                                padding: 10,
                                borderStyle: 'groove',
                                borderColor: '#000000',
                                borderWidth: 1

                            }}
                        >
                            <Grid container spacing={1}>
                                <TextInput
                                    label="Name"
                                    value={obj.name}
                                    onChange={onChange('name', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="NIC"
                                    value={obj.nic}
                                    onChange={onChange('nic', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Contact No."
                                    value={obj.contact_no}
                                    onChange={onChange('contact_no', key)}
                                    disabled={!obj.isEdit}
                                />
                            </Grid>
                            <Box
                                style={{
                                    margin: 0,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                {
                                    obj.isNew ?
                                        <Fragment>
                                            <IconButton onClick={() => remove(key)}>
                                                <RemoveCircleOutline color='error' />
                                            </IconButton>
                                            <IconButton onClick={() => save(key)}>
                                                <SaveOutlined color='primary' />
                                            </IconButton>
                                        </Fragment>
                                        :
                                        obj.isEdit ?
                                            <Fragment>
                                                <IconButton onClick={() => del(key)}>
                                                    <DeleteOutlined color='error' />
                                                </IconButton>
                                                <IconButton onClick={() => save(key)}>
                                                    <SaveOutlined color='primary' />
                                                </IconButton>
                                            </Fragment>
                                            :
                                            <IconButton onClick={() => edit(key)}>
                                                <EditOutlined color='primary' />
                                            </IconButton>
                                }
                            </Box>
                        </Card>
                    ))}
                </Grid>
                <ActionBar
                    b1={prevStep}
                    b2={nextStep}
                />
            </Grid >
        </Card>
    );

}

export default EditEmgForm;