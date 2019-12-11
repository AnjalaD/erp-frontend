import React, { useState } from 'react'
import UserFormManager from '../../components/form/UserFormManager'
import { Grid, Button, Typography } from '@material-ui/core';
import TextInput from '../../components/form/TextInput';
import { TEST_USER_DATA } from '../../testData';
import Profile from '../../components/profile/Profile';
import { COLOURS } from '../../constants/constants';

const button0Style = {
    fontSize: 22,
    height: 100,
    width: '50vw',
    minWidth: '300px',
    textAlign: 'center',
    margin: 10,
    backgroundColor: COLOURS.primary.light,
    color: COLOURS.primary.darker
};

const button1Style = {
    marginLeft: 10,
    fontSize: 18,
    height: 60,
    backgroundColor: COLOURS.primary.light,
    color: COLOURS.primary.darker
};

function AddHR() {
    const [hasHR, setHasHR] = useState(0);
    const [empId, setEmpId] = useState('');

    const findEmp = (id) => { }
    const submitNewEmp = () => { }

    const noHR = (
        <Grid container direction='column'
            alignItems='center'
            justify='center'
            style={{ paddingTop: 40 }}
        >
            <Grid item >
                <Button onClick={() => setHasHR(3)} style={button0Style} >
                    Add New HR Manager
                    </Button>
            </Grid>
            <Grid item>
                <Button onClick={() => setHasHR(2)} style={button0Style}>
                    Choose New HR from Employees
                </Button>
            </Grid>
        </Grid>
    );

    const selectFromEmployee = (
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
                return <UserFormManager submit={submitNewEmp} />
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
