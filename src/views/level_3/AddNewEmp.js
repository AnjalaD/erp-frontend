import React from 'react';
import UserFormManager from '../../components/form/UserFormManager';
import { Container } from '@material-ui/core';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_EMPLOYEE } from '../../constants/api';


function AddNewEmp() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const submit = (newUser) => {
        fetchData(
            NEW_EMPLOYEE,
            makeOptions(token, 'POST', newUser),
            dispatch,
        );
    }

    return (
        <Container maxWidth='md'>
            <UserFormManager submit={submit} />
        </Container>
    )
}

export default AddNewEmp
