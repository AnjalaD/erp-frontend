import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import CustomTable from '../../components/table/CustomTable';
import { MTableToolbar } from 'material-table';

function RequestedLeaves() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [error, setError] = useState(null);

    const [tableData, setTableData] = useState([
        {
            employee_id: 1234,
            date: '120204',
            leave_type: 'annual',
        }
    ]);

    const rejectR = (resolve, reject, leaveRequest) => {
        fetchData(
            '',
            makeOptions(token, 'POST', {
                leaveRequest: leaveRequest
            }),
            dispatch,
            () => resolve(),
            () => reject(setError('Error in rejecting request'))
        );
    };

    const approve = (resolve, reject, leaveRequest) => {
        fetchData(
            '',
            makeOptions(token, 'POST', {
                leaveRequest: leaveRequest
            }),
            dispatch,
            () => resolve(),
            () => reject(setError('Error in approving request'))
        );
    };

    useEffect(() => {
        fetchData(
            '',
            makeOptions(token),
            dispatch,
            (res) => res.json()
                .then(res => setTableData(res))
        );
    }, [dispatch, token])

    return (
        <Container maxWidth='md'>
            <CustomTable
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