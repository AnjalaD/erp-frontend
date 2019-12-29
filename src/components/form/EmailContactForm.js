import React, { useState } from 'react'
import { Card, Grid } from '@material-ui/core'
import ActionBar from './ActionBar'
import EditMultiTextInput from './EditMultiTextInput'
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';

function EmailContactForm({ id, type, label, value, prevStep, api }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const initState = {
        value: '',
        old: '',
        isNew: true,
        isEdit: true
    }

    const setSaved = (i) => {
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

    const [state, setState] = useState(value.map(item => ({
        value: item[type],
        old: item[type],
        isNew: false,
        isEdit: false
    })))

    const onChange = (e, i) => {
        const newVal = [...state];
        newVal[i].value = e.target.value;
        setState(newVal);
    }

    const remove = (i) => {
        const newVal = [...state];
        newVal.splice(i, 1);
        setState(newVal);
    }

    const add = () => setState([...state, initState])

    const save = (i) => {
        if (state[i].isNew) {
            fetchData(
                api,
                makeOptions(token, 'POST', {
                    email: [{
                        employee_id: id,
                        [type]: state[i].value
                    }]
                }),
                dispatch,
                () => setSaved(i)
            )
        } else {
            fetchData(
                api,
                makeOptions(token, 'PATCH', {
                    new: {
                        employee_id: id,
                        [type]: state[i].value
                    },
                    old: {
                        employee_id: id,
                        [type]: state[i].old
                    }
                }),
                dispatch,
                () => setSaved(i)
            )
        }
    }

    const del = (i) => {
        fetchData(
            api,
            makeOptions(token, 'DELETE', {
                employee_id: id,
                email: state[i].value
            }),
            dispatch,
            () => remove(i)
        )
    }



    return (
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10, width: '100%' }}
        >
            <Grid container spacing={1} >
                <EditMultiTextInput
                    label={label}
                    onChange={onChange}
                    value={state}
                    remove={remove}
                    delete={del}
                    add={add}
                    edit={edit}
                    save={save}
                />
                <ActionBar
                    b1={prevStep}
                />
            </Grid >
        </Card>
    )
}

export default EmailContactForm
