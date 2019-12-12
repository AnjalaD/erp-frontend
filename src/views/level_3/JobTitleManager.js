import React from 'react'
import { Container } from '@material-ui/core';
import { JOB_TITLES } from '../../constants/api';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';

function JobTitleManager() {
    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Job Titles'
                columns={[
                    {
                        title: 'Job Title',
                        field: 'job_title',
                    },
                    {
                        title: 'Access Level',
                        field: 'access_level',
                        lookup: { L1: 'L1', L2: 'L2', L3: 'L3', A: 'A' }
                    }
                ]}
                dataApi={JOB_TITLES}
                insertApi={JOB_TITLES}
                updateApi={JOB_TITLES}
                deleteApi={JOB_TITLES}
            />
        </Container>
    )

}

export default JobTitleManager