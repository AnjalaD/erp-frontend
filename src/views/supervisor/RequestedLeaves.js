import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import CustomTable from '../../components/table/CustomTable';
import { MTableToolbar } from 'material-table';
import { SUPER_GET_LEAVES, SUPER_REJECT_LEAVE, SUPER_APPROVE_LEAVE } from '../../constants/api';
import { REJECTED, APPROVED, PENDING } from '../../constants/constants';

function RequestedLeaves() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [error, setError] = useState(null);

    const [tableData, setTableData] = useState([]);

    const rejectR = (resolve, reject, leaveRequest) => {
        fetchData(
            SUPER_REJECT_LEAVE,
            makeOptions(token, 'POST', {
                employee_id: leaveRequest.employee_id,
                date: leaveRequest.date,
                leave_type: leaveRequest.leave_type,
                state: REJECTED
            }),
            dispatch,
            () => resolve(window.location.reload()),
            () => reject(setError('Error in rejecting request'))
        );
    };

    const approve = (resolve, reject, leaveRequest) => {
        fetchData(
            SUPER_APPROVE_LEAVE,
            makeOptions(token, 'POST', {
                employee_id: leaveRequest.employee_id,
                date: leaveRequest.date,
                leave_type: leaveRequest.leave_type,
                state: APPROVED
            }),
            dispatch,
            () => resolve(window.location.reload()),
            () => reject(setError('Error in approving request'))
        );
    };

    useEffect(() => {
        fetchData(
            SUPER_GET_LEAVES,
            makeOptions(token, 'POST', { state: PENDING }),
            dispatch,
            (res) => res.json()
                .then(res => setTableData(res))
        );
    }, [dispatch, token])

    return (
        <Container maxWidth='md'>
            <CustomTable
                title="Requested Leaves"
                columns={[
                    {
                        title: 'Emp. ID',
                        field: 'employee_id'
                    },
                    {
                        title: 'Leave Type',
                        field: 'leave_type'
                    },
                    {
                        title: 'Date',
                        field: 'date'
                    }
                ]}
                data={tableData}
                actions={[
                    {
                        icon: 'check',
                        tooltip: 'Approve leave request',
                        onClick: (event, row) =>
                            new Promise((resolve, reject) =>
                                approve(resolve, reject, row))
                    },
                    {
                        icon: 'cancel',
                        tooltip: 'Reject leave request',
                        onClick: (event, row) =>
                            new Promise((resolve, reject) =>
                                rejectR(resolve, reject, row))
                    }
                ]}
                components={{
                    Toolbar: props => (
                        <div>
                            <MTableToolbar {...props} />
                            <Typography align='center' variant='body2' color='error'>
                                {error ? '*' + error : ''}
                            </Typography>
                        </div>
                    )
                }}
            />
        </Container>
    )
}

export default RequestedLeaves
