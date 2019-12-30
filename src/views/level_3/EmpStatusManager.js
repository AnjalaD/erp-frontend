import React from 'react'
import { Container } from '@material-ui/core'
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable'
import { EMP_STATUS } from '../../constants/api'

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
                insertApi={EMP_STATUS}
                updateApi={EMP_STATUS}
                deleteApi={EMP_STATUS}
            />
        </Container>
    )
}

export default EmpStatusManager
