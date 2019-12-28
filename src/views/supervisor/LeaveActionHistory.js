import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import CustomTable from '../../components/table/CustomTable'
import { fetchData, makeOptions } from '../../util/helper';

function LeaveActionHistory() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [tableData, setTableData] = useState([]);

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
                        title: 'Date',
                        field: 'date'
                    },
                    {
                        title: 'Leave Type',
                        field: 'leave_type'
                    },
                    {
                        title: 'Status',
                        field: 'status'
                    }
                ]}
                data={tableData}
            />
        </Container>
    )
}

export default LeaveActionHistory
