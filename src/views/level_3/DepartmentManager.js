import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { DEPARTMENTS } from '../../constants/api';

function DepartmentManager() {


    return (
        <div>
            <Container maxWidth='md'>
                <ExtendedEditableTable
                    title='Custom Form Fields'
                    columns={[
                        {
                            title: 'Field',
                            field: 'attribute',
                        }
                    ]}
                    dataApi={DEPARTMENTS}
                    insertApi={DEPARTMENTS}
                    updateApi={DEPARTMENTS}
                    deleteApi={DEPARTMENTS}
                />
            </Container>
        </div>
    )
}

export default DepartmentManager
