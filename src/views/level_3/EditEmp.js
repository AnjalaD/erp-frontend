import React, { useState } from 'react'
import { Grid, Button, Container } from '@material-ui/core'
import TextInput from '../../components/form/TextInput'
import { COLOURS } from '../../constants/constants';
import UserFormManager from '../../components/form/UserFormManager';

const button1Style = {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    height: 55,
    padding: 10,
    color: COLOURS.primary.darker,
    backgroundColor: COLOURS.primary.lighter
};

function EditEmp() {
    const [empId, setEmpId] = useState('');
    const [user, setUser] = useState(null);
    const findEmp = (id) => { };

    const submit = (user) => {

    }

    return (
        <Container maxWidth='md'>
            <Grid container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ paddingTop: 50 }}
            >

                <TextInput
                    value={empId}
                    label='Employee ID'
                    onChange={(e) => setEmpId(e.target.value)}
                />

                <Button variant='contained' onClick={() => findEmp(empId)} style={button1Style}>
                    Find Employee
                </Button>
                {user ? <UserFormManager oldUser={user} submit={submit} /> : null}
            </Grid>
        </Container>
    )
}

export default EditEmp