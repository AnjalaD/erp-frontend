import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { DEPARTMENTS } from '../../constants/api';

function DepartmentManager() {


    return (
        <div>
            <Container maxWidth='md'>
                <ExtendedEditableTable
                    title='Department Names'
                    columns={[
                        {
                            title: 'Department Name',
                            field: 'dept_name',
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
