import React from 'react'
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { CUSTOM_FIELDS, CUSTOM_FIELDS_ADD } from '../../constants/api';

function FormFieldManager() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Custom Form Fields'
                columns={[
                    {
                        title: 'Field',
                        field: 'attribute',
                    }
                ]}
                dataApi={CUSTOM_FIELDS}
                insertApi={CUSTOM_FIELDS_ADD}
                updateApi={CUSTOM_FIELDS_ADD}
            />
        </Container>
    )
}

export default FormFieldManager
