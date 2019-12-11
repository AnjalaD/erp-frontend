import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import TextInput from '../../components/form/TextInput'
import { COLOURS } from '../../constants/constants';
import UserFormManager from '../../components/form/UserFormManager';

const button1Style = {
    marginLeft: 10,
    fontSize: 18,
    height: 60,
    backgroundColor: COLOURS.primary.light,
    color: COLOURS.primary.darker
};

function EditEmp() {
    const [empId, setEmpId] = useState('');
    const [user, setUser] = useState(null);
    const findEmp = (id) => { };

    const submit = () => {

    }

    return (
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

            <Button onClick={() => findEmp(empId)} style={button1Style}>
                Find Employee
            </Button>
            {user ? <UserFormManager oldUser={user} submit={submit} /> : null}
        </Grid>
    )
}

export default EditEmp
