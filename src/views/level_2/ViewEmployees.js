import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import CustomTable from '../../components/table/CustomTable';
import { fetchData, makeOptions } from '../../util/helper';
import { FILTER_EMPLOYEES } from '../../constants/api';
import { URL } from '../../constants/constants';

function ViewEmployees() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.status.token);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData(
            FILTER_EMPLOYEES,
            makeOptions(token, 'POST', {
                employment_status: "ALL",
                dept_name: "ALL",
                active_status: "ALL",
                marital_status: "ALL",
                job_title: "ALL",
                pay_grade: "ALL"
            }),
            dispatch,
            res => res.json().then(res => setTableData(res))
        );
    }, [dispatch, token])

    return (
        <Container maxWidth='md'>
            <CustomTable
                columns={[
                    {
                        title: 'Emp. ID',
                        field: 'employee_id'
                    }, {
                        title: 'First-Name',
                        field: 'first_name'
                    }, {
                        title: 'Last-Name',
                        field: 'last_name'
                    }, {
                        title: 'Job Title',
                        field: 'job_title'
                    }, {
                        title: 'Department',
                        field: 'dept_name'
                    }
                ]}
                data={tableData}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit employee details',
                        onClick: (event, row) => window.open(URL + '/edit-employee/' + row.employee_id)
                    }
                ]}
            />
        </Container>
    )
}

export default ViewEmployees
