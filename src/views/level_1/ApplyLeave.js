import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import { useSelector, useDispatch } from 'react-redux';
import { LEAVES_SUMMERY } from '../../constants/api';
import { makeOptions, fetchData } from '../../util/helper';
import { Container, Grid } from '@material-ui/core';
import LeaveForm from '../../components/form/LeaveForm';

function ApplyLeave() {
    const token = useSelector(({ status }) => status.token);
    const dispatch = useDispatch();
    const [leaves, setLeaves] = useState([]);

    const formatTableData = (data) => (
        data.map(obj => (
            {
                ...obj,
                leaves_taken: obj.leaves_taken !== null ? obj.leaves_taken : 0
            }
        ))
    )

    // fetch leaves
    useEffect(() => {
        fetchData(LEAVES_SUMMERY,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setLeaves(formatTableData(res)))
        )
    }, [dispatch, token]);

    console.log(leaves);
    return (
        <Container maxWidth='md'>
            <Grid container>
                <Grid item xs={12}>
                    <CustomTable
                        style={{ padding: 10, margin: 10 }}
                        title='My leaves'
                        columns={[
                            {
                                title: 'Leave Type',
                                field: 'leave_type'
                            },
                            {
                                title: 'Max. Leaves',
                                field: 'limit'
                            },
                            {
                                title: 'Leaves Taken',
                                field: 'leaves_taken'
                            }
                        ]}
                        data={leaves}
                        pageSize={5}
                    />
                </Grid>
                <Grid item xs={12}>
                    <LeaveForm leaveTypes={leaves.map(leave => leave.leave_type)} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ApplyLeave
