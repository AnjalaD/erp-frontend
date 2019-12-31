import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import CustomTable from '../../components/table/CustomTable'
import { fetchData, makeOptions } from '../../util/helper';
import { SUPER_EMPLOYEES } from '../../constants/api';

function SuperEmployees() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData(
            SUPER_EMPLOYEES,
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
                        title: 'First-Name',
                        field: 'first_name'
                    },
                    {
                        title: 'Last-Name',
                        field: 'last_name'
                    },
                    {
                        title: 'Department',
                        field: 'dept_name'
                    }, {
                        title: 'Job-Title',
                        field: 'job_title'
                    }
                ]}
                data={tableData}
            />
        </Container>
    )

}

export default SuperEmployees
