import React from 'react'
import UserFormManager from '../../components/form/UserFormManager'
import { Container } from '@material-ui/core'

function AddNewEmp() {
    const submit = () => { }

    return (
        <Container maxWidth='md'>
            <UserFormManager submit={submit} />
        </Container>
    )
}

export default AddNewEmp
