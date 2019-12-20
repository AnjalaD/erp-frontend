import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LEAVES_HISTORY } from '../../constants/api';
import { fetchData, makeOptions } from '../../util/helper';
import CustomTable from '../../components/table/CustomTable';
import { Typography } from '@material-ui/core';

function LeaveHistory() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData(
            LEAVES_HISTORY,
            makeOptions(token),
            dispatch,
            res => res.json().then(res => setData(res))
        );
    }, [dispatch, token]);

    return (
        <CustomTable
            title='My Leaves'
            columns={[
                {
                    title: 'Leave Type',
                    field: 'leave_type'
                },
                {
                    title: 'Date',
                    field: 'date',
                },
                {
                    title: 'Status',
                    field: 'state'
                }
            ]}
            data={data.map(obj => ({
                ...obj,
                date: obj.date.slice(0, 10)
            }))}
            detailPanel={rowData =>
                <Typography variant='body1' style={{ marginLeft: 10, marginTop: 5 }}>
                    Reason:- {rowData.reason}
                </Typography>
            }
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
    )
}

export default LeaveHistory
