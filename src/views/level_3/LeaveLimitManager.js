import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import { LEAVE_LIMITS } from '../../constants/api';
import ExtendedEditableTable from '../../components/table/ExtendedEditableTable';

function LeaveLimitManager() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    //fetch leaveLimit from db
    useEffect(() => {
        fetchData(
            '',
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => { })
        );
    }, [dispatch, token]);

    return (
        <Container maxWidth='md'>
            <ExtendedEditableTable
                title='Leave '
                columns={[
                    {
                        title: 'Pay Grade',
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