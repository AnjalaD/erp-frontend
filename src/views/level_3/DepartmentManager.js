import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { DEPARTMENTS, DEPARTMENTS_ADD } from '../../constants/api';

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
                    insertApi={DEPARTMENTS_ADD}
                    updateApi={DEPARTMENTS_ADD}
                />
            </Container>
        </div>
    )
}

export default DepartmentManager
