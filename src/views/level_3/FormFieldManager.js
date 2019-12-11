import React, { useState, useEffect } from 'react'
import ProfileRow from '../../components/profile/UserProfilerow';
import MultiTextInput from '../../components/form/MultiTextInput';
import { Grid, IconButton, Card } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function FormFieldManager() {
    const [fields, setFields] = useState(['']);
    const [dbFields, setDbFields] = useState([]);

    //fetch fields from db
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
        <Card
            elevation={4}
            style={{ padding: 10, margin: 10 }}
        >
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12}>
                    {
                        dbFields.map((field, i) => (
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
                        label='New Field'
                        value={fields}
                        onChange={onMultiChange(fields, setFields)}
                        add={multiAdd(fields, setFields)}
                        remove={multiRemove(fields, setFields)}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default FormFieldManager
