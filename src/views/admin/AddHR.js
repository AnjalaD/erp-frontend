import React, { useState } from 'react'
import UserFormManager from '../../components/form/UserFormManager'
import { Grid, Button, Typography } from '@material-ui/core';
import TextInput from '../../components/form/TextInput';
import { TEST_USER_DATA } from '../../testData';
import Profile from '../../components/profile/Profile';

const buttonStyle = {
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    margin: 10
};

function AddHR() {
    const [hasHR, setHasHR] = useState(1);
    const [empId, setEmpId] = useState('');

    const findEmp = (id) => { }

    const noHR = (
        <Grid container direction='column' justify='center'>
            <Grid item >
                <Button onClick={() => setHasHR(3)} style={buttonStyle} >
                    Add New HR Manager
                    </Button>
            </Grid>
            <Grid item>
                <Button onClick={() => setHasHR(2)} style={buttonStyle}>
                    Choose New HR from Employees
                </Button>
            </Grid>
        </Grid>
    );

    const selectFromEmployee = (
        <Grid container direction='column' justify='center'>

            <TextInput
                value={empId}
                label='Employee ID'
                onChange={(e) => setEmpId(e.target.value)}
            />

            <Button onClick={() => findEmp(empId)}>Find Employee</Button>
        </Grid>
    );

    const changeHR = (
        <Grid container direction='column' justify='center'>
            <Button onClick={() => setHasHR(0)}>Change HR Manager</Button>
            <Typography align='center'>Current HR Manager</Typography>
            <Profile data={TEST_USER_DATA} />

        </Grid>
    );

    const display = () => {
        switch (hasHR) {
            case 0:
                return noHR;
            case 1:
                return changeHR;
            case 2:
                return selectFromEmployee;
            case 3:
                return <UserFormManager />
            default:
                return null;
        }
    }

    return (
        <div>
            {display()}
        </div>
    )
}

export default AddHR;
