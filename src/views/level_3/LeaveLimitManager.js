import React from 'react';
import { Container } from '@material-ui/core';
import { LEAVE_LIMITS } from '../../constants/api';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';

function LeaveLimitManager() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Leave '
                columns={[
                    {
                        title: 'Job title',
                        field: 'job_title',
                        readonly: true
                    },
                    {
                        title: 'Leave Type',
                        field: 'leave_type',
                        readonly: true
                    },
                    {
                        title: 'Max. Limit',
                        field: 'limit',
                        readonly: true
                    }
                ]}
                dataApi={LEAVE_LIMITS}
                insertApi={LEAVE_LIMITS}
                updateApi={LEAVE_LIMITS}
                deleteApi={LEAVE_LIMITS}
            />
        </Container>
    )

}

export default LeaveLimitManager