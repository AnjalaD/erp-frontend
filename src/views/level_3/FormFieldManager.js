import React from 'react'
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { FORM_FIELDS } from '../../constants/api';

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
                dataApi={FORM_FIELDS}
                insertApi={FORM_FIELDS}
                updateApi={FORM_FIELDS}
                deleteApi={FORM_FIELDS}
            />
        </Container>
    )
}

export default FormFieldManager
