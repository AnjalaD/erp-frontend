import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, Typography, Container } from '@material-ui/core';
import TextInput from '../../components/form/TextInput';
import Profile from '../../components/profile/Profile';
import { HR_AVAILABILITY, EMPLOYEE_BY_ID } from '../../constants/api';
import { makeOptions, fetchData } from '../../util/helper';
import AdminUserForm from '../../components/form/AdminUserForm';
import { PrimaryTheme } from '../../components/settings/Colours';

const buttonStyle = {
    height: 40,
    width: 300,
    backgroundColor: PrimaryTheme.shades.light,
    color: PrimaryTheme.shades.darker
}

const dangerButtonStyle = {
    height: 40,
    width: '100%',
    color: '#000',
    backgroundColor: '#d32f2f'
}

const button1Style = {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    height: 55,
    padding: 10,
    backgroundColor: PrimaryTheme.shades.light,
    color: PrimaryTheme.shades.darker
};

function AddHR() {
    const [hasHR, setHasHR] = useState(0);
    const [empId, setEmpId] = useState('');
    const [user, setUser] = useState(null);
    const [hr, setHR] = useState(null);

    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token)

    useEffect(() => {
        fetchData(
            HR_AVAILABILITY,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => {
                setHR(res);
                setHasHR(1);
            })
        );
    }, [dispatch, token]);

    const findEmp = () => {
        fetchData(
            EMPLOYEE_BY_ID,
            makeOptions(token, 'POST', {
                "employee_id": empId
            }),
            dispatch,
            (res) => res.json().then(res => setUser(res)),
            () => setUser(null)
        );
    };

    const setNewHr = () => {
        fetchData(
            HR_AVAILABILITY,
            makeOptions(token, 'PATCH', {
                employee_id: user.employee.employee_id
            }),
            dispatch,
            res => res.json().then(() => window.location.reload())
        );
    }

    const noHR = (
        <Grid container direction='column' spacing={3}
            alignItems='center'
            justify='center'
            style={{ paddingTop: 40 }}
        >
            <Grid item xs={8}>
                <Button onClick={() => setHasHR(3)} style={buttonStyle} >
                    Add New HR Manager
                    </Button>
            </Grid>
            <Grid item xs={8}>
                <Button onClick={() => setHasHR(2)} style={buttonStyle}>
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

            <Button variant='contained' onClick={findEmp} style={button1Style}>
                Find Employee
                </Button>
            {
                user ?
                    <Grid container
                        justify='center'
                        alignItems='center'
                        spacing={2}
                        style={{ marginBottom: 24 }}
                    >
                        <Profile data={user.employee} />
                        <Grid item xs={8}>
                            <Button onClick={setNewHr} style={dangerButtonStyle}>
                                Select As New HRM
                            </Button>
                        </Grid>
                    </Grid>
                    : null
            }
        </Grid>
    );

    const changeHR = (
        <Grid container
            direction='column'
            justify='center'
            alignItems='center'
            style={{ marginBottom: 24 }}
        >
            <Grid item xs={8}>
                <Button onClick={() => setHasHR(0)} style={dangerButtonStyle}>
                    Change HR Manager
                </Button>
            </Grid>
            <Typography align='center' style={{ marginTop: 24 }}>
                Current HR Manager
            </Typography>
            <Profile data={hr} />
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
                return <AdminUserForm
                    prevStep={() => setHasHR(1)}
                    nextStep={() => window.location.reload()}
                />
            default:
                return null;
        }
    }

    return (
        <Container maxWidth='md' style={{ paddingTop: 24 }}>
            {display()}
        </Container>
    )
}

export default AddHR;
