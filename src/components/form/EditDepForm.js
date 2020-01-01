import React, { useState, Fragment } from 'react';
import { Grid, Card, IconButton, Box } from '@material-ui/core';
import TextInput from './TextInput';
import { AddCircleOutline, RemoveCircleOutline, SaveOutlined, DeleteOutlined, EditOutlined } from '@material-ui/icons';
import SelectInput from './SelectInput';
import ActionBar from './ActionBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import { EDIT_EMP_DEPENDENTS } from '../../constants/api';


function EditDepForm({ dep, prevStep, id }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const cleanDep = (dep) => {
        const newDep = Object.assign({}, dep);
        delete newDep.isNew;
        delete newDep.isEdit;
        delete newDep.old;
        return newDep;
    }

    const initDep = {
        employee_id: id,
        isNew: true,
        isEdit: true,
        nic: "",
        first_name: "",
        last_name: "",
        relationship: "",
        addr_house_no: "",
        addr_line_1: "",
        addr_line_2: "",
        addr_city: "",
        contact_no: "",
        email: "",
    };

    const [state, setState] = useState(dep.map(item => ({
        ...item,
        old: item,
        isNew: false,
        isEdit: false,
        employee_id: id
    })));

    const add = () => {
        setState([...state, initDep]);
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
        newVal[i].old = cleanDep(state[i]);
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
                EDIT_EMP_DEPENDENTS,
                makeOptions(token, 'POST', {
                    ...cleanDep(state[i]),
                    employee_id: id
                }),
                dispatch,
                () => onSave(i)
            )
        } else {
            fetchData(
                EDIT_EMP_DEPENDENTS,
                makeOptions(token, 'PATCH', {
                    employee_id: id,
                    new: {
                        ...cleanDep(state[i]),
                        employee_id: id
                    },
                    old: {
                        ...cleanDep(state[i].old),
                        employee_id: id
                    }
                }),
                dispatch,
                () => onSave(i)
            )
        }
    }

    const del = (i) => {
        fetchData(
            EDIT_EMP_DEPENDENTS,
            makeOptions(token, 'DELETE', {
                ...cleanDep(state[i].old),
                employee_id: id,
            }),
            dispatch,
            () => remove(i)
        )
    }

    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Grid container spacing={1} >
                <Grid container direction='row' alignItems='center'>
                    Dependents Details
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
                                    label="First Name"
                                    value={obj.first_name}
                                    onChange={onChange('first_name', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Last Name"
                                    value={obj.last_name}
                                    onChange={onChange('last_name', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="NIC"
                                    value={obj.nic}
                                    onChange={onChange('nic', key)}
                                    disabled={!obj.isEdit}
                                />
                                <SelectInput
                                    label="Relationship"
                                    value={obj.relationship}
                                    onChange={onChange('relationship', key)}
                                    selection={[
                                        'Father', 'Mother', 'Son', 'Daughter', 'Other'
                                    ]}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Address-House No."
                                    value={obj.addr_house_no}
                                    onChange={onChange('addr_house_no', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Address-Line 1"
                                    value={obj.addr_line_1}
                                    onChange={onChange('addr_line_1', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Address-Line 2"
                                    required={false}
                                    value={obj.addr_line_2}
                                    onChange={onChange('addr_line_2', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput
                                    label="Address-City"
                                    value={obj.addr_city}
                                    onChange={onChange('addr_city', key)}
                                    disabled={!obj.isEdit}
                                />
                                <TextInput xs={12}
                                    label="Email"
                                    value={obj.email}
                                    onChange={onChange('email', key)}
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
                                    flexDirection: 'row-reverse'
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
                />
            </Grid >
        </Card>
    );

}

export default EditDepForm;