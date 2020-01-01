import React from 'react';
import { Container } from '@material-ui/core';
import RegisterForm from '../../components/form/RegisterForm';
import { fetchData, makeOptions } from '../../util/helper';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PASSWORD } from '../../constants/api';

function ResetPassword(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const submit = (data) => {
        fetchData(
            RESET_PASSWORD,
            makeOptions(token, 'POST', data),
            dispatch
        );
    }

    return (
        <Container maxWidth='sm'>
            <RegisterForm submit={submit} label='Reset User Account' button='Reset' {...props} />
        </Container>
    )
}

export default ResetPassword
