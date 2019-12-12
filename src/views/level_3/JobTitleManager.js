import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, makeOptions } from '../../util/helper';
import { JOB_TITLES } from '../../constants/api';
import EditableTable from '../../components/table/EditableTable';

function JobTitleManager() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);

    const [dbJobTitles, setDbJobTitles] = useState([]);

    //fetch leaveLimit from db
    useEffect(() => {
        fetchData(
            JOB_TITLES,
            makeOptions(token),
            dispatch,
            (res) => res.json().then(res => setDbJobTitles(res))
        );
    }, [dispatch, token]);

    const del = (oldData, onSuccess, onFail) => {
        console.log('oldData', oldData);
        fetchData(
            JOB_TITLES,
            makeOptions(token, 'DELETE', {}),
            null,
            onSuccess,
            onFail
        )
    };

    const update = (newData, oldData, onSuccess, onFail) => {
        console.log('newData', newData, oldData);
        fetchData(
            JOB_TITLES,
            makeOptions(token, 'POST', {}),
            null,
            onSuccess,
            onFail
        )
    };

    const insert = (newData, onSuccess, onFail) => {
        console.log('newData', newData);
        fetchData(
            JOB_TITLES,
            makeOptions(token, 'POST', {}),
            null,
            onSuccess,
            onFail
        )
    };

    return (
        <Container maxWidth='md'>
            <EditableTable
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
                data={dbJobTitles}
                insert={insert}
                update={update}
                delete={del}
            />
        </Container>
    )

}

export default JobTitleManager