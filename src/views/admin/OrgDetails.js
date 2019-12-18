import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { ORG_VIEW, ORG_INSERT, ORG_DELETE } from '../../constants/api';

export default function OrgDetails() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Organization Detailes'
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
                dataApi={ORG_VIEW}
                insertApi={ORG_INSERT}
                updateApi={ORG_INSERT}
                deleteApi={ORG_DELETE}
            />
        </Container>
    )
}
