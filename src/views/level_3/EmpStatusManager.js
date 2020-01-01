import React from 'react'
import { Container } from '@material-ui/core'
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable'
import { EMP_STATUS, EMP_STATUS_ADD } from '../../constants/api'

function EmpStatusManager() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Employment Status'
                columns={[
                    {
                        title: 'Employment Status',
                        field: 'employment_status',
                    }
                ]}
                dataApi={EMP_STATUS}
                insertApi={EMP_STATUS_ADD}
                updateApi={EMP_STATUS_ADD}
            />
        </Container>
    )
}

export default EmpStatusManager
