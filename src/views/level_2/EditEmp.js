import React, { useState, useEffect } from 'react'
import { Grid, Button, Container } from '@material-ui/core'
import TextInput from '../../components/form/TextInput'
import { COLOURS } from '../../constants/constants';
import { fetchData, makeOptions } from '../../util/helper';
import { EMPLOYEE_BY_ID } from '../../constants/api';
import { useSelector, useDispatch } from 'react-redux';
import EditUserFormManager from '../../components/form/EditUserFormManager';

const button1Style = {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    height: 55,
    padding: 10,
    color: COLOURS.primary.darker,
    backgroundColor: COLOURS.primary.lighter
};

function EditEmp(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [empId, setEmpId] = useState(props.match.params.id || '');
    const [user, setUser] = useState(null);


    const findEmp = () => {
        fetchData(
            EMPLOYEE_BY_ID,
            makeOptions(token, 'POST', {
                "employee_id": empId
            }),
            dispatch,
            (res) => res.json().then(res => setUser(res))
        );
    };

    useEffect(findEmp, [])

    const submit = (newUser) => { }

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

                <Button variant='contained' onClick={findEmp} style={button1Style}>
                    Find Employee
                </Button>
                {user ? <EditUserFormManager oldUser={user} /> : null}
            </Grid>
        </Container>
    )
}

export default EditEmp