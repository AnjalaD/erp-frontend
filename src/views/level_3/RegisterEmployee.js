import React from 'react';
import { Container } from '@material-ui/core';
import RegisterForm from '../../components/form/RegisterForm';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_EMPLOYEE } from '../../constants/api';

function RegisterEmployee() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const submit = (data) => {
        fetchData(
            REGISTER_EMPLOYEE,
            makeOptions(token, 'POST', data),
            dispatch
        );
    }

    return (
        <Container maxWidth='sm'>
            <RegisterForm submit={submit} />
        </Container>
    )
}

export default RegisterEmployee
