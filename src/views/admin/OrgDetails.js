import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { ORG_DETAILS } from '../../constants/api';

export default function OrgDetails() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Organization Details'
                columns={[
                    {
                        title: 'Field',
                        field: 'key',
                        editable: 'onAdd'
                    },
                    {
                        title: 'Value',
                        field: 'value'
                    }
                ]}
                dataApi={ORG_DETAILS}
                insertApi={ORG_DETAILS}
                updateApi={ORG_DETAILS}
            />
        </Container>
    )
}
