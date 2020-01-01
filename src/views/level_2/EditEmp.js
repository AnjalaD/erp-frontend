import React, { useState, useEffect } from 'react'
import { Grid, Button, Container } from '@material-ui/core'
import TextInput from '../../components/form/TextInput'
import { fetchData, makeOptions } from '../../util/helper';
import { EMPLOYEE_BY_ID } from '../../constants/api';
import { useSelector, useDispatch } from 'react-redux';
import EditUserFormManager from '../../components/form/EditUserFormManager';
import { PrimaryTheme } from '../../components/settings/Colours'
const button1Style = {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    height: 55,
    padding: 10,
    color: PrimaryTheme.shades.darker,
    backgroundColor: PrimaryTheme.shades.lighter
};

function EditEmp(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const id = props.match.params.id;
    const [empId, setEmpId] = useState(id === ':id' || !id ? '' : id);
    const [user, setUser] = useState(null);
    const [counter, setCounter] = useState(0);


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

    useEffect(findEmp, [counter]);

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
                {user ? <EditUserFormManager oldUser={user} reload={setCounter} /> : null}
            </Grid>
        </Container>
    )
}

export default EditEmp