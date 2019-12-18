import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import { useSelector, useDispatch } from 'react-redux';
import { GET_LEAVES } from '../../constants/api';
import { makeOptions, fetchData } from '../../util/helper';
import { Container, Grid } from '@material-ui/core';
import LeaveForm from '../../components/form/LeaveForm';

function ApplyLeave() {
    const token = useSelector(({ status }) => status.token);
    const dispatch = useDispatch();
    const [leaves, setLeaves] = useState([]);

    const formatTableData = (data) => (
        data.map(obj => (
            [obj.leave_type, obj.limit, obj.leaves_taken ? obj.leaves_taken : 0]
        ))
    )

    // fetch leaves
    useEffect(() => {
        fetchData(GET_LEAVES,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setLeaves(formatTableData(res.result)))
        )
    }, [dispatch, token]);

    console.log(leaves);
    return (
        <Container maxWidth='md'>
            <Grid container>
                <Grid item xs={12}>
                    <CustomTable
                        headers={['Leave-Type', 'Limit', 'Leaves-Taken']}
                        body={leaves}
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
