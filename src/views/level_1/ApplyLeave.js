import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import { useSelector, useDispatch } from 'react-redux';
import { GET_LEAVES } from '../../constants/api';
import { makeOptions, fetchData } from '../../util/helper';

function ApplyLeave() {
    const token = useSelector(({ status }) => status.token);
    const dispatch = useDispatch();
    const [leaves, setLeaves] = useState([]);
    //fetch leaves
    useEffect(() => {
        fetchData(GET_LEAVES,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setLeaves(res))
        )
    }, [dispatch, token]);

    return (
        <div>
            <CustomTable
                headers={['Leave-Type', 'Limit', 'Taken']}
                body={leaves}
            />
        </div>
    )
}

export default ApplyLeave
