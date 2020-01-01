import React from 'react';
import { Container } from '@material-ui/core';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';
import { LEAVE_TYPES } from '../../constants/api';

function LeaveTypeManger() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Leave Types'
                columns={[
                    {
                        title: 'Leave Type',
                        field: 'leave_type',
                    }
                ]}
                dataApi={LEAVE_TYPES}
                insertApi={LEAVE_TYPES}
                updateApi={LEAVE_TYPES}
                insertMethod='PUT'
            />
        </Container>
    )
}

export default LeaveTypeManger
