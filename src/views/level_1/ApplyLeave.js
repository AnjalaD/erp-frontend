import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import { useSelector, useDispatch } from 'react-redux';
import { GET_LEAVES } from '../../constants/api';
import { makeOptions, fetchData } from '../../util/helper';
import { Container } from '@material-ui/core';

function ApplyLeave() {
    const token = useSelector(({ status }) => status.token);
    const dispatch = useDispatch();
    const [leaves, setLeaves] = useState([]);

    const formatTableData = (data) => (
        data.map(obj => (
            [obj.leave_type, obj.limit, obj.leaves_taken]
        ))
    )
    //fetch leaves
    useEffect(() => {
        fetchData(GET_LEAVES,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setLeaves(formatTableData(res.result)))
        )
    }, [dispatch, token]);

    return (
        <Container maxWidth='md'>
            <CustomTable
                headers={['Leave-Type', 'Limit', 'Leaves-Taken']}
                body={leaves}
            />
        </Container>
    )
}

export default ApplyLeave
